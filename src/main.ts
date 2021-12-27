import {first} from 'lodash';
import './main.less';


class Core {
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


export class TextAnimationDirective extends Core {
    private textAnimation = ['Full-stack', 'Wordpress', 'React', 'Angular', 'PHP'];
    private period = 5000;
    private tagName = 'text-animation';

    private loopNum = 0;
    private isDeleting: boolean;
    private letter = '';

    constructor() {
        super();
        this.init();
    }

    private init(): void {
        this.getElement(this.tagName);
        this.startAnimation();
    }

    startAnimation() {
        this.tick();
        this.isDeleting = false;
    }

    tick() {
        const i = this.loopNum % this.textAnimation.length;
        const fullTxt = this.textAnimation[i];

        if (this.isDeleting) {
            this.letter = fullTxt.substring(0, this.letter.length - 1);
        } else {
            this.letter = fullTxt.substring(0, this.letter.length + 1);
        }

        this.nativeElement.innerHTML = `<span class="wrap">${this.letter}</span>`;

        let delta = 300 - Math.random() * 100;

        if (this.isDeleting) {
            delta /= 2;
        }

        if (!this.isDeleting && this.letter === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.letter === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(() => {
            this.tick();
        }, delta);
    }
}

window.onload = () => {
    new TextAnimationDirective();
};
