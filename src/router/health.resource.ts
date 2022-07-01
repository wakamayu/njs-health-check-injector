import express from 'express'

const HealthResource = express.Router();


HealthResource.get('/strategy/health', function (req, res, next) {
    res.send({ OK: "OK" });
})
HealthResource.get('/strategy/health/live', function (req, res, next) {
    res.send({ OK: "OK" });
})
HealthResource.get('/strategy/health/ready', function (req, res, next) {
    res.send({ OK: "OK" });
})

export default () => HealthResource;