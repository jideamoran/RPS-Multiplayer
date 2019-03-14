// Initialize Firebase

  var config = {
    apiKey: "AIzaSyCUW64TgzoEFr2p_0Xv7WOFcK59whd8HOQ",
    authDomain: "traincounter-9ef4f.firebaseapp.com",
    databaseURL: "https://traincounter-9ef4f.firebaseio.com",
    projectId: "traincounter-9ef4f",
    storageBucket: "traincounter-9ef4f.appspot.com",
    messagingSenderId: "274423821132"
  };

  firebase.initializeApp(config);

//   Variables

  var trainName = "";
  var destination = "";
  var frequency = 0;
  var time = "";

$("#add-employee-btn").on("click", function(event){
  event.preventDefault();
console.log("we clicked the button");
    trainName = $("#train-name-input").val().trim();
    destination = $("#destination-input").val().trim();
    firstTrain = $("#first-train-input").val().trim();
    frequency = $("#frequency-input").val().trim();

    console.log(trainName);
    console.log(destination);
    console.log(frequency);
    console.log(nextArrival);


        database.ref().push ({
        trainName: trainName,
        destination: destination, 
        frequency: frequency, 
        firstTrain: firstTrain, 
        // dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
});


// Firebase watcher .on("child_added"
database.ref().on("child_added", function(snapshot) {
    // storing the snapshot.val() in a variable for convenience
    var sv = snapshot.val();

    // Console.loging the last user's data
    console.log(sv.trainName);
    console.log(sv.destination);
    console.log(sv.frequency);
    console.log(sv.firstTrain);


    var freq = parseInt(sv.frequency)

    var firstTrain = "03:30";
    var dConverted= moment(firstTime, "HH:mm").subtract(1, "years");
    console.log(dConverted);
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);
    var tRemainder = diffTime % freq;
    console.log(tRemainder);
    var tMinutesTillTrain = freq - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));



    // Change the HTML to reflect
   var newRow = $("<tr>").append (
    $("<td>").text(trainName),
    $("<td>").text(destination),
    $("<td>").text(firstTrain),
    $("<td>").text(frequency),
    $("<td>").text(moment(nextTrain, 'HH:mm').formt("hh:mm a");
    $("<td>").text(minsAway + 'Minutes Away'), 
    


    ),

    // Handle the errors

  
  function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });

Collapse


