import {gsap} from 'gsap';


export const helloTimeline = () => gsap.timeline()
    .from('.hello .animate-text', {
        opacity: 0,
        stagger: 0.5,
        scrollTrigger: {
            trigger: '.hello',
            start: 'top center',
            end: '+=500px',
            toggleActions: 'play pause restart none',
            markers: true,
        },
    })
    .to('.hello .animate-text:nth-child(3)', {
        marginLeft: '20%',
        scrollTrigger: {
            trigger: '.hello .animate-text:nth-child(3)',
            start: 'center bottom',
            toggleActions: 'play pause restart none',
            scrub: true,
        },
    });

