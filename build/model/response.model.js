"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResponseModel = void 0;

var _typeStatus = require("../enums/type-status.enums");

var _responseHealthCheck = require("./response-health-check.model");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var ResponseModel = /*#__PURE__*/function () {
  function ResponseModel() {
    _classCallCheck(this, ResponseModel);

    this.status = _typeStatus.TypeStatus.UP;
    this.checks = [];
  }

  _createClass(ResponseModel, [{
    key: "addChecks",
    value: function addChecks(tracer) {
      if (tracer != null && Object.keys(tracer).length > 0) {
        var responseHealthCheckModel = new _responseHealthCheck.ResponseHealthCheckModel();
        responseHealthCheckModel.name = tracer.name;
        responseHealthCheckModel.status = tracer.status;
        responseHealthCheckModel.data = tracer;
        this.checks.push(responseHealthCheckModel);
      }
    }
  }]);

  return ResponseModel;
}();

exports.ResponseModel = ResponseModel;