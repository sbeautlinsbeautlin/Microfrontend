import faker from 'faker';

let productString='';
for(let i=0 ;i < 5; i++){
    productString += `<div>${faker.commerce.productName()}</div>`
}
console.log(productString);
document.querySelector(`#product-list`).innerHTML=productString;