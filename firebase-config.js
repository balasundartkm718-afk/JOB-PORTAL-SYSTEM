// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC1k1wds6P39Bbc51o6uo1JWgLOCEaf5Hg",
  authDomain: "jpms-dc2dc.firebaseapp.com",
  projectId: "jpms-dc2dc",
  storageBucket: "jpms-dc2dc.firebasestorage.app",
  messagingSenderId: "1089495911873",
  appId: "1:1089495911873:web:6b5044f0cfa2e3bd2c7340",
  measurementId: "G-JD00431Q73"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
