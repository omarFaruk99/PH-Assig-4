function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return "Invalid Input";
    } else if (/\d/.test(name) === true) {
        return true
    } else {
        return false;
    }
}


// let x = checkDigitsInName(["Raj"])
// console.log(x);