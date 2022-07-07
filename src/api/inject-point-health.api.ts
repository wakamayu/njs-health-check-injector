import { existsSync } from "fs";
import { PropertiesHealthCheck } from "../interfaces/properties.interfaces";
import { FactoryConfigure } from "../api/factory-configure.api"
import { FactoryHealth } from "./factory-health.api";

export class InjectPointHealth {

    private _factoryHealth: FactoryHealth;

    constructor() {
        this._factoryHealth = new FactoryHealth();
    }
    onStart(properties: PropertiesHealthCheck) {
        let factoryConfigure = new FactoryConfigure();
        if (existsSync(properties.fileConfig) && factoryConfigure.configure(properties)) {
            factoryConfigure.build();
        }
        this._factoryHealth.configure(factoryConfigure);

    }

    get factoryHealth(): FactoryHealth {
        return this._factoryHealth
    }

}