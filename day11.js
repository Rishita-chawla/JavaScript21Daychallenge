function validateEmail(email){
    let regex=/^([_\-\.0-9a-zA-Z]+)@([_\-\.a-zA-Z0-9]+)\.([a-zA-Z]+)$/;
    if (regex.test(email)){
        console.log("valid");
    }
    else{
        console.log("invalid");
    }
}
let email = prompt("Enter an email:");
validateEmail(email);