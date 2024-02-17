const url="https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=e5ca505642e54ff56f3c09e68dca8812";

fetch(url).then((res)=>{
    console.log("RESOLVED!",res);
    return res.json();
}).then((data)=>{
    const {name, weather, main}=data
    console.log("LOADING THE FETCHED DATA!");
    console.log(data);
    const cityName = document.createElement("h2");
    cityName.innerText = `Weather in ${name}`;
    document.body.appendChild(cityName);
    const listItems=[`Weather Description:${weather[0].description}`,
    `temp:${main.temp}`,`temp_min:${main.temp_min}`,
    `temp_max:${main.temp_max}`,`pressure:${main.pressure}`,`humidity:${main.humidity}`];
    const myList=document.createElement("ul");
    listItems.forEach(item=>{
        const content=document.createElement("li");
        content.innerText=item;
        myList.appendChild(content)
    });
    document.body.appendChild(myList);
    
}).catch((e)=>{
    console.log("OOPSSS AN ERRO",e);
});


