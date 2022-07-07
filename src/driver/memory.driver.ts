import { Named } from "../annotated/named.annotation";
import { Driver } from "../interfaces/driver.interfaces";
import { TracerModel } from "../model/tracer.model";
import os from "os"
import { TypeStatus } from "../enums/type-status.enums";

@Named("MEMORY")
export class MemoryDriver implements Driver {

    execute(tracerModel: TracerModel): Promise<TracerModel> {
        return new Promise((resolve) => {
            let freeMemory = os.freemem()
            let totalMemory = os.totalmem()
            let used = totalMemory - freeMemory;
            let percent = Math.round((used * 100) / totalMemory);
            let min = tracerModel.min
            let max = tracerModel.max

            if (percent <= min && percent <= max) {
                tracerModel.status = TypeStatus.AVAILABILITY;
            } else if (percent > min && percent <= max) {
                tracerModel.status = TypeStatus.CRITICAL;
            } else {
                tracerModel.status = TypeStatus.UNAVAILABILITY;
            }
            tracerModel.rate = percent

            resolve(tracerModel)
        })
    }


}