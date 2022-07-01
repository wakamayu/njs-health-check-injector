
import express from 'express'
import { Property } from '../enums/type-config.enums';
import PropertiesHealthCheck from '../interfaces/properties.interfaces';
import HealthResource from '../router/health.resource'
import InjectPointHealth from './inject-point-health.api';


const router = express.Router();
console.log(Property)
var ApplicationHealth = {
    configure: function health(properties: PropertiesHealthCheck) {
        console.log(properties)
        new InjectPointHealth().onStart(properties);
        router.use(HealthResource)
        return router;
    },
    Property
}

module.exports = ApplicationHealth