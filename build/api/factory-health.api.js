"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FactoryHealth = void 0;

var _healthCheck = require("../model/health-check.model");

var _promiseTargetDriver = require("./promise-target-driver.api");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var FactoryHealth = /*#__PURE__*/function () {
  function FactoryHealth() {
    _classCallCheck(this, FactoryHealth);

    this.healthCheckModel = new _healthCheck.HealthCheckModel();
  }

  _createClass(FactoryHealth, [{
    key: "configure",
    value: function configure(factoryConfigure) {
      if (factoryConfigure.isValid()) {
        // Aqui debe validarse Json Schema
        this.healthCheckModel = factoryConfigure.healthCheckModel;
      }
    }
  }, {
    key: "build",
    value: function build() {
      var _this = this;

      var selectorTracer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var promiseTargetDriver = new _promiseTargetDriver.PromiseTargetDriver();

      if (selectorTracer != null && selectorTracer.length > 0) {
        selectorTracer.forEach(function (value) {
          _this.healthCheckModel.tracer.forEach(function (tracer) {
            if (tracer.type.toString() === value) {
              promiseTargetDriver.attach(tracer);
            }
          });
        });
      } else {
        this.healthCheckModel.tracer.forEach(function (tracer) {
          promiseTargetDriver.attach(tracer);
        });
      }

      promiseTargetDriver.build();
      return promiseTargetDriver.getValue();
    }
  }, {
    key: "ready",
    value: function ready() {
      return this.build();
    }
  }, {
    key: "readyLiveness",
    value: function readyLiveness() {
      return this.build(this.healthCheckModel.liveness);
    }
  }, {
    key: "readyReadiness",
    value: function readyReadiness() {
      return this.build(this.healthCheckModel.rediness);
    }
  }]);

  return FactoryHealth;
}();

exports.FactoryHealth = FactoryHealth;