import SmoothScroll from './modules/smooth-scroll.js';
import Accordion from './modules/accordion-list.js';
import TabNavMenu from './modules/tabNav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMobileMenu from './modules/mobile-menu.js';
import initOpeningHours from './modules/opening-hours.js';
import initAnimalsApi from './modules/fetch-animals.js';
import initBitcoinApi from './modules/fetch-btc.js';
import initAnimationOnScroll from './modules/animation-at-scroll.js';

const smoothScroll = new SmoothScroll('[data-menu="smootha"] a[href^="#"');
smoothScroll.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

const tabNav = new TabNavMenu(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabNav.init();

const modal = new Modal(
  "[data-modal='open']",
  "[data-modal='close']",
  "[data-modal='container']",
  'click'
);
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

initAnimalsApi('../../animals.json', '.grid-numbers');
initBitcoinApi('https://blockchain.info/ticker', '.btc-preco');
initDropdownMenu();
initMobileMenu();
initOpeningHours();
initAnimationOnScroll();
