"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FactoryConfigure = void 0;

var _typeConfig = require("../enums/type-config.enums");

var _yaml = require("yaml");

var _fs = require("fs");

var _configure = require("../model/configure.model");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var propertiesToJSON = function propertiesToJSON(str) {
  return str // Concat lines that end with '\'.
  .replace(/\\\n( )*/g, '') // Split by line breaks.
  .split('\n') // Remove commented lines:
  .filter(function (line) {
    return /(\#|\!)/.test(line.replace(/\s/g, '').slice(0, 1)) ? false : line;
  }) // Create the JSON:
  .reduce(function (obj, line) {
    // Replace only '=' that are not escaped with '\' to handle separator inside key
    var colonifiedLine = line.replace(/(?<!\\)=/, ':');
    var key = colonifiedLine // Extract key from index 0 to first not escaped colon index
    .substring(0, colonifiedLine.search(/(?<!\\):/)) // Remove not needed backslash from key
    .replace(/\\/g, '').trim();
    var value = colonifiedLine.substring(colonifiedLine.search(/(?<!\\):/) + 1).trim();
    obj[key] = value;
    return obj;
  }, {});
};

var FactoryConfigure = /*#__PURE__*/function () {
  function FactoryConfigure() {
    _classCallCheck(this, FactoryConfigure);

    _defineProperty(this, "properties", {
      fileConfig: ".env/health-check.yaml",
      type: _typeConfig.TypeConfig.YAML
    });

    this.configureModel = new _configure.ConfigureModel();
  }

  _createClass(FactoryConfigure, [{
    key: "read",
    value: function read(properties) {
      var identedJson = {};

      switch (properties.type) {
        case _typeConfig.TypeConfig.YAML:
          identedJson = this.readYaml(properties.fileConfig);
          break;

        case _typeConfig.TypeConfig.PROPERTIES:
          identedJson = this.readProperties(properties.fileConfig);
          break;
      }

      return Object.assign(new _configure.ConfigureModel(), identedJson);
    }
  }, {
    key: "readYaml",
    value: function readYaml(fileConfig) {
      var file = (0, _fs.readFileSync)(fileConfig, {
        encoding: 'utf8'
      });
      return (0, _yaml.parse)(file);
    }
  }, {
    key: "readProperties",
    value: function readProperties(fileConfig) {
      var file = (0, _fs.readFileSync)(fileConfig, {
        encoding: 'utf8'
      });
      return propertiesToJSON(file);
    }
  }, {
    key: "configure",
    value: function configure(properties) {
      if (properties != null) {
        this.properties = properties;
        return true;
      }

      return false;
    }
  }, {
    key: "build",
    value: function build() {
      this.configureModel = this.read(this.properties);
    }
  }, {
    key: "healthCheckModel",
    get: function get() {
      return this.configureModel.healthcheck;
    }
  }, {
    key: "isValid",
    value: function isValid() {
      return this.configureModel != null && this.configureModel.healthcheck != null && this.configureModel.healthcheck.tracer != null && this.configureModel.healthcheck.tracer.length > 0;
    }
  }]);

  return FactoryConfigure;
}();

exports.FactoryConfigure = FactoryConfigure;