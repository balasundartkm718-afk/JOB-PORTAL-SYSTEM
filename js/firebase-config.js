// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, GithubAuthProvider, signInWithPopup } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Your config (same as yours)
const firebaseConfig = {
  apiKey: "AIzaSyC1k1wds6P39Bbc51o6uo1JWgLOCEaf5Hg",
  authDomain: "jpms-dc2dc.firebaseapp.com",
  projectId: "jpms-dc2dc",
  storageBucket: "jpms-dc2dc.firebasestorage.app",
  messagingSenderId: "1089495911873",
  appId: "1:1089495911873:web:6b5044f0cfa2e3bd2c7340"
};

// Initialize
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
