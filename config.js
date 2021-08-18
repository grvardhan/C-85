import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyDXJlH6p07yJctbwE-tHYPQHiF7GyXMbXw",
    authDomain: "storytellingapp-323314.firebaseapp.com",
    projectId: "storytellingapp-323314",
    storageBucket: "storytellingapp-323314.appspot.com",
    messagingSenderId: "819929961622",
    appId: "1:819929961622:web:7181dea68f729f4f581eb7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase();