// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCwc4kZ5sFNRF6x6SC2-mYk15cZtcDbVfQ',
  authDomain: 'splashed-app.firebaseapp.com',
  projectId: 'splashed-app',
  storageBucket: 'splashed-app.appspot.com',
  messagingSenderId: '384256928598',
  appId: '1:384256928598:web:baf7a079d9b8b38200c4f7',
  measurementId: 'G-L90PX0VKL0',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
