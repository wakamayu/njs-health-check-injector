import HealthCheckModel from "../model/health-check.model";
import ResponseModel from "../model/response.model";
import TracerModel from "../model/tracer.model";
import FactoryConfigure from "./factory-configure.api";
import PromiseTargetDriver from "./promise-target-driver.api";

export default class FactoryHealth {

    healthCheckModel: HealthCheckModel;

    constructor() {
        this.healthCheckModel = new HealthCheckModel();
    }
    configure(factoryConfigure: FactoryConfigure) {
        if (factoryConfigure.isValid()) {
            // Aqui debe validarse Json Schema
            this.healthCheckModel = factoryConfigure.healthCheckModel;
        }
    }

    private build(selectorTracer: String[] = []): Promise<ResponseModel> {
        let promiseTargetDriver = new PromiseTargetDriver()
        if (selectorTracer != null && selectorTracer.length > 0) {
            selectorTracer.forEach((value: String) => {
                this.healthCheckModel.tracer.forEach((tracer: TracerModel) => {
                    if (tracer.type.toString() === value) {
                        promiseTargetDriver.attach(tracer)
                    }
                })
            })
        } else {
            this.healthCheckModel.tracer.forEach((tracer: TracerModel) => {
                promiseTargetDriver.attach(tracer)
            })
        }

        promiseTargetDriver.build();

        return promiseTargetDriver.getValue();
    }




    ready(): Promise<ResponseModel> {
        return this.build();

    }

    readyLiveness(): Promise<ResponseModel> {
        return this.build(this.healthCheckModel.liveness)
    }

    readyReadiness(): Promise<ResponseModel> {
        return this.build(this.healthCheckModel.rediness)
    }


}