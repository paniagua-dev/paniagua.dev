import {Core} from './core';


export class TextAnimationDirective extends Core {
    private textAnimation = this.texts;

    private tagName = 'text-animation';
    private period = 5000;
    private loopNum = 0;
    private isDeleting: boolean;
    private letter = '';
    private displayOnlyFirstOne = true;

    /**
     * Pass to true when the animation of a text end;
     */
    public animationEnd = false;
    private timeout: number;

    constructor(private texts: string[] = ['Front-end', 'Angular', 'Wordpress']) {
        super();
    }

    public init(): void {
        this.getElement(this.tagName);
        this.startAnimation();
    }

    public startAnimation() {
        this.tick();
        this.isDeleting = false;
    }

    public setStrings(texts: string[]): void {
        this.textAnimation = texts;
    }

    public reset(): void {
        this.period = 5000;
        this.loopNum = 0;
        this.isDeleting = false;
        this.letter = '';
        this.displayOnlyFirstOne = true;
        if (!!this.timeout) {
            clearTimeout(this.timeout);
        }
    }

    public tick() {
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
            this.animationEnd = true;
            if (this.displayOnlyFirstOne) {
                return;
            }
        } else if (this.isDeleting && this.letter === '') {
            this.isDeleting = false;
            this.animationEnd = false;
            this.loopNum++;
            delta = 500;
        }

        const timeout = setTimeout(() => {
            this.tick();
            clearTimeout(timeout);
        }, delta);

        this.timeout = timeout;
    }
}
