"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TracerModel = void 0;

var _typeDriver = require("../enums/type-driver.enums");

var _typeStatus = require("../enums/type-status.enums");

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TracerModel = /*#__PURE__*/_createClass(function TracerModel() {
  _classCallCheck(this, TracerModel);

  _defineProperty(this, "componentName", "");

  _defineProperty(this, "name", "");

  _defineProperty(this, "port", 0);

  _defineProperty(this, "ip", "");

  _defineProperty(this, "protocol", "");

  _defineProperty(this, "path", "");

  _defineProperty(this, "domain", "");

  _defineProperty(this, "driver", "");

  _defineProperty(this, "min", 0);

  _defineProperty(this, "type", _typeDriver.TypeDriver.NONE);

  _defineProperty(this, "max", 0);

  _defineProperty(this, "free", true);

  _defineProperty(this, "rate", 0);

  _defineProperty(this, "acceptable", 0);

  _defineProperty(this, "persistenceUnit", "");

  _defineProperty(this, "initEvaluteTime", 0);

  _defineProperty(this, "endEvaluateTime", 0);

  _defineProperty(this, "timeZone", "");

  this.status = _typeStatus.TypeStatus.DOWN;
});

exports.TracerModel = TracerModel;