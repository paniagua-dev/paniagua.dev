import {gsap} from 'gsap';
import './main.less';
import {Core} from './ts/core';
import {TextAnimationDirective} from './ts/text-animation-directive';


const gsapAnimations = {
    duration: 1.5,
    opacity: 0,
    delay: 0.5,
    stagger: -0.2,
    force3D: true,
};

const core = new Core();

window.onload = () => {
    gsap.from('.animate-text', {
        ...gsapAnimations,
        x: -200,
        onStart: () => {
            setTimeout(() => new TextAnimationDirective(), 1000);
            core.getElement('profile-pic').classList.add('enabled');
        },
    });
    gsap.from('.animate-button', {
        ...gsapAnimations,
        delay: gsapAnimations.duration,
        duration: 0.2,
        onComplete: () => {
            setTimeout(() => {
                core.getElement('contact-button').classList.add('active');
            }, 1000);
        },
    });
};
