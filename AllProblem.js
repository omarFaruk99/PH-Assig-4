function calculateTax(income, expenses) {
    if (income < 0 || expenses < 0 || income < expenses) {
        return "Invalid Input";
    }
    const diff = income - expenses;
    const tax = diff * 0.2;
    return tax;
}




function sendNotification(email) {
    if (email.indexOf("@") === -1) {
        return "Invalid Email";
    }
    const split = email.split("@");
    return split[0] + " sent you an email from " + split[1];

}




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




function calculateFinalScore(obj) {
    if (typeof obj !== "object") {
        return "Invalid Input";
    } else if (obj.isFFamily === true) {
        finalScore = obj.testScore + obj.schoolGrade + 20;
        if (finalScore >= 80) {
            return true;
        } else {
            return false;
        }
    } else {
        finalScore = obj.testScore + obj.schoolGrade;
        if (finalScore >= 80) {
            return true;
        } else {
            return false;
        }
    }
}





function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
        return "Invalid Input"
    } else {
        let watingTimeSum = 0;
        for (const i of waitingTimes) {
            watingTimeSum = watingTimeSum + i;
        }
        const avgWaitingTime = Math.round(watingTimeSum / waitingTimes.length);
        const alreayDone = waitingTimes.length;
        const beforePersonHave = (serialNumber - 1) - alreayDone;
        const personWaitingTimeNeed = avgWaitingTime * beforePersonHave;
        return personWaitingTimeNeed;
    }

}


//output:

//prob:1
// let tax = calculateTax(5000, 1500);
// console.log(tax);



//prob:2
// let x = sendNotification("nadim.naem5@outlook.com");
// console.log(x);


//prob:3
// let x = checkDigitsInName(["Raj"]);
// console.log(x);


//prob:4
// let obje = { name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  };
// let cal = calculateFinalScore(obje);
// console.log(cal);



//prob:5
// let arr = [13, 2, 6, 7, 10];
// let serialNum = 6;
// let fun = waitingTime(arr, serialNum);
// console.log(fun);
