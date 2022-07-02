
import express from 'express'
import { Property } from '../enums/type-config.enums';
import PropertiesHealthCheck from '../interfaces/properties.interfaces';
import HealthResource from '../router/health.resource'
import InjectPointHealth from './inject-point-health.api';


const router = express.Router();
const injectPointHealth = new InjectPointHealth()
var ApplicationHealth = {
    configure: function health(properties: PropertiesHealthCheck) {
        injectPointHealth.onStart(properties);
        console.log(HealthResource)
        router.use(HealthResource(injectPointHealth.factoryHealth))
        return router;
    },
    Property
}

module.exports = ApplicationHealth