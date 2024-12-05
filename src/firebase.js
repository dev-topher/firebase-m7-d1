// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDdXGe24l1R0OSZFcfgqa8Lt-wASy3yAHU",
    authDomain: "desafio-crud-user-cras-1296.firebaseapp.com",
    projectId: "desafio-crud-user-cras-1296",
    storageBucket: "desafio-crud-user-cras-1296.appspot.com",
    messagingSenderId: "258267689209",
    appId: "1:258267689209:web:3e60d32b0a82b12652f228",
    measurementId: "G-WVPRSKP8DX"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };