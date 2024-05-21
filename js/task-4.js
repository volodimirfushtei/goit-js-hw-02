'use strict';

function getShippingCost(country) {
  let price;
  let str;
  switch (country) {
    case 'China':
      price = 100;
      str = `Shipping to ${country} will cost ${price} credits`;
      break;
    case 'Chile':
      price === 250;
      str = `Shipping to ${country} will cost ${price} credits`;
      break;
    default:
      str = 'Sorry, there is no delivery to your country';
  }
  return str;
}
console.log(getShippingCost('Australia'));
console.log(getShippingCost('China'));
