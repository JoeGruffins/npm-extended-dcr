"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _AbstractMethod2 = _interopRequireDefault(require("./AbstractMethod"));

var _paramsValidator = require("./helpers/paramsValidator");

var _CoinInfo = require("../../data/CoinInfo");

var _pathUtils = require("../../utils/pathUtils");

var helper = _interopRequireWildcard(require("./helpers/binanceSignTx"));

var BinanceSignTransaction = /*#__PURE__*/function (_AbstractMethod) {
  (0, _inheritsLoose2["default"])(BinanceSignTransaction, _AbstractMethod);

  function BinanceSignTransaction(message) {
    var _this;

    _this = _AbstractMethod.call(this, message) || this;
    _this.requiredPermissions = ['read', 'write'];
    _this.firmwareRange = (0, _paramsValidator.getFirmwareRange)(_this.name, (0, _CoinInfo.getMiscNetwork)('BNB'), _this.firmwareRange);
    _this.info = 'Sign Binance transaction';
    var payload = message.payload; // validate incoming parameters

    (0, _paramsValidator.validateParams)(payload, [{
      name: 'path',
      type: 'string',
      obligatory: true
    }, {
      name: 'transaction',
      obligatory: true
    }]);
    var path = (0, _pathUtils.validatePath)(payload.path, 3);
    var transaction = helper.validate(payload.transaction);
    _this.params = {
      path: path,
      transaction: transaction
    };
    return _this;
  }

  var _proto = BinanceSignTransaction.prototype;

  _proto.run = function run() {
    return helper.signTx(this.device.getCommands().typedCall.bind(this.device.getCommands()), this.params.path, this.params.transaction);
  };

  return BinanceSignTransaction;
}(_AbstractMethod2["default"]);

exports["default"] = BinanceSignTransaction;