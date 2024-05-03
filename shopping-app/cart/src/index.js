import faker from 'faker';

const cartString=`<div style="border: 1px solid black; padding: 10px; background-color: #f0f0f0;">You have ${faker.datatype.number(20)} items in your cart!`;
document.querySelector('#cart-list').innerHTML=cartString;