"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HealthCheckModel = void 0;

var _typeStatus = require("../enums/type-status.enums");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var HealthCheckModel = /*#__PURE__*/function () {
  function HealthCheckModel() {
    var _name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

    var _tracer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    var _liveness = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    var _rediness = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

    var _webhook = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";

    var _status = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : _typeStatus.TypeStatus.NONE;

    _classCallCheck(this, HealthCheckModel);

    this._name = _name;
    this._tracer = _tracer;
    this._liveness = _liveness;
    this._rediness = _rediness;
    this._webhook = _webhook;
    this._status = _status;
  }

  _createClass(HealthCheckModel, [{
    key: "name",
    get: function get() {
      return this._name;
    },
    set: function set(_name) {
      this._name = _name;
    }
  }, {
    key: "tracer",
    get: function get() {
      return this._tracer;
    },
    set: function set(_tracer) {
      this._tracer = _tracer;
    }
  }, {
    key: "liveness",
    get: function get() {
      return this._liveness;
    },
    set: function set(_liveness) {
      this._liveness = _liveness;
    }
  }, {
    key: "rediness",
    get: function get() {
      return this._rediness;
    },
    set: function set(_rediness) {
      this._rediness = _rediness;
    }
  }, {
    key: "webhook",
    get: function get() {
      return this._webhook;
    },
    set: function set(_webhook) {
      this._webhook = _webhook;
    }
  }, {
    key: "status",
    get: function get() {
      return this._status;
    },
    set: function set(_status) {
      this._status = _status;
    }
  }]);

  return HealthCheckModel;
}();

exports.HealthCheckModel = HealthCheckModel;