"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InjectPointHealth = void 0;

var _fs = require("fs");

var _factoryConfigure = require("../api/factory-configure.api");

var _factoryHealth = require("./factory-health.api");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var InjectPointHealth = /*#__PURE__*/function () {
  function InjectPointHealth() {
    _classCallCheck(this, InjectPointHealth);

    this._factoryHealth = new _factoryHealth.FactoryHealth();
  }

  _createClass(InjectPointHealth, [{
    key: "onStart",
    value: function onStart(properties) {
      var factoryConfigure = new _factoryConfigure.FactoryConfigure();

      if ((0, _fs.existsSync)(properties.fileConfig) && factoryConfigure.configure(properties)) {
        factoryConfigure.build();
      }

      this._factoryHealth.configure(factoryConfigure);
    }
  }, {
    key: "factoryHealth",
    get: function get() {
      return this._factoryHealth;
    }
  }]);

  return InjectPointHealth;
}();

exports.InjectPointHealth = InjectPointHealth;