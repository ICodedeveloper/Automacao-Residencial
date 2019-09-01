var five = require("johnny-five");
var firebase = require("firebase");

var board = new five.Board();

board.on("ready", function() {
 
  var rele = new five.Relay(8);


    
    this.repl.inject({
      
    rele: rele
  });

  var firebaseConfig = {
    apiKey: "AIzaSyD5b9D5DXnoM33FRJFAmXgmgyidXFTgjtQ",
    authDomain: "iotprojeto-ddaa8.firebaseapp.com", // ID DO SEU PROJETO
    databaseURL: "https://iotprojeto-ddaa8.firebaseio.com",
    projectId: "iotprojeto-ddaa8",
    storageBucket: "iotprojeto-ddaa8.appspot.com",
    messagingSenderId: "sender-id",
  };


    firebase.initializeApp(firebaseConfig);

    
    var starCountRef = firebase.database().ref('lampada').on('value', function(snapshot) {

      let lampada =  snapshot.val();
     
       if (lampada == "off"){
          
         rele.on();
       }else {
         
          rele.off();
       }
        
    });




});
