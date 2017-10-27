import '../stylesheets/main.scss';
import mix from './common/mix';

// render handlebar template
// https://github.com/pcardune/handlebars-loader
const template = require('./templates/sample.hbs');
const html = template({ name: 'Handlebars' });
const container = document.getElementById('results');
container.innerHTML = html;

const myObj = { name: 'defaultName' };
mix({ age: 33 }, myObj);

console.log(myObj);
// import addBounceToLogo from './logo';

// addBounceToLogo();
// Add your sweet sweet JS here
// console.log('hi');
