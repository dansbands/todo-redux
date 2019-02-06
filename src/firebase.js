import firebase from 'firebase'
var config = {
   apiKey: "AIzaSyCEx9mwAiAQHfATY6H53rdQtvtX-eRa224",
   authDomain: "todo-redux-9ede3.firebaseapp.com",
   databaseURL: "https://todo-redux-9ede3.firebaseio.com",
   projectId: "todo-redux-9ede3",
   storageBucket: "todo-redux-9ede3.appspot.com",
   messagingSenderId: "811921806593"
 };
var fire = firebase.initializeApp(config);
export default fire;
