function simulateAsync(str){
    return promise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(str);
            resolve("success");
         },4000);}
         )   
}
async function myFunction(){
    try{
        await simulateAsync("hello");
        await simulateAsync("bye");
    }
    catch(error){
        console.log("an error occurred",error);
    }
   
}
myFunction();

