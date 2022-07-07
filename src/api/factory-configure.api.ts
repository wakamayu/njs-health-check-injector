import { PropertiesHealthCheck } from "../interfaces/properties.interfaces";
import { TypeConfig } from "../enums/type-config.enums";
import { parse } from 'yaml';
import { readFileSync } from 'fs';
import { ConfigureModel } from "../model/configure.model";
import { HealthCheckModel } from "../model/health-check.model";

const propertiesToJSON = (str: string) => {
    return (
        str
            // Concat lines that end with '\'.
            .replace(/\\\n( )*/g, '')
            // Split by line breaks.
            .split('\n')
            // Remove commented lines:
            .filter((line) =>
                /(\#|\!)/.test(line.replace(/\s/g, '').slice(0, 1))
                    ? false
                    : line
            )
            // Create the JSON:
            .reduce((obj: any, line) => {
                // Replace only '=' that are not escaped with '\' to handle separator inside key
                const colonifiedLine = line.replace(/(?<!\\)=/, ':');
                const key = colonifiedLine
                    // Extract key from index 0 to first not escaped colon index
                    .substring(0, colonifiedLine.search(/(?<!\\):/))
                    // Remove not needed backslash from key
                    .replace(/\\/g, '')
                    .trim();
                const value = colonifiedLine
                    .substring(colonifiedLine.search(/(?<!\\):/) + 1)
                    .trim();
                obj[key] = value;
                return obj;
            }, {})
    );
};


export class FactoryConfigure {
    properties: PropertiesHealthCheck = {
        fileConfig: ".env/health-check.yaml",
        type: TypeConfig.YAML
    };
    configureModel: ConfigureModel;

    constructor() {
        this.configureModel = new ConfigureModel();
    }

    read(properties: PropertiesHealthCheck): ConfigureModel {
        let identedJson = {};
        switch (properties.type) {
            case TypeConfig.YAML:
                identedJson = this.readYaml(properties.fileConfig);
                break;
            case TypeConfig.PROPERTIES:
                identedJson = this.readProperties(properties.fileConfig);
                break;
        }
        return Object.assign(new ConfigureModel(), identedJson);
    }

    readYaml(fileConfig: string) {
        let file = readFileSync(fileConfig, { encoding: 'utf8' });
        return parse(file)
    }

    readProperties(fileConfig: string): any {
        let file = readFileSync(fileConfig, { encoding: 'utf8' });
        return propertiesToJSON(file);
    }

    configure(properties: PropertiesHealthCheck): Boolean {
        if (properties != null) {
            this.properties = properties
            return true
        }
        return false;
    }

    build() {
        this.configureModel = this.read(this.properties);
    }

    get healthCheckModel(): HealthCheckModel {
        return this.configureModel.healthcheck;
    }

    isValid(): Boolean {
        return this.configureModel != null && this.configureModel.healthcheck != null && this.configureModel.healthcheck.tracer != null && this.configureModel.healthcheck.tracer.length > 0;
    }
}