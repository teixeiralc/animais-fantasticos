import SmoothScroll from './modules/smooth-scroll.js';
import initAnimationOnScroll from './modules/animation-at-scroll.js';
import initAccordion from './modules/accordion-list.js';
import initTabMenuNav from './modules/tabNav.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMobileMenu from './modules/mobile-menu.js';
import initOpeningHours from './modules/opening-hours.js';
import initAnimalsApi from './modules/fetch-animais.js';
import initBitcoinApi from './modules/fetch-btc.js';

const smoothScroll = new SmoothScroll('[data-menu="smootha"] a[href^="#"');
smoothScroll.init();

initAnimationOnScroll();
initAccordion();
initTabMenuNav();
initModal();
initTooltip();
initDropdownMenu();
initMobileMenu();
initOpeningHours();
initAnimalsApi();
initBitcoinApi();
