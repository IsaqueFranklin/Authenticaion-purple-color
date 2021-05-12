import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA7ktg0t_8kAyNvVSmea9alRfYkOiECyYo",
    authDomain: "authentication-example-2197d.firebaseapp.com",
    projectId: "authentication-example-2197d",
    storageBucket: "authentication-example-2197d.appspot.com",
    messagingSenderId: "52482359424",
    appId: "1:52482359424:web:66064a8f84a8e718e8a665"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;