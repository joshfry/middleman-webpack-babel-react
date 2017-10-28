import '../stylesheets/main.scss';
import mix from './common/mix';
import Dog from './common/sample/Dog';
// handlebars-loader for webpack
// https://github.com/pcardune/handlebars-loader
import helloHbs from './templates/sample/hello.hbs';
import EventFacade from './common/EventFacade';

// render handlebars template
const container = document.getElementById('results');
const renderHTML = helloHbs({ name: 'Handlebars' });
container.innerHTML = renderHTML;

const myObj = { name: 'defaultName' };
mix({ age: 33 }, myObj);

console.log(myObj);

const snickers = new Dog('Snickers', 'King Charles');
console.log(snickers);

class MyClass {}
const myClass = new MyClass();
myClass.eventFacade = new EventFacade({ enableDebug: true });
myClass.eventFacade.bind('Event.Facade', function() { console.log('Event.Facade callback'); });
myClass.eventFacade.trigger('Event.Facade', { data: 'it works!' });

// import addBounceToLogo from './logo';

// addBounceToLogo();
// Add your sweet sweet JS here
// console.log('hi');

/*
// GET SET EXAMPLE

class Employee {

  constructor(name) {
    this._name = name;
  }

  doWork() {
    return `${this._name} is working`;
  }

  get name() {
    return this._name.toUpperCase();
  }

  set name(newName){
    if(newName){
        his._name = newName;
    }
  }
}

let developer = new Employee("Scott");
expect(developer.name).toBe("SCOTT");

developer.name = "Alex";
expect(developer.doWork()).toBe("Alex is working");
*/
