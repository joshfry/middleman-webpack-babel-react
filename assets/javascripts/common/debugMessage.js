/* eslint no-console:0 */
// console loggins for debug messages
function debugMessage(msg) {
  return console.log(`%cdebug: ${msg}`, 'background-color: rgba(248,191,50,.15); padding: 3px 5px;)');
}

export default debugMessage;
