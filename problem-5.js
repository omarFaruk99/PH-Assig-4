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


// let arr = [13, 2, 6, 7, 10];
// let serialNum = 6;
// let fun = waitingTime(arr, serialNum);
// console.log(fun);