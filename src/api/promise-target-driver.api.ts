
import { TypeStatus } from "../enums/type-status.enums";
import { Driver } from "../interfaces/driver.interfaces";
import { ResponseModel } from "../model/response.model";
import { TracerModel } from "../model/tracer.model";
import { DriverSingleton } from "./driver-singleton.api";

const driverSingleton = DriverSingleton.getInstance();

export class PromiseTargetDriver {



    private promise: Promise<TracerModel>[]

    constructor(private tracers: TracerModel[] = []) {
        this.promise = []
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

            let driver: Driver | undefined = driverSingleton.drivers.get(tracerModel.type.toString())
            if (driver != null && driver != undefined) {
                this.promise.push(new Promise((resolve, reject) => {
                    if (driver != undefined)
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