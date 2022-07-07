"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _named = require("../annotated/named.annotation");

var _os = _interopRequireDefault(require("os"));

var _typeStatus = require("../enums/type-status.enums");

var _dec, _class, _class2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CPUDriver = (_dec = (0, _named.Named)("CPU"), _dec(_class = (_class2 = /*#__PURE__*/function () {
  function CPUDriver() {
    _classCallCheck(this, CPUDriver);
  }

  _createClass(CPUDriver, [{
    key: "execute",
    value: function execute(tracerModel) {
      var _this = this;

      return new Promise(function (resolve) {
        var startMeasure = _this.newMethod().average();

        setTimeout(function () {
          var endMeasure = _this.average();

          var idleDifference = endMeasure.avgIdle - startMeasure.avgIdle;
          var totalDifference = endMeasure.avgTotal - startMeasure.avgTotal;
          var cpuPercentage = (10000 - Math.round(10000 * idleDifference / totalDifference)) / 100;
          var min = tracerModel.min;
          var max = tracerModel.max;

          if (cpuPercentage <= min && cpuPercentage <= max) {
            tracerModel.status = _typeStatus.TypeStatus.AVAILABILITY;
          } else if (cpuPercentage > min && cpuPercentage <= max) {
            tracerModel.status = _typeStatus.TypeStatus.CRITICAL;
          } else {
            tracerModel.status = _typeStatus.TypeStatus.UNAVAILABILITY;
          }

          tracerModel.rate = cpuPercentage;
          return resolve(tracerModel);
        }, CPUDriver.INTERVAL);
      });
    }
  }, {
    key: "newMethod",
    value: function newMethod() {
      return this;
    }
  }, {
    key: "average",
    value: function average() {
      var totalIdle = 0;
      var totalTick = 0;

      var cpus = _os["default"].cpus();

      for (var i = 0, len = cpus.length; i < len; i++) {
        var cpu = cpus[i];
        var times = cpu.times;
        totalTick = times.user + times.nice + times.sys + times.idle + times.irq;
        totalIdle += cpu.times.idle;
      }

      return {
        totalIdle: totalIdle,
        totalTick: totalTick,
        avgIdle: totalIdle / cpus.length,
        avgTotal: totalTick / cpus.length
      };
    }
  }]);

  return CPUDriver;
}(), _defineProperty(_class2, "INTERVAL", 1000), _class2)) || _class);
exports["default"] = CPUDriver;