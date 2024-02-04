const result=function checkEvenOdd(num){
    if (num<=2){
        return "enter valid number";

    }
    else if(num%2==0){
        return "even";
    }
    else{
        return "odd";
    }
}
console.log(result(393));
console.log(result(10));
console.log(result(-2));
