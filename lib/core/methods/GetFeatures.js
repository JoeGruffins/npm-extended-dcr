"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _AbstractMethod2 = _interopRequireDefault(require("./AbstractMethod"));

var UI = _interopRequireWildcard(require("../../constants/ui"));

var GetFeatures = /*#__PURE__*/function (_AbstractMethod) {
  (0, _inheritsLoose2["default"])(GetFeatures, _AbstractMethod);

  function GetFeatures(message) {
    var _this;

    _this = _AbstractMethod.call(this, message) || this;
    _this.requiredPermissions = [];
    _this.useUi = false;
    _this.allowDeviceMode = [].concat(_this.allowDeviceMode, [UI.INITIALIZE, UI.BOOTLOADER]);
    _this.useDeviceState = false;
    _this.skipFirmwareCheck = true;
    return _this;
  }

  var _proto = GetFeatures.prototype;

  _proto.run = function run() {
    return Promise.resolve(this.device.features);
  };

  return GetFeatures;
}(_AbstractMethod2["default"]);

exports["default"] = GetFeatures;