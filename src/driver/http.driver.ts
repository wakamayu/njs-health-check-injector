//import { IncomingMessage, request, RequestOptions } from "http";
import axios, { AxiosResponse } from 'axios';
import { Named } from "../annotated/named.annotation";
import { TypeStatus } from "../enums/type-status.enums";
import Driver from "../interfaces/driver.interfaces";
import TracerModel from "../model/tracer.model";


@Named("HTTP")
export default class HTTPDriver implements Driver {


    execute(tracerModel: TracerModel): Promise<TracerModel> {

        return new Promise<TracerModel>((resolve) => {
            try {

                axios.get(`${tracerModel.protocol}://${tracerModel.domain}:${tracerModel.port}/${tracerModel.path}`, { timeout: 1500 })
                    .then((value: AxiosResponse) => {
                        if (value.status == 200) {
                            tracerModel.status = TypeStatus.AVAILABILITY
                        } else {
                            tracerModel.status = TypeStatus.UNAVAILABILITY
                        }
                        resolve(tracerModel)
                    }).catch(() => {
                        tracerModel.status = TypeStatus.UNAVAILABILITY
                        resolve(tracerModel)
                    })
                /*
                                let options: RequestOptions = {
                                    protocol: `${tracerModel.protocol}:`,
                                    host: tracerModel.domain,
                                    port: tracerModel.port,
                                    path: tracerModel.path
                                };
                                request(options,
                                    function (response: IncomingMessage) {
                                        tracerModel.status = TypeStatus.UNAVAILABILITY
                                        if (response.statusCode == 200) {
                                            tracerModel.status = TypeStatus.AVAILABILITY
                                        }
                                        resolve(tracerModel)
                                    })*/

            } catch (error) {
                tracerModel.status = TypeStatus.UNAVAILABILITY
                resolve(tracerModel)
            }
        })
    }



}