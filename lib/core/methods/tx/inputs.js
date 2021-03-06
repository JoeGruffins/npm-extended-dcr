"use strict";

exports.__esModule = true;
exports.inputToTrezor = exports.inputToHD = exports.enhanceTrezorInputs = exports.validateTrezorInputs = void 0;

var _bufferUtils = require("../../../utils/bufferUtils");

var _pathUtils = require("../../../utils/pathUtils");

var _hdnode = require("../../../utils/hdnode");

var _paramsValidator = require("../helpers/paramsValidator");

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/** *****
 * SignTx: validation
 *******/
var validateTrezorInputs = function validateTrezorInputs(inputs, coinInfo) {
  var trezorInputs = inputs.map(_pathUtils.fixPath).map(_hdnode.convertMultisigPubKey.bind(null, coinInfo.network));

  for (var _iterator = _createForOfIteratorHelperLoose(trezorInputs), _step; !(_step = _iterator()).done;) {
    var input = _step.value;
    (0, _pathUtils.validatePath)(input.address_n);
    var useAmount = (0, _pathUtils.isSegwitPath)(input.address_n); // since 2.3.5 amount is obligatory for all inputs.
    // this change however is breaking 3rd party implementations
    // missing amount will be delivered by refTx object

    (0, _paramsValidator.validateParams)(input, [{
      name: 'prev_hash',
      type: 'string',
      obligatory: true
    }, {
      name: 'prev_index',
      type: 'number',
      obligatory: true
    }, {
      name: 'script_type',
      type: 'string'
    }, {
      name: 'amount',
      type: 'string',
      obligatory: useAmount
    }, {
      name: 'sequence',
      type: 'number'
    }, {
      name: 'multisig',
      type: 'object'
    }]);
  }

  return trezorInputs;
}; // this method exist as a workaround for breaking change described in validateTrezorInputs
// TODO: it could be removed after another major version release.


exports.validateTrezorInputs = validateTrezorInputs;

var enhanceTrezorInputs = function enhanceTrezorInputs(inputs, rawTxs) {
  inputs.forEach(function (input) {
    if (!input.amount) {
      // eslint-disable-next-line no-console
      console.warn('TrezorConnect.singTransaction deprecation: missing input amount.');
      var refTx = rawTxs.find(function (t) {
        return t.tx.txid === input.prev_hash;
      });

      if (refTx && refTx.type === 'blockbook') {
        input.amount = refTx.tx.vout[input.prev_index].value;
      }
    }
  });
};
/** *****
 * Transform from Trezor format to hd-wallet, called from SignTx to get refTxs from bitcore
 *******/


exports.enhanceTrezorInputs = enhanceTrezorInputs;

var inputToHD = function inputToHD(input) {
  return {
    hash: (0, _bufferUtils.reverseBuffer)(Buffer.from(input.prev_hash, 'hex')),
    index: input.prev_index,
    path: input.address_n,
    amount: typeof input.amount === 'number' ? input.amount.toString() : input.amount,
    segwit: (0, _pathUtils.isSegwitPath)(input.address_n)
  };
};
/** *****
 * Transform from hd-wallet format to Trezor
 *******/


exports.inputToHD = inputToHD;

var inputToTrezor = function inputToTrezor(input, sequence) {
  var hash = input.hash,
      index = input.index,
      path = input.path,
      amount = input.amount;
  return {
    address_n: path,
    prev_index: index,
    prev_hash: (0, _bufferUtils.reverseBuffer)(hash).toString('hex'),
    script_type: (0, _pathUtils.getScriptType)(path),
    // $FlowIssue: amount in BuildTxInput type (hd-wallet) is declared as optional // TODO
    amount: amount,
    sequence: sequence
  };
};

exports.inputToTrezor = inputToTrezor;