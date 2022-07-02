import { TypeStatus } from "../enums/type-status.enums";
import TracerModel from "./tracer.model";

export default class HealthCheckModel {
    private _name: String;
    private _tracer: TracerModel[];
    private _liveness: String[];
    private _rediness: String[];
    private _webhook: String;
    private _status: TypeStatus;

    get name(): String {
        return this._name
    }
    get tracer(): TracerModel[] {
        return this._tracer
    }
    get liveness(): String[] {
        return this._liveness
    }
    get rediness(): String[] {
        return this._rediness
    }
    get webhook(): String {
        return this._webhook
    }
    get status(): TypeStatus {
        return this._status
    }

    set name(_name: String) {
        this._name = _name
    }

    set tracer(_tracer: TracerModel[]) {
        this._tracer = _tracer
    }

    set liveness(_liveness: String[]) {
        this._liveness = _liveness
    }

    set rediness(_rediness) {
        this._rediness = _rediness
    }

    set webhook(_webhook: String) {
        this._webhook = _webhook
    }

    set status(_status: TypeStatus) {
        this._status = _status
    }

}