import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAaGgmQtAzy8gJkuZzKh3M7NoZ3EHG7ZEM",
    authDomain: "bookworm-d93e4.firebaseapp.com",
    databaseURL: "https://bookworm-d93e4.firebaseio.com",
    projectId: "bookworm-d93e4",
    storageBucket: "bookworm-d93e4.appspot.com",
    messagingSenderId: "105928443913",
    appId: "1:105928443913:web:4bb632115af5d6303350d8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;