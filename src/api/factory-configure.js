import { parse, stringify } from 'yaml'
import fs from 'fs'

let TYPE_CONFIG = {
    "Properties":new ConfigureProperty(),
    "YAML":new ConfigureYaml()
}

class ConfigureProperty {

    build(){}
}

class ConfigureYaml{
    build(){
        return parse(fs.readFileSync('/home/ixti/example.yml', 'utf8'))
    }
}

class FactoryConfigure{
urlFile;
typeConfig;
healtCheckModel;
    constructor(){
        this.urlFile = "";
        this.typeConfig= "YAML";
        this.healtCheckModel = null;
    }

    configure(urlFile, typeConfig){        
            this.urlFile = urlFile;
            this.typeConfig= typeConfig;
    }

    isValid(){
        return this.healtCheckModel != null && Obejct.keys(this.healtCheckModel).length > 0;
    }
    
    build(){
        if(this.typeConfig != null && this.isValid(this.urlFile)){
            let config =  TYPE_CONFIG[this.typeConfig];
            if(config){
                this.healtCheckModel=config.build();
            }
        }
    }

    get(){
        return this.healtCheckModel;
    }

}