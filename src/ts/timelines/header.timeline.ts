import {gsap} from 'gsap';
import {Core} from '../core';


const core = new Core();
export const headerTimeline = () => gsap.timeline()
    .from('.header .engineer-text', {
        duration: 1,
        opacity: 0,
        delay: 5,
    })
    .from('.header .animate-text:nth-child(2)', {
        duration: 1,
        x: -800,
    })
    .from('.header .drop-effect', {
        scale: 0,
        rotate: 360,
        stagger: 0.1,
    })
    .from(['.header .animate-button'], {
        duration: 1,
        opacity: 0,
        onComplete: () => {
            core.getElement('contact-button').classList.add('active');
        },
    });
