import { existsSync } from "fs";
import PropertiesHealthCheck from "../interfaces/properties.interfaces";
import FactoryConfigure from "../api/factory-configure.api"
export default class InjectPointHealth {

    onStart(properties: PropertiesHealthCheck) {
        let factoryConfigure = new FactoryConfigure();
        console.log(properties)
        console.log(existsSync(properties.fileConfig))
        console.log(factoryConfigure.configure(properties))
        if (existsSync(properties.fileConfig) && factoryConfigure.configure(properties)) {
            console.log(factoryConfigure.build());
        }

    }

}