const prices=[9.99,1.50,19.99,49.99,30.50];
console.log(`The original array:[${prices}]`);
//using map method
const mapped_prices=prices.map(el=>{
    return el*2;
});
console.log(`The new arraw after using map method is: [${mapped_prices}]`);
//using filter method
const filtered_prices=prices.filter(el=>{
    return el>10.0;
});
console.log(`The new arraw after using filter method is: [${filtered_prices}]`);
//using reduce method
const reduced_prices=prices.reduce((price,total)=>{
    return total+price;
});
console.log(`The total of all the elements in the array: [${prices}] is: ${reduced_prices}`);