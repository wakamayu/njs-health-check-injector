import { TypeDriver } from "../enums/type-driver.enums";
import { TypeStatus } from "../enums/type-status.enums";

export default class TracerModel {
    _componentName: String;

    _name: String;

    _port: Number;

    _ip: String;

    _protocol: String;

    _path: String;

    _domain: String;

    _driver: String;

    _min: Number;

    _type: TypeDriver;

    _max: Number;

    _free: Boolean;

    _rate: Number;

    _acceptable: Number;

    _persistenceUnit: String;

    _initEvaluteTime: Number;

    _endEvaluateTime: Number;

    _timeZone: String;

    _status: TypeStatus;

    get componentName(): String {
        return this._componentName;
    }
    set componentName(_componentName: String) {
        this._componentName = _componentName
    }

    get name(): String {
        return this._name
    }


    set name(_name: String) {
        this._name = _name
    }

    get port(): Number {
        return this._port
    }

    set port(_port: Number) {
        this._port = _port
    }

    get ip(): String {
        return this._ip
    }

    set ip(_ip: String) {
        this._ip = _ip
    }

    get protocol(): String {
        return this._protocol
    }

    set protocol(_protocol: String) {
        this._protocol = _protocol
    }

    get path(): String {
        return this._path
    }

    set path(_path: String) {
        this._path = _path
    }

    get domain(): String {
        return this._domain
    }

    set domain(_domain: String) {
        this._domain = _domain
    }

    get driver(): String {
        return this._driver
    }

    set driver(_driver: String) {
        this._driver = _driver
    }

    get min(): Number {
        return this._min
    }

    set min(_min: Number) {
        this._min = _min
    }

    get type(): TypeDriver {
        return this._type
    }
    set type(_type: TypeDriver) {
        this._type = _type
    }

    get max(): Number {
        return this._max
    }

    set max(_max: Number) {
        this._max = _max
    }

    get free(): Boolean {
        return this._free
    }


    set free(_free: Boolean) {
        this._free = _free
    }

    get rate(): Number {
        return this._rate
    }

    set rate(_rate: Number) {
        this._rate = _rate
    }

    get acceptable(): Number {
        return this._acceptable
    }

    set acceptable(_acceptable: Number) {
        this._acceptable = _acceptable
    }

    get persistenceUnit(): String {
        return this._persistenceUnit
    }

    set persistenceUnit(_persistenceUnit: String) {
        this._persistenceUnit = _persistenceUnit
    }

    get initEvaluteTime(): Number {
        return this._initEvaluteTime
    }

    set initEvaluteTime(_initEvaluteTime: Number) {
        this._initEvaluteTime = _initEvaluteTime
    }

    get endEvaluateTime(): Number {
        return this._endEvaluateTime
    }

    set endEvaluateTime(_endEvaluateTime: Number) {
        this._endEvaluateTime = _endEvaluateTime
    }

    get timeZone(): String {
        return this._timeZone
    }

    set timeZone(_timeZone: String) {
        this._timeZone = _timeZone
    }

    get status(): TypeStatus {
        return this._status
    }

    set status(_status: TypeStatus) {
        this._status = _status
    }

}