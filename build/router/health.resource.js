"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HealthResource = HealthResource;

var _express = require("express");

function HealthResource(factoryHelath) {
  var HealthResource = (0, _express.Router)();
  HealthResource.get('/strategy/health', function (req, res, next) {
    factoryHelath.ready().then(function (value) {
      res.send(value);
    });
  });
  HealthResource.get('/strategy/health/live', function (req, res, next) {
    res.send(factoryHelath.readyLiveness());
  });
  HealthResource.get('/strategy/health/ready', function (req, res, next) {
    res.send(factoryHelath.readyReadiness());
  });
  return HealthResource;
}

;