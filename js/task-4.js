'use strict';

let price;
let str;
function getShippingCost(country) {
  if (country === 'China') {
    price = 100;
  }
  if (country === 'Chile') {
    price = 250;
  }
  if (country === 'Australia') {
    price = 170;
  }
  if (country === 'Jamaica') {
    price = 120;
  }
  switch (country) {
    case 'China':
      str = `Shipping to ${country} will cost ${price} credits`;
      break;
    case 'Chile':
      str = `Shipping to ${country} will cost ${price} credits`;
      break;
    case 'Australia':
      str = `Shipping to ${country} will cost ${price} credits`;
      break;
    case 'Jamaica':
      str = `Shipping to ${country} will cost ${price} credits`;
      break;
    default:
      str = 'Sorry, there is no delivery to your country';
  }
  return str;
}
console.log(getShippingCost('Australia'));
console.log(getShippingCost('Germany'));
console.log(getShippingCost('China'));
console.log(getShippingCost('Chile'));
console.log(getShippingCost('Jamaica'));
console.log(getShippingCost('Sweden'));
