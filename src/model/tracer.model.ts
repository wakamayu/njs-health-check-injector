import { TypeDriver } from "../enums/type-driver.enums"
import { TypeStatus } from "../enums/type-status.enums"

export default class TracerModel {
    componentName: String

    name: String

    port: Number

    ip: String

    protocol: String

    path: String

    domain: String

    driver: String

    min: Number

    type: TypeDriver

    max: Number

    free: Boolean

    rate: Number

    acceptable: Number

    persistenceUnit: String

    initEvaluteTime: Number

    endEvaluateTime: Number

    timeZone: String

    status: TypeStatus

    constructor() {
        this.status = TypeStatus.DOWN
    }
}