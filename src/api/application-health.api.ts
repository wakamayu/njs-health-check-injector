
import { Router } from 'express'
import { PropertiesHealthCheck } from '../interfaces/properties.interfaces';

import { InjectPointHealth } from './inject-point-health.api';
import { HealthResource } from '../router/health.resource';

const router = Router();
const injectPointHealth = new InjectPointHealth()

export class ApplicationHealth {
    configure(properties: PropertiesHealthCheck) {
        injectPointHealth.onStart(properties);
        router.use(HealthResource(injectPointHealth.factoryHealth))
        return router;
    }

}