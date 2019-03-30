// Initialize Firebase
var config = {
    apiKey: "AIzaSyAm957Dtfgp2TvZ_mQEIK7ZiwGuvt--cb0",
    authDomain: "train-scheduler-e9560.firebaseapp.com",
    databaseURL: "https://train-scheduler-e9560.firebaseio.com",
    projectId: "train-scheduler-e9560",
    storageBucket: "",
    messagingSenderId: "846547748058"
  };
  firebase.initializeApp(config);

  // make a variable for the firebase database
  var database = firebase.database();