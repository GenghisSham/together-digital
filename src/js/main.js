import { Slider } from './modules/sliders';

const quotesSlider = new Slider(document.querySelector('.quotes .slider'));
const sectorsSlider = new Slider(document.querySelector('.sectors'));

const navButton = document.querySelector('.blog-menu-button[aria-expanded]');

    function toggleNav({ target }) {
      const expanded = target.getAttribute('aria-expanded') === 'true' || false;
      navButton.setAttribute('aria-expanded', !expanded);
    }

navButton.addEventListener('click', toggleNav);