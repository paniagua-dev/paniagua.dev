import {gsap} from 'gsap';


export const loadingTimeline = () => gsap.timeline()
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
    );

