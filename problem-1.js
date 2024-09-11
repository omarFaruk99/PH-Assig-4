function calculateTax(income, expenses) {
    if (income < 0 || expenses < 0 || income < expenses) {
        return "Invalid Input";
    }
    const diff = income - expenses;
    const tax = diff * 0.2;
    return tax;
}

// let tax = calculateTax(-6000, -1500);
// console.log(tax);
