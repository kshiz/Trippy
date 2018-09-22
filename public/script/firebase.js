// Initialize Firebase
var config = {
  apiKey: "AIzaSyB0pgxanTNtVwR7IkMRbW77a0ZMfaHMLUg",
  authDomain: "trippy-b9e5b.firebaseapp.com",
  databaseURL: "https://trippy-b9e5b.firebaseio.com",
  projectId: "trippy-b9e5b",
  storageBucket: "trippy-b9e5b.appspot.com",
  messagingSenderId: "649295753388"
};
firebase.initializeApp(config);


function signInWithGoogle() {

  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user);
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log(errorCode);
    console.log(errorMessage);
    // ...
  });
}