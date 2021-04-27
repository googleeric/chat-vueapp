import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAr2eiIJNvqr6bWkMtpR0Ta3vqzv2S91ME",
    authDomain: "geo-codewist.firebaseapp.com",
    databaseURL: "https://geo-codewist.firebaseio.com",
    projectId: "geo-codewist",
    storageBucket: "geo-codewist.appspot.com",
    messagingSenderId: "511975891878",
    appId: "1:511975891878:web:9a0e2784ee1e32625c6567"
  };
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()