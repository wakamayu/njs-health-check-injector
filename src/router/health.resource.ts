import { Router } from 'express'

import { FactoryHealth } from '../api/factory-health.api';


export function HealthResource(factoryHelath: FactoryHealth): any {

    const HealthResource = Router();

    HealthResource.get('/strategy/health', function (req, res, next) {
        factoryHelath.ready().then((value) => {

            res.send(value);

        })
    })
    HealthResource.get('/strategy/health/live', function (req, res, next) {

        res.send(factoryHelath.readyLiveness());
    })
    HealthResource.get('/strategy/health/ready', function (req, res, next) {

        res.send(factoryHelath.readyReadiness());
    })

    return HealthResource
};

