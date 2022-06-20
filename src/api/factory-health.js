class FactoryHealth {
    configure(factoryConfigure){
        if(factoryConfigure.isValid()){
            let healtCheckModel = factoryConfigure.get();
            if(healtCheckModel.tracer && Object.keys(healtCheckModel.tracer).length >0) {
                for(tracer in healtCheckModel.tracer){
                  this.mapTracerModel[tracer.name] = tracer;  
                }
            }
        }
    }

}