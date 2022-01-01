import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import './main.less';
import {timelines} from './ts/timelines';


gsap.registerPlugin(ScrollTrigger);
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}
window.onload = () => {
    timelines.loading();
    timelines.header();
    timelines.hello();
};
