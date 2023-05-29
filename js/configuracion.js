const firebaseConfig = {
  apiKey: "AIzaSyBl6DpbWncISUvahOaaSsUtK2Qqht5w4Yo",
  authDomain: "makeupstudio-efcfb.firebaseapp.com",
  projectId: "makeupstudio-efcfb",
  storageBucket: "makeupstudio-efcfb.appspot.com",
  messagingSenderId: "784008639867",
  appId: "1:784008639867:web:a9b98750dd7ca28c00f9de"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

