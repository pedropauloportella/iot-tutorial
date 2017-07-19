var five = require("johnny-five");
var firebase = require("firebase");

var board = new five.Board();

board.on("ready", function() {
  var rele = new five.Relay(8);
  
  this.repl.inject({
    rele : rele
  });

  // Initialize Firebase
// TODO: Replace with your project's customized code snippet
  var config = {
    apiKey: "AIzaSyCjzkTVhEkv2E5Z5YozoSIpjpdj9M5L9C4",
    authDomain: "iot-tutorial-31c2e.firebaseapp.com",
    databaseURL: "https://iot-tutorial-31c2e.firebaseio.com",
    storageBucket: "iot-tutorial-31c2e.appspot.com",
  };
  firebase.initializeApp(config);

  var starCountRef = firebase.database().ref('lampada').on('value', function(snapshot) {
    let lampada = snapshot.val();

    if (lampada == 'on') {
      rele.on();
    } else {
      rele.off();
    }
  });

});