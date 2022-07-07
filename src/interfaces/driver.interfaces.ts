import { TracerModel } from "../model/tracer.model";

export interface Driver {
    execute(tracerModel: TracerModel): Promise<TracerModel>;
}