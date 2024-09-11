function sendNotification(email) {
    if(email.indexOf("@") === -1){
        return "Invalid Email";
    }
    const split = email.split("@");
    return split[0] + " sent you an email from " + split[1];

}


// function call
let x = sendNotification("sadia8icloud.com");
console.log(x);
