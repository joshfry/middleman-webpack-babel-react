// https://github.com/pcardune/handlebars-loader
import helloHbs from './templates/sample/hello.hbs';
import EventFacade from './common/EventFacade';
import mix from './common/mix';
import debugMessage from './common/debugMessage';

import '../stylesheets/second.scss';

// handlebars example
const container = document.getElementById('container');
const renderHTML = helloHbs({ name: 'Handlebars' });
container.innerHTML = renderHTML;
debugMessage(`handlebars example: ${renderHTML}`);

// mix example
const myObj = { name: 'defaultName' };
mix({ age: 33 }, myObj);
debugMessage(`mix example: ${JSON.stringify(myObj)}`);

// eventFacade example
class MyClass {}
const myClass = new MyClass();
myClass.eventFacade = new EventFacade({ enableDebug: true });
myClass.eventFacade.bind('eventFacade.example', () => debugMessage('eventFacade.example callback'));
myClass.eventFacade.trigger('eventFacade.example', { data: 'it works!' });

// Add your sweet sweet JS here
debugMessage('Add your sweet sweet JS here');
