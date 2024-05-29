import './style.css'
import Input from './Input'
import Output from './Output'
import LayoutHandler from './LayoutHandler'
import CapitalizationHandler from './CapitalizationHandler'

document.querySelector('#app').innerHTML = `
  <div>
    <div class="header">
      <button class="button fix-layout">Swap Keyboard</button>
      <button class="button upperAll">Upper Case All</button>
      <button class="button lowerAll">Lower Case All</button>
      <button class="button capWords">Capitalize Words</button>
      <button class="button capMeanWords">Capitalize Title</button>
      <button class="button invertCase">Invert Case</button>
      <button class="button apply">Apply</button>
    </div>
    <div id="main">
      <div class="left">
        <textarea id="input" class="input"></textarea>
      </div>
      <div class="right">
        <div class="output"></div>
      </div>
    </div>
  </div>
`

const inputElement = document.querySelector('.input');
const fixLayoutButton = document.querySelector('.fix-layout');
const upperAllButton = document.querySelector('.upperAll');
const lowerAllButton = document.querySelector('.lowerAll');
const capWordsButton = document.querySelector('.capWords');
const capMeanWordsButton = document.querySelector('.capMeanWords');
const invertCaseButton = document.querySelector('.invertCase');
const apply = document.querySelector('.apply');

const input = new Input(inputElement);
const output = new Output(document.querySelector('.output'));
const layoutHandler = new LayoutHandler(input, output);
const capitalizationHandler = new CapitalizationHandler(input, output);

fixLayoutButton.addEventListener('click', () => layoutHandler.fixLayout());
upperAllButton.addEventListener('click', () => capitalizationHandler.toUpperCaseAll());
lowerAllButton.addEventListener('click', () => capitalizationHandler.toLowerCaseAll());
capWordsButton.addEventListener('click', () => capitalizationHandler.capWords());
capMeanWordsButton.addEventListener('click', () => capitalizationHandler.capTitle());
invertCaseButton.addEventListener('click', () => capitalizationHandler.invertCase());
apply.addEventListener('click', () => input.apply());