import gsap from "wp-content/themes/theme-entrepreneurs/src/utils/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/all";

const Gsap = gsap;

Gsap.registerPlugin(ScrollTrigger, CustomEase);

Gsap.defaults({
  ease: CustomEase.create("custom", "M0,0 C0.7,0.002 0.31,1.004 1,1 "),
  duration: 1,
});

export { Gsap as gsap, ScrollTrigger, CustomEase };
