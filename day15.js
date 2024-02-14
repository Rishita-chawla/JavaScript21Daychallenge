function simulateAsync(callBack){
    setTimeout(()=>{
       console.log("Hellooooo!")
    },4000);
    callBack();
}
function Afunc(){
    console.log("Bye!");//this will be printed first because of asynchronous execution of code.
}
simulateAsync(Afunc);