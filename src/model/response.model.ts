import { TypeStatus } from "../enums/type-status.enums";
import { ResponseHealthCheckModel } from "./response-health-check.model";
import { TracerModel } from "./tracer.model";

export class ResponseModel {

    status: TypeStatus
    checks: Array<ResponseHealthCheckModel>
    constructor() {
        this.status = TypeStatus.UP
        this.checks = []
    }

    addChecks(tracer: TracerModel) {
        if (tracer != null && Object.keys(tracer).length > 0) {
            let responseHealthCheckModel = new ResponseHealthCheckModel()
            responseHealthCheckModel.name = tracer.name
            responseHealthCheckModel.status = tracer.status
            responseHealthCheckModel.data = tracer
            this.checks.push(responseHealthCheckModel)
        }

    }
}