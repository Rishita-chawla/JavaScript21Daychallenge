//using the code of day3.js
const checkEvenOdd=num=>{
    if (num<=0){
        return `Enter a valid number.`;

    }
    else if(num%2==0){
        return `${num} is an even number.`;
    }
    else{
        return `${num} is an odd number.`;
    }
};
console.log(checkEvenOdd(393));
console.log(checkEvenOdd(10));
console.log(checkEvenOdd(-2));

