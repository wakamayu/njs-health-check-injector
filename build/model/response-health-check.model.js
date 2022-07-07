"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResponseHealthCheckModel = void 0;

var _typeStatus = require("../enums/type-status.enums");

var _tracer = require("./tracer.model");

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ResponseHealthCheckModel = /*#__PURE__*/_createClass(function ResponseHealthCheckModel() {
  _classCallCheck(this, ResponseHealthCheckModel);

  _defineProperty(this, "name", "");

  _defineProperty(this, "status", _typeStatus.TypeStatus.UP);

  _defineProperty(this, "data", new _tracer.TracerModel());
}
/*
    get data(): TracerModel {
        return this._data
    }

    set data(_data: TracerModel) {
        this._data = _data
    }

    get name(): string {
        return this._name
    }

    set name(_name: string) {
        this._name = _name
    }

    get status(): TypeStatus {
        return this._status
    }

    set status(_status: TypeStatus) {
        this._status = _status
    }*/
);

exports.ResponseHealthCheckModel = ResponseHealthCheckModel;