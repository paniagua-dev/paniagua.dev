import {gsap} from 'gsap';
import {Core} from '../core';


const core = new Core();
export const headerTimeline = () => {
    gsap.from('.engineer-text', {
        duration: 1,
        opacity: 0,
        delay: 5,
    });
    gsap.from('.animate-text:nth-child(2)', {
        delay: 5,
        duration: 1,
        x: -800,
    });
    gsap.from('.drop-effect', {
        delay: 5,
        opacity: 0,
        scale: 0,
        rotate: 360,
        stagger: 0.1,
    });
    gsap.from('.profile__pic--wrapper', {
        opacity: 0,
        delay: 7,
        duration: 10,
    });
    gsap.from(['.animate-button'], {
        delay: 5,
        duration: 1,
        opacity: 0,
        onComplete: () => {
            core.getElement('contact-button').classList.add('active');
        },
    });
    gsap.from('.waves', {
        opacity: 0,
        delay: 3,
        duration: 20,
    });
    gsap.from('.footer p', {
        opacity: 0,
        delay: 5,
        duration: 20,
    });
};
