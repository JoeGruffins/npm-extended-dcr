"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _AbstractMethod2 = _interopRequireDefault(require("./AbstractMethod"));

var _DataManager = _interopRequireDefault(require("../../data/DataManager"));

var GetSettings = /*#__PURE__*/function (_AbstractMethod) {
  (0, _inheritsLoose2["default"])(GetSettings, _AbstractMethod);

  function GetSettings(message) {
    var _this;

    _this = _AbstractMethod.call(this, message) || this;
    _this.requiredPermissions = [];
    _this.useDevice = false;
    _this.useUi = false;
    return _this;
  }

  var _proto = GetSettings.prototype;

  _proto.run = function run() {
    return Promise.resolve(_DataManager["default"].getSettings());
  };

  return GetSettings;
}(_AbstractMethod2["default"]);

exports["default"] = GetSettings;