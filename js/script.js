import SmoothScroll from './modules/smooth-scroll.js';
import Accordion from './modules/accordion-list.js';
import TabNavMenu from './modules/tabNav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import DropdownMenu from './modules/dropdown-menu.js';
import MobileMenu from './modules/mobile-menu.js';
import AnimationOnScroll from './modules/animation-on-scroll.js';
import OpeningHours from './modules/opening-hours.js';

// Fetch Functions
import initAnimalsApi from './modules/fetch-animals.js';
import initBitcoinApi from './modules/fetch-btc.js';

const smoothScroll = new SmoothScroll('[data-menu="smooth"] a[href^="#"');
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

const animationOnScroll = new AnimationOnScroll("[data-anime='scroll']");
animationOnScroll.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]');
dropdownMenu.init();

const mobileMenu = new MobileMenu('[data-menu="button"]', '[data-menu="list"]');
mobileMenu.init();

const openingHours = new OpeningHours('[data-week]', 'open', 'closed');
openingHours.init();

// Fetch Functions (URL, target)
initAnimalsApi('../../animals.json', '.grid-numbers');
initBitcoinApi('https://blockchain.info/ticker', '.btc-preco');
