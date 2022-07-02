type Class = any
class Annotated extends Map<String, object>{
    getWithString(key: string): string {
        return `${this.get(key)}`;
    }
}

export class AnnotadtedNamed {

    constructor(private _annotated: Annotated, private _class: Class) { }

    get class(): Class {
        return this._class;
    }

    get annotated(): Annotated {
        return this._annotated
    }

}

export function Named(value: String): any {
    return function (target) {
        let annotated = new Annotated()
        annotated.set("value", value);
        return new AnnotadtedNamed(annotated, target)

    };
}
