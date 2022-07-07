"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ApplicationHealth = void 0;

var _express = require("express");

var _injectPointHealth = require("./inject-point-health.api");

var _health = require("../router/health.resource");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var router = (0, _express.Router)();
var injectPointHealth = new _injectPointHealth.InjectPointHealth();

var ApplicationHealth = /*#__PURE__*/function () {
  function ApplicationHealth() {
    _classCallCheck(this, ApplicationHealth);
  }

  _createClass(ApplicationHealth, [{
    key: "configure",
    value: function configure(properties) {
      injectPointHealth.onStart(properties);
      router.use((0, _health.HealthResource)(injectPointHealth.factoryHealth));
      return router;
    }
  }]);

  return ApplicationHealth;
}();

exports.ApplicationHealth = ApplicationHealth;