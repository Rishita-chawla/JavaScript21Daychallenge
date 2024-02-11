function divideNumbers(num1,num2){
    try{
        if(typeof num1!=="number" || typeof num2!=="number"){
            throw new TypeError("Operands must be an integer or a float");
        }
        else if(num2===0){
            throw new ZeroDivisionError("Division by zero is not allowed");
        }
        else{
            const result=num1/num2;
            console.log(result);
        }        
    }
    catch(e){
        console.log(e.message);
    }
}
