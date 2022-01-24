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
        opacity: 0,
        delay: 1,
    })
    .from('.header .drop-effect', {
        opacity: 0,
        stagger: 0.1,
    })
    .from(['.header .animate-button'], {
        scrollTrigger: {
            trigger: '.animate-button',
            toggleActions: 'play none none none',
            onLeave: () => {
                core.getElement('contact-button').classList.remove('active');
            },
            onEnterBack: () => {
                core.getElement('contact-button').classList.add('active');
            },
        },
        duration: 1,
        opacity: 0,
        onComplete: () => {
            core.getElement('contact-button').classList.add('active');
        },
    });
