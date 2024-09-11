function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return "Invalid Input";
    } else {
        for (let i = 0; i < name.length; i++) {
            if (!isNaN(name[i])) {
                return true;
            }
        }
        return false;
    }

}


// let x = checkDigitsInName("n9ayeem");
// console.log(x);
