import { HealthCheckModel } from "./health-check.model";

export class ConfigureModel {
    private _healthcheck: HealthCheckModel;

    constructor() {
        this._healthcheck = new HealthCheckModel()
    }

    get healthcheck(): HealthCheckModel {
        return this._healthcheck
    }

    set healthcheck(_healthcheck: HealthCheckModel) {
        this._healthcheck = _healthcheck
    }
}