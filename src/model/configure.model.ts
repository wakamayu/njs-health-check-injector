import HealthCheckModel from "./health-check.model";

export default class ConfigureModel {
    _healthcheck: HealthCheckModel;

    get healthcheck(): HealthCheckModel {
        return this._healthcheck
    }

    set healthcheck(_healthcheck: HealthCheckModel) {
        this._healthcheck = _healthcheck
    }
}