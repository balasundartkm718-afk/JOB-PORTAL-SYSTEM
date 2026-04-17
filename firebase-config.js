// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1k1wds6P39Bbc51o6uo1JWgLOCEaf5Hg",
  authDomain: "jpms-dc2dc.firebaseapp.com",
  projectId: "jpms-dc2dc",
  storageBucket: "jpms-dc2dc.firebasestorage.app",
  messagingSenderId: "1089495911873",
  appId: "1:1089495911873:web:6b5044f0cfa2e3bd2c7340",
  measurementId: "G-JD00431Q73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
