function calculateSum(num1,num2){
    let result=num1+num2;
    return result;
}
console.log(calculateSum(2,3));
console.log(calculateSum(99,10032));
console.log(calculateSum(-1,90));
console.log(calculateSum(-78,-3));
//NaN + any number=NaN
console.log(calculateSum(NaN,34));