import {first} from 'lodash';


export class Core {
    private elements: NodeListOf<Element> | HTMLCollectionOf<Element>;

    protected get nativeElement(): Element {
        return first(this.elements);
    };

    constructor() {

    }

    private getDomElement(attributeName: string): NodeListOf<Element> | HTMLCollectionOf<Element> {
        let elements: NodeListOf<Element> | HTMLCollectionOf<Element>;

        elements = document.querySelectorAll(`[${attributeName}]`);

        if (!elements || elements?.length <= 0) {
            elements = document.getElementsByTagName(attributeName);
        }

        if (!elements) {
            throw new Error('Element is undefined');
        }
        return elements;
    }

    getElements(attributeName: string): NodeListOf<Element> | HTMLCollectionOf<Element> {
        this.elements = this.getDomElement(attributeName);
        return this.elements;
    }

    getElement(attributeName: string): Element {
        this.elements = this.getDomElement(attributeName);
        return this.nativeElement;
    }
}
