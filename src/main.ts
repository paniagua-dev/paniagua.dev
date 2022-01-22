import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {forEach, upperFirst} from 'lodash';
import './main.less';
import {Core} from './ts/core';
import {TextAnimationDirective} from './ts/text-animation-directive';
import {timelines} from './ts/timelines';


const core = new Core();
const textAnimation = new TextAnimationDirective();

function resetTextAnimation(texts: string[]) {
    textAnimation.setStrings(texts);
    textAnimation.reset();
    textAnimation.init();
}

gsap.registerPlugin(ScrollTrigger);
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}
window.onload = () => {
    timelines.loading();
    timelines.header(textAnimation);
    timelines.hello();
    forEach(core.getElements('.drop-effect'), (el: Element) => {
        el.addEventListener('mouseenter', () => {
            resetTextAnimation(new Array(upperFirst(el.getAttribute('name'))));
        });
    });
};
