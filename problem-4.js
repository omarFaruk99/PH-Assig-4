function calculateFinalScore(obj) {
    // return obj;
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

let obje = { name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  };
let cal = calculateFinalScore(obje);
console.log(cal);