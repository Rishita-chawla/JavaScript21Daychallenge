//higher order function
function higherOrderFunction(func){
    const num1=50;
    const num2=60;
    return `The sum of ${num1} and ${num2} is: ${func(num1,num2)}`;
}
function anotherFunction(num1,num2){
    return num1+num2;
}
console.log(higherOrderFunction(anotherFunction));

