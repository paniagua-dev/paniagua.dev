import {first} from 'lodash';


export class Core {
    private elements: NodeListOf<Element>;

    protected get nativeElement(): Element {
        return first(this.elements);
    };

    constructor() {

    }

    getElements(attributeName: string): NodeListOf<Element> {
        this.elements = document.querySelectorAll(`[${attributeName}]`);
        return this.elements;
    }

    getElement(attributeName: string): Element {
        this.elements = document.querySelectorAll(`[${attributeName}]`);
        return this.nativeElement;
    }
}
