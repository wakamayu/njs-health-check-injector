import { readdirSync } from "fs";
import { AnnotadtedNamed } from "../annotated/named.annotation";
import { Driver } from "../interfaces/driver.interfaces";

export class DriverSingleton {
    private static instance: DriverSingleton;

    private _drivers: Map<string, Driver>;
    /**
     * The DriverSingleton's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    private constructor() {
        this._drivers = new Map<string, Driver>();
    }

    /**
     * The static method that controls the access to the DriverSingleton instance.
     *
     * This implementation let you subclass the DriverSingleton class while keeping
     * just one instance of each subclass around.
     */
    public static getInstance(): DriverSingleton {
        if (!DriverSingleton.instance) {
            DriverSingleton.instance = new DriverSingleton();
            DriverSingleton.instance.initialize();


        }

        return DriverSingleton.instance;
    }



    async initialize() {
        this._drivers = new Map();
        var folder = `${__dirname}/../driver`;

        var files = readdirSync(folder);
        for (let index = 0; index < files.length; index++) {
            var driverImport = `${folder}/${files[index]}`;
            let named = (await import(driverImport)).default;
            if (named instanceof AnnotadtedNamed) {
                this._drivers.set(named.annotated.getWithString("value"), new named.class());
            }
        }
    }

    get drivers(): Map<String, Driver> {
        return this._drivers
    }
}
