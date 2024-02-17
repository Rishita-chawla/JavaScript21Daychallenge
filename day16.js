function simulateAsync(str){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(str);
            resolve("success");
         },4000);}
         )   
}

simulateAsync("hello")
.then(()=>{
    console.log("waiting for 4s");
    return simulateAsync("bye")})
.catch((e)=>{
        console.log("OOPS an error",e);
    });
