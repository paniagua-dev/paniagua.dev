import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import './main.less';
import {Core} from './ts/core';
import {TextAnimationDirective} from './ts/text-animation-directive';
import {headerTimeline} from './ts/timelines/header.timeline';


const timeline = headerTimeline;

gsap.registerPlugin(ScrollTrigger);
window.onload = () => {


};
