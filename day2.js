//creating variables of type numbers
const num1=10;
const num2=20;
console.log("Arithmetic operations on numbers->")
//arithmetic operations on numbers
const sum=`Sum of ${num1} and ${num2} is: ${num1+num2}`;
console.log(sum);
const diff=`Difference of ${num1} and ${num2} is: ${num1-num2}`;
console.log(diff);
const prod=`Product of ${num1} and ${num2} is: ${num1*num2}`;
console.log(prod);
const quot=`Quotient of ${num1} and ${num2} is: ${num1/num2}`;
console.log(quot);
const remain=`Remainder of ${num1} and ${num2} is: ${num1%num2}`;
console.log(remain);


//creating variables of type string
const str1="Hello";
const str2="World";
//concatenation on string
console.log("Concatenation on strings->")
const concat1=`concatenating 2 strings-> ${str1} + ${str2} :${str1+str2}`;
console.log(concat1);
const concat2=`concatenating a string and a num-> ${str1} + ${num1} :${str1+num1}`;
console.log(concat2);
//Note:we cannot use arithmetic operators except "+" on strings as they will all lead to NaN.

//creating variables of type boolean
const bool1=true;
const bool2=false;
console.log("Logical operations on bools->")
const band1=`LOGICAL AND operations on boolean values->${bool1}&&${bool2}:${bool1&&bool2}`;
console.log(band1);
//Note:any num other than 0 is treated as true and 0 is treated as false
const band2=`LOGICAL AND operations on a boolean value and a number->${bool1} && ${num1}:${bool1 && num1===10}`;
console.log(band2);
const bor1=`LOGICAL OR operations on boolean values->${bool1}||${bool2}:${bool1||bool2}`;
console.log(bor1);
const bor2=`LOGICAL OR operations on a boolean value and a number->${bool1}||${num1}:${bool1||num1}`;
console.log(bor2);
const bnot1=`LOGICAL NOT operation on a boolean value->!(${bool1}):${!bool1}`;
console.log(bnot1);
const bnot2=`LOGICAL NOT operation on a numeric value->!(${num1}):${!num1}`;
console.log(bnot2);






