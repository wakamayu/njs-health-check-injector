import { Named } from "../annotated/named.annotation";
import { TypeStatus } from "../enums/type-status.enums";
import Driver from "../interfaces/driver.interfaces";
import TracerModel from "../model/tracer.model";
import { Telnet } from 'telnet-client'

@Named("IP_PORT")
export default class TelnetDriver implements Driver {

    execute(tracerModel: TracerModel): Promise<TracerModel> {
        return new Promise<TracerModel>(async (resolve, reject) => {
            let connection = new Telnet()

            // these parameters are just examples and most probably won't work for your use-case.
            let params = {
                host: tracerModel.ip,
                port: tracerModel.port,
                negotiationMandatory: false,
                timeout: 1500
            }

            try {

                await connection.connect(params)
                tracerModel.status = TypeStatus.AVAILABILITY
                await connection.end()

            } catch (error) {
                tracerModel.status = TypeStatus.UNAVAILABILITY
            }
            resolve(tracerModel)

        })

    }

}


