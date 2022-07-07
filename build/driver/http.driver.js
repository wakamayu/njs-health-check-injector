"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _named = require("../annotated/named.annotation");

var _typeStatus = require("../enums/type-status.enums");

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var axios = require('axios');

var HTTPDriver = (_dec = (0, _named.Named)("HTTP"), _dec(_class = /*#__PURE__*/function () {
  function HTTPDriver() {
    _classCallCheck(this, HTTPDriver);
  }

  _createClass(HTTPDriver, [{
    key: "execute",
    value: function execute(tracerModel) {
      return new Promise(function (resolve) {
        try {
          axios.get("".concat(tracerModel.protocol, "://").concat(tracerModel.domain, ":").concat(tracerModel.port, "/").concat(tracerModel.path), {
            timeout: 1500
          }).then(function (value) {
            if (value.status == 200) {
              tracerModel.status = _typeStatus.TypeStatus.AVAILABILITY;
            } else {
              tracerModel.status = _typeStatus.TypeStatus.UNAVAILABILITY;
            }

            resolve(tracerModel);
          })["catch"](function () {
            tracerModel.status = _typeStatus.TypeStatus.UNAVAILABILITY;
            resolve(tracerModel);
          });
        } catch (error) {
          tracerModel.status = _typeStatus.TypeStatus.UNAVAILABILITY;
          resolve(tracerModel);
        }
      });
    }
  }]);

  return HTTPDriver;
}()) || _class);
exports["default"] = HTTPDriver;