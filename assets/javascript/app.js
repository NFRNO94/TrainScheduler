$(document).ready(function () {

    //
    var tFrequency = 3;

    //
    var firstTime = "10:30";

    //
    var firstTimePushed = moment(firstTime, "HH:mm").subtract(1, "years");
    console.log(firstTimePushed);

    //
    var currentTime = moment();
    console.log("Current time: " + moment(currentTime).format("hh:mm"));

    //
    var timeDiff = moment().diff(moment(firstTimePushed), "minutes");
    console.log("Difference in time: " + timeDiff);

    //
    var timeRemainder = timeDiff % tFrequency;
    console.log(timeRemainder);

    //
    var timeUntilTrain = tFrequency - timeRemainder;
    console.log("Minutes until train: " + timeUntilTrain);

    //
    var nextTrain = moment().add(timeUntilTrain, "minutes");
    console.log("Arrival time: " + moment(nextTrain).format("hh:mm"));

})