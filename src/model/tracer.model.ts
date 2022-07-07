import { TypeDriver } from "../enums/type-driver.enums"
import { TypeStatus } from "../enums/type-status.enums"

export class TracerModel {
    componentName: string = ""

    name: string = ""

    port: number = 0

    ip: string = ""

    protocol: string = ""

    path: string = ""

    domain: string = ""

    driver: string = ""

    min: number = 0

    type: TypeDriver = TypeDriver.NONE

    max: number = 0

    free: Boolean = true

    rate: number = 0

    acceptable: number = 0

    persistenceUnit: string = ""

    initEvaluteTime: number = 0

    endEvaluateTime: number = 0

    timeZone: string = ""

    status: TypeStatus

    constructor() {
        this.status = TypeStatus.DOWN
    }
}