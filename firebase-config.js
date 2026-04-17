// ============================================================
// firebase-config.js — NexHire Job Portal
// ============================================================
// SETUP INSTRUCTIONS:
// 1. Go to https://console.firebase.google.com/
// 2. Create a new project (e.g., "NexHire")
// 3. Click the </> (Web) button to register a web app
// 4. Copy your firebaseConfig object and paste it below
// 5. In Firebase Console → Authentication → Sign-in method:
//    - Enable "Email/Password"
//    - Enable "Google"
// 6. In Firebase Console → Firestore Database:
//    - Create database (start in test mode for development)
// 7. In Firestore → Rules, use:
//    rules_version = '2';
//    service cloud.firestore {
//      match /databases/{database}/documents {
//        match /{document=**} {
//          allow read, write: if request.auth != null;
//        }
//      }
//    }
// ============================================================

export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
