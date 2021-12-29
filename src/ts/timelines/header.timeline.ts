import {gsap} from 'gsap';
import {Core} from '../core';
import {TextAnimationDirective} from '../text-animation-directive';


const core = new Core();

export const headerTimeline = gsap.timeline()
    .to('.loading-overlay',
        {
            filter: 'blur(200px)',
            borderRadius: '50%',
            delay: 1,
        },
    )
    .to('.loading-overlay',
        {
            opacity: 0,
        },
    )
    .from('.animate-text:nth-child(1)', {
        duration: 1,
        opacity: 0,
        onStart: () => {
            new TextAnimationDirective();
        },
    })
    .from('.animate-text:nth-child(2)', {
        duration: 1,
        opacity: 0,
        delay: 1.5,
    })
    .from(['.animate-button', '.animate-text:nth-child(3)'], {
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
    })
    .from('.section__pic__profile', {
        opacity: 0,
    });
