
import { TypeStatus } from "../enums/type-status.enums";
import Driver from "../interfaces/driver.interfaces";
import ResponseHealthCheckModel from "../model/response-health-check.model";
import ResponseModel from "../model/response.model";
import TracerModel from "../model/tracer.model";
import { DriverSingleton } from "./driver-singleton.api";

const driverSingleton = DriverSingleton.getInstance();

export default class PromiseTargetDriver {


    //private responseHealhCheckModel: ResponseHealthCheckModel

    promise: Promise<TracerModel>[];

    constructor(private tracers: TracerModel[] = []) {
        //    this.responseHealhCheckModel = new ResponseHealthCheckModel();


    }

    async getValue(): Promise<ResponseModel> {
        let tracerModels: TracerModel[] = await Promise.all(this.promise)
        return new Promise<ResponseModel>((resolve, reject) => {
            let responseModel = new ResponseModel()
            tracerModels.forEach((value: TracerModel) => {

                if (value.status == TypeStatus.DOWN) {
                    responseModel.status = TypeStatus.DOWN
                    //    value.status = TypeStatus.DOWN
                }
                responseModel.addChecks(value)
            })
            resolve(responseModel)

        })
    }

    build() {
        this.promise = []
        this.tracers.forEach((tracerModel: TracerModel) => {

            let driver: Driver = driverSingleton.drivers.get(tracerModel.type.toString())
            if (driver != null) {
                this.promise.push(new Promise((resolve, reject) => {
                    resolve(driver.execute(tracerModel))
                }))
            }
        })
    }


    attach(tracer: TracerModel) {
        if (tracer != null) {
            this.tracers.push(tracer)
        }
    }
}