import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBpbQbHd1WhJxIyD3h5QMYT0t5FNvSnepg',
  authDomain: 'bulletin-gang.firebaseapp.com',
  projectId: 'bulletin-gang',
  storageBucket: 'bulletin-gang.appspot.com',
  messagingSenderId: '57471354261',
  appId: '1:57471354261:web:2302d740e7b217992fe29c',
  measurementId: 'G-3G6ENXVRT4',
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

//timestamp
const timestamp = firebase.firestore.Timestamp();

export { projectFirestore, projectAuth, projectStorage, timestamp };
