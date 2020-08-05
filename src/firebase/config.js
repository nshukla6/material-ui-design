import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';




const firebaseConfig = {
  apiKey: "AIzaSyD8Gto8w8IJlAuSTatnDaN8Bu9doXMiJbI",
  authDomain: "ninja-firegram-abdce.firebaseapp.com",
  databaseURL: "https://ninja-firegram-abdce.firebaseio.com",
  projectId: "ninja-firegram-abdce",
  storageBucket: "ninja-firegram-abdce.appspot.com",
  messagingSenderId: "803016727122",
  appId: "1:803016727122:web:eed9208fc202f16e3fdd8b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage();
export const firestore = firebase.firestore();
export default firebase;