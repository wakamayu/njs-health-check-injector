import { Named } from "../annotated/named.annotation";
import { TypeStatus } from "../enums/type-status.enums";
import Driver from "../interfaces/driver.interfaces";
import TracerModel from "../model/tracer.model";
import { Telnet } from 'telnet-client'
@Named("IP_PORT")
export default class TelnetDriver implements Driver {

    execute(tracerModel: TracerModel): Promise<TracerModel> {
        return new Promise(async (resolve, reject) => {
            let connection = new Telnet()

            // these parameters are just examples and most probably won't work for your use-case.
            let params = {
                host: tracerModel.ip,
                port: tracerModel.port,
                negotiationMandatory: false,
                timeout: 1500
            }

            try {
                console.log(params)
                await connection.connect(params)
                tracerModel.status = TypeStatus.UP
                await connection.end()
                console.log("conecto")
            } catch (error) {
                tracerModel.status = TypeStatus.DOWN
                // handle the throw (timeout)
            }
            resolve(tracerModel)
            // 
            //    
        })

    }

}


