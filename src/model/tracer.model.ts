import { TypeDriver } from "../enums/type-driver.enums"
import { TypeStatus } from "../enums/type-status.enums"

export default class TracerModel {
    componentName: string

    name: string

    port: number

    ip: string

    protocol: string

    path: string

    domain: string

    driver: string

    min: number

    type: TypeDriver

    max: number

    free: Boolean

    rate: number

    acceptable: number

    persistenceUnit: string

    initEvaluteTime: number

    endEvaluateTime: number

    timeZone: string

    status: TypeStatus

    constructor() {
        this.status = TypeStatus.DOWN
    }
}