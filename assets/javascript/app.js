$(document).ready(function () {

    //on click for submit button
    $("#submit-btn").on("click", function (event) {

        event.preventDefault();

        //grabs the user input
        var trainName = $("#train-name").val().trim();
        var destinationName = $("#destination").val().trim();
        var firstTrainTime = moment($("#1stTrain-time").val().trim(), "HH:mm").format("X");
        var freqMin = $("#frequency-min").val().trim();

        //object for each added train
        var addTrain = {
            trainName: trainName,
            destination: destinationName,
            firstTrainTime: firstTrainTime,
            frequency: freqMin
        };

        //pushes the information to the object that will be displayed in the table
        database.ref().push(addTrain);

        console.log(addTrain.trainName);
        console.log(addTrain.destination);
        console.log(addTrain.firstTrainTime);
        console.log(addTrain.frequency);

        alert("A train was succesfully added");

        //clears all text-boxes
        $("#train-name").val("");
        $("#destination").val("");
        $("#1stTrain-time").val("");
        $("#frequency-min").val("");
    });

    //firebase event to add train to database, and a row in the html table
    database.ref().on("child_added", function (childSnapshot) {
        console.log(childSnapshot.val());

        var trainName = childSnapshot.val().trainName;
        var destinationName = childSnapshot.val().destination;
        var firstTrainTime = childSnapshot.val().firstTrainTime;
        var freqMin = childSnapshot.val().frequency;

        console.log(trainName);
        console.log(destinationName);
        console.log(firstTrainTime);
        console.log(freqMin);

        //gets the current time
        var currentTime = moment();
        console.log("Current time: " + moment(currentTime).format("hh:mm"));

        //sets the first train time to a previous date to make sure it comes before the current time
        var firstTimePushed = moment(firstTrainTime, "HH:mm").subtract(1, "years");
        console.log(firstTimePushed);

        //gets the difference between the first time and current time
        var timeDiff = moment().diff(moment(firstTimePushed), "minutes");
        console.log("Difference in time: " + timeDiff);

        //gets the time remaining time
        var timeRemainder = timeDiff % freqMin;
        console.log(timeRemainder);

        //shows the minutes until the next train
        var minutesAway = freqMin - timeRemainder;
        console.log("Minutes until train: " + minutesAway);

        //next train arrival time
        var nextArrival = moment().add(minutesAway, "minutes");
        console.log("Arrival time: " + moment(nextArrival).format("hh:mm"));

        //create a new row to show the information in the table
        var newRow = $("<tr>").append(
            $("<td>").text(trainName),
            $("<td>").text(destinationName),
            $("<td>").text(freqMin),
            $("<td>").text(moment(nextArrival).format("hh:mm")),
            $("<td>").text(minutesAway)
        );

        //append the new row to the train-table
        $("#train-table > tbody").append(newRow);


    });

    //


})