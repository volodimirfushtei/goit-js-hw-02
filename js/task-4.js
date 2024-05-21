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
    case 'Australia':
      price === 170;
      str = `Shipping to ${country} will cost ${price} credits`;
      break;
    case 'Jamaica':
      price === 120;
      str = `Shipping to ${country} will cost ${price} credits`;
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
