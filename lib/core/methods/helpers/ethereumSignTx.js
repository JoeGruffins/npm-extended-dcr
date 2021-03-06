"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ethereumSignTx = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _constants = require("../../../constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var splitString = function splitString(str, len) {
  if (str == null) {
    return ['', ''];
  }

  var first = str.slice(0, len);
  var second = str.slice(len);
  return [first, second];
};

var processTxRequest = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(typedCall, request, data, chain_id) {
    var v, r, s, _splitString, first, rest, response;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (request.data_length) {
              _context.next = 8;
              break;
            }

            v = request.signature_v;
            r = request.signature_r;
            s = request.signature_s;

            if (!(v == null || r == null || s == null)) {
              _context.next = 6;
              break;
            }

            throw _constants.ERRORS.TypedError('Runtime', 'processTxRequest: Unexpected request');

          case 6:
            // recompute "v" value
            // from: https://github.com/kvhnuke/etherwallet/commit/288bd35497e00ad3947e9d11f60154bae1bf3c2f
            if (chain_id && v <= 1) {
              v += 2 * chain_id + 35;
            }

            return _context.abrupt("return", Promise.resolve({
              v: '0x' + v.toString(16),
              r: '0x' + r,
              s: '0x' + s
            }));

          case 8:
            _splitString = splitString(data, request.data_length * 2), first = _splitString[0], rest = _splitString[1];
            _context.next = 11;
            return typedCall('EthereumTxAck', 'EthereumTxRequest', {
              data_chunk: first
            });

          case 11:
            response = _context.sent;
            return _context.abrupt("return", processTxRequest(typedCall, response.message, rest, chain_id));

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function processTxRequest(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

function stripLeadingZeroes(str) {
  while (/^00/.test(str)) {
    str = str.slice(2);
  }

  return str;
}

var ethereumSignTx = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(typedCall, address_n, to, value, gas_limit, gas_price, nonce, data, chain_id, tx_type) {
    var length, _splitString2, first, rest, message, response;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            length = data == null ? 0 : data.length / 2;
            _splitString2 = splitString(data, 1024 * 2), first = _splitString2[0], rest = _splitString2[1];
            message = {
              address_n: address_n,
              nonce: stripLeadingZeroes(nonce),
              gas_price: stripLeadingZeroes(gas_price),
              gas_limit: stripLeadingZeroes(gas_limit),
              to: to,
              value: stripLeadingZeroes(value)
            };

            if (length !== 0) {
              message = _objectSpread(_objectSpread({}, message), {}, {
                data_length: length,
                data_initial_chunk: first
              });
            }

            if (chain_id) {
              message = _objectSpread(_objectSpread({}, message), {}, {
                chain_id: chain_id
              });
            }

            if (tx_type !== null) {
              message = _objectSpread(_objectSpread({}, message), {}, {
                tx_type: tx_type
              });
            }

            _context2.next = 8;
            return typedCall('EthereumSignTx', 'EthereumTxRequest', message);

          case 8:
            response = _context2.sent;
            return _context2.abrupt("return", processTxRequest(typedCall, response.message, rest, chain_id));

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function ethereumSignTx(_x5, _x6, _x7, _x8, _x9, _x10, _x11, _x12, _x13, _x14) {
    return _ref2.apply(this, arguments);
  };
}();

exports.ethereumSignTx = ethereumSignTx;