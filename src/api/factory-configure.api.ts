import PropertiesHealthCheck from "../interfaces/properties.interfaces";
import { Property } from "../enums/type-config.enums";
import { parse } from 'yaml';
import { readFileSync } from 'fs';
import ConfigureModel from "../model/configure.model";

import propertiesToJson from "properties-to-json"

export default class FactoryConfigure {
    properties: PropertiesHealthCheck = {
        fileConfig: ".env/health-check.yaml",
        type: Property.YAML
    };
    configureModel: ConfigureModel;

    constructor() {
        this.configureModel = new ConfigureModel();
    }

    read(properties: PropertiesHealthCheck): ConfigureModel {
        let identedJson = {};
        switch (properties.type) {
            case Property.YAML:
                identedJson = this.readYaml(properties.fileConfig);
                break;
            case Property.PROPERTIES:
                identedJson = this.readProperties(properties.fileConfig);
                break;
        }
        return Object.assign(new ConfigureModel(), identedJson);
    }

    readYaml(fileConfig: string) {
        let file = readFileSync(fileConfig, { encoding: 'utf8' });
        return parse(file)
    }

    readProperties(fileConfig: string) {
        let file = readFileSync(fileConfig, { encoding: 'utf8' });
        return propertiesToJson(file);
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

    get healthCheckModel() {
        return this.configureModel.healthcheck;
    }

    isValid(): Boolean {
        return this.configureModel != null && this.configureModel.healthcheck != null && this.configureModel.healthcheck.tracer != null && this.configureModel.healthcheck.tracer.length > 0;
    }
}