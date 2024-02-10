function getCurrentDateTime(){
    const currentDateAndTime=new Date();
    console.log("Current Date And Time: ",currentDateAndTime);
    formattedDateTime(currentDateAndTime);
}
function formattedDateTime(currentDateAndTime){
    const optionsDate={"month":"long","day":"2-digit","year":"numeric"};
    const optionsTime={"hour":"numeric","minute":"numeric","second":"numeric","hour12":true};
    const convertedDate=currentDateAndTime.toLocaleDateString("en-US",optionsDate);
    const convertedTime=currentDateAndTime.toLocaleTimeString("en-US",optionsTime);
    console.log(convertedDate,convertedTime);
}
getCurrentDateTime();

