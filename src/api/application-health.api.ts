
import { Router } from 'express'
import { PropertiesHealthCheck } from '../interfaces/properties.interfaces';

import { InjectPointHealth } from './inject-point-health.api';
import { TypeConfig } from '../enums/type-config.enums';
import { HealthResource } from '../router/health.resource';

const router = Router();
const injectPointHealth = new InjectPointHealth()
console.log(HealthResource)
export class ApplicationHealth {
    TypeConfig: TypeConfig | undefined
    configure(properties: PropertiesHealthCheck) {
        injectPointHealth.onStart(properties);
        router.use(HealthResource(injectPointHealth.factoryHealth))
        return router;
    }

}