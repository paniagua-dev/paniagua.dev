import {Core} from './core';


export class TextAnimationDirective extends Core {
    private textAnimation = ['Front-end', 'Angular', 'Wordpress'];
    private period = 5000;
    private tagName = 'text-animation';

    private loopNum = 0;
    private isDeleting: boolean;
    private letter = '';
    private displayOnlyFirstOne = true;

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
            if (this.displayOnlyFirstOne) {
                return;
            }
        } else if (this.isDeleting && this.letter === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        const timeout = setTimeout(() => {
            this.tick();
            clearTimeout(timeout);
        }, delta);
    }
}
