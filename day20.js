const url="https://api.openweathermap.org/data/2.5/weather?q=austin&appid=e5ca505642e54ff56f3c09e68dca8812";
//fetching the weather of austin (a city in US)
fetch(url).then((res)=>{
    console.log("RESOLVED!",res);
    return res.json();
}).then((data)=>{
    console.log("LOADING THE FETCHED DATA!");
    console.log(data);
}).catch((e)=>{
    console.log("OOPSSS AN ERRO",e);
});


