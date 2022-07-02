import TracerModel from "../model/tracer.model";

export default interface Driver {
    execute(tracerModel: TracerModel): Promise<TracerModel>;
}