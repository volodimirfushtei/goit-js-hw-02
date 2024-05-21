'use strict';

function formatMessage(message, maxLength) {
  let result;
  if (message.length <= maxLength) {
    return message.slice(0, message.length);
  } else if (message.length > maxLength) {
    result = message.slice(0, maxLength) + '...';
    return result;
  }
}
console.log(formatMessage('Curabitur ligula sapien', 16));
console.log(formatMessage('Curabitur ligula sapien', 23));
console.log(formatMessage('Vestibulum facilisis purus nec', 20));
console.log(formatMessage('Vestibulum facilisis purus nec', 30));
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15));
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41));
