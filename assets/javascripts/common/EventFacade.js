import $ from 'jquery';
import mix from './mix';

/**
 * Creates a new EventFacade. Provides debugging and logs events to condsole.
 * @class
 */
class EventFacade {
  constructor(options) {
    // default options
    this.enableDebug = false;
    // options
    mix(options, this);
  }

  bind(eventName, callback, context, target) {
    // enableDebug
    if (this.enableDebug) { // && !config.isProduction
      console.log('%cbind: ' + eventName, 'color: #91cc83; font-weight: bold; line-height: 1.5');
    }
    // EVENTS
    if (target) {
      $(target).unbind(eventName, $.proxy(callback, context)); // unbind first
      $(target).bind(eventName, $.proxy(callback, context));
    } else {
      $(document).unbind(eventName, $.proxy(callback, context)); // unbind first
      $(document).bind(eventName, $.proxy(callback, context));
    }
  }

  trigger(eventName, argsArray) {
    // enableDebug
    if (this.enableDebug) { // && !config.isProduction
      console.log('%ctrigger: ' + eventName, 'color: #00a7e1; font-weight: bold; line-height: 1.5');
      console.log(JSON.stringify(argsArray));
    }

    // EVENTS
    $(document).trigger(eventName, argsArray);
  }

  unbindAll() {
    $(document).unbind();
  }

  debug(msg) {
    var message = 'prototype=EventFacade|' + msg;
    console.log(message);
    // if (this.enableDebug && !config.isProduction) debugMessage.log(message);
  }
}

export default EventFacade;
