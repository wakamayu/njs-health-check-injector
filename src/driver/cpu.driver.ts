import { Named } from "../annotated/named.annotation"
import { Driver } from "../interfaces/driver.interfaces"
import { TracerModel } from "../model/tracer.model"
import os, { CpuInfo } from 'os'
import { TypeStatus } from "../enums/type-status.enums"

@Named("CPU")
export default class CPUDriver implements Driver {

    static INTERVAL: number = 1000

    execute(tracerModel: TracerModel): Promise<TracerModel> {
        return new Promise<TracerModel>((resolve) => {

            var startMeasure = this.newMethod().average()

            setTimeout(() => {
                var endMeasure = this.average()
                var idleDifference = endMeasure.avgIdle - startMeasure.avgIdle
                var totalDifference = endMeasure.avgTotal - startMeasure.avgTotal
                var cpuPercentage = (10000 - Math.round(10000 * idleDifference / totalDifference)) / 100

                let min = tracerModel.min
                let max = tracerModel.max

                if (cpuPercentage <= min && cpuPercentage <= max) {
                    tracerModel.status = TypeStatus.AVAILABILITY;
                } else if (cpuPercentage > min && cpuPercentage <= max) {
                    tracerModel.status = TypeStatus.CRITICAL;
                } else {
                    tracerModel.status = TypeStatus.UNAVAILABILITY;
                }

                tracerModel.rate = cpuPercentage


                return resolve(tracerModel)

            }, CPUDriver.INTERVAL)
        })
    }


    private newMethod() {
        return this
    }

    private average() {
        let totalIdle = 0
        let totalTick = 0
        let cpus: CpuInfo[] = os.cpus()

        for (var i = 0, len = cpus.length; i < len; i++) {
            var cpu: CpuInfo = cpus[i]
            let times: {
                user: number,
                nice: number,
                sys: number,
                idle: number,
                irq: number,
            } = cpu.times;
            totalTick = times.user + times.nice + times.sys + times.idle + times.irq
            totalIdle += cpu.times.idle
        }

        return {
            totalIdle: totalIdle,
            totalTick: totalTick,
            avgIdle: (totalIdle / cpus.length),
            avgTotal: (totalTick / cpus.length)
        }
    }
}