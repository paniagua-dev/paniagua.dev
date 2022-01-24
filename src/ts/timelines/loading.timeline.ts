import {gsap} from 'gsap';
import {TextAnimationDirective} from '../text-animation-directive';


export const loadingTimeline = (textanimation: TextAnimationDirective) => gsap.timeline()
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
            onComplete: () => {
                textanimation.init();
            },
        },
    );

