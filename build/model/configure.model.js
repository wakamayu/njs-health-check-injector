"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfigureModel = void 0;

var _healthCheck = require("./health-check.model");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var ConfigureModel = /*#__PURE__*/function () {
  function ConfigureModel() {
    _classCallCheck(this, ConfigureModel);

    this._healthcheck = new _healthCheck.HealthCheckModel();
  }

  _createClass(ConfigureModel, [{
    key: "healthcheck",
    get: function get() {
      return this._healthcheck;
    },
    set: function set(_healthcheck) {
      this._healthcheck = _healthcheck;
    }
  }]);

  return ConfigureModel;
}();

exports.ConfigureModel = ConfigureModel;