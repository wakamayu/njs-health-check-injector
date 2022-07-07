"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _named = require("../annotated/named.annotation");

var _os = _interopRequireDefault(require("os"));

var _typeStatus = require("../enums/type-status.enums");

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var MemoryDriver = (_dec = (0, _named.Named)("MEMORY"), _dec(_class = /*#__PURE__*/function () {
  function MemoryDriver() {
    _classCallCheck(this, MemoryDriver);
  }

  _createClass(MemoryDriver, [{
    key: "execute",
    value: function execute(tracerModel) {
      return new Promise(function (resolve) {
        var freeMemory = _os["default"].freemem();

        var totalMemory = _os["default"].totalmem();

        var used = totalMemory - freeMemory;
        var percent = Math.round(used * 100 / totalMemory);
        var min = tracerModel.min;
        var max = tracerModel.max;

        if (percent <= min && percent <= max) {
          tracerModel.status = _typeStatus.TypeStatus.AVAILABILITY;
        } else if (percent > min && percent <= max) {
          tracerModel.status = _typeStatus.TypeStatus.CRITICAL;
        } else {
          tracerModel.status = _typeStatus.TypeStatus.UNAVAILABILITY;
        }

        tracerModel.rate = percent;
        resolve(tracerModel);
      });
    }
  }]);

  return MemoryDriver;
}()) || _class);
exports["default"] = MemoryDriver;