import { TypeStatus } from "../enums/type-status.enums"
import TracerModel from "./tracer.model"

export default class ResponseHealthCheckModel {
    name: String = ""
    status: TypeStatus = TypeStatus.UP
    data: TracerModel = new TracerModel()
    constructor() {

    }
    /*
        get data(): TracerModel {
            return this._data
        }
    
        set data(_data: TracerModel) {
            this._data = _data
        }
    
        get name(): string {
            return this._name
        }
    
        set name(_name: string) {
            this._name = _name
        }
    
        get status(): TypeStatus {
            return this._status
        }
    
        set status(_status: TypeStatus) {
            this._status = _status
        }*/
} 