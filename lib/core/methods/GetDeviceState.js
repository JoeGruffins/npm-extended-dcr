"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _AbstractMethod2 = _interopRequireDefault(require("./AbstractMethod"));

var GetDeviceState = /*#__PURE__*/function (_AbstractMethod) {
  (0, _inheritsLoose2["default"])(GetDeviceState, _AbstractMethod);

  function GetDeviceState(message) {
    var _this;

    _this = _AbstractMethod.call(this, message) || this;
    _this.requiredPermissions = [];
    return _this;
  }

  var _proto = GetDeviceState.prototype;

  _proto.run = function run() {
    return Promise.resolve({
      state: this.device.getExternalState()
    });
  };

  return GetDeviceState;
}(_AbstractMethod2["default"]);

exports["default"] = GetDeviceState;