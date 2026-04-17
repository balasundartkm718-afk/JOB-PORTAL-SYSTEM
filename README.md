# NexHire — Job Portal System
## DBMS Mini Project | Firebase + Vanilla JS

---

## 📁 Project Structure

```
job-portal/
├── index.html                  # Landing page (hero, stats, features)
├── login.html                  # Login (Email + Google)
├── register.html               # Register (Email + Google, role select)
├── role_select.html            # Role selector for Google sign-in
├── employer_dashboard.html     # Employer: post jobs, manage listings
├── jobseeker_dashboard.html    # Job seeker: browse, apply, track
├── style.css                   # All styles (glassmorphism dark theme)
└── firebase-config.js          # 🔧 YOUR FIREBASE CREDENTIALS GO HERE
```

---

## 🔥 Firebase Setup (Step-by-Step)

### Step 1 — Create Firebase Project
1. Go to https://console.firebase.google.com/
2. Click **"Add project"**
3. Name it (e.g., `nexhire`) → Continue → Create

### Step 2 — Register Web App
1. In your project dashboard, click the **`</>`** (Web) button
2. Enter app nickname: `NexHire Web`
3. Click **"Register app"**
4. Copy the `firebaseConfig` object shown

### Step 3 — Update firebase-config.js
Open `firebase-config.js` and replace the placeholder values:

```js
export const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};
```

### Step 4 — Enable Authentication
1. Firebase Console → **Authentication** → **Sign-in method**
2. Enable **Email/Password**
3. Enable **Google** (set project support email)

### Step 5 — Create Firestore Database
1. Firebase Console → **Firestore Database** → **Create database**
2. Choose **"Start in test mode"** (for development)
3. Pick a region → Done

### Step 6 — Set Firestore Rules
Go to **Firestore → Rules** and paste:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```
Click **Publish**.

---

## 🗄️ Firestore Collections

| Collection     | Fields                                                          |
|----------------|-----------------------------------------------------------------|
| `users`        | uid, name, email, role, createdAt                              |
| `jobs`         | title, company, location, salary, type, experience, description, employerId, createdAt |
| `applications` | userId, userName, userEmail, jobId, jobTitle, company, employerId, status, appliedAt |

---

## 🚀 How to Run

> **No build tools needed!** Just open with a local server.

### Option A — VS Code Live Server
- Install **Live Server** extension
- Right-click `index.html` → **Open with Live Server**

### Option B — Python HTTP Server
```bash
cd job-portal
python -m http.server 5500
# Open http://localhost:5500
```

### Option C — Node.js serve
```bash
npx serve .
```

> ⚠️ **Must use a server** (not file://) because of ES module imports

---

## ✨ Features Implemented

- ✅ Email/Password Authentication
- ✅ Google Sign-In (popup)
- ✅ Role selection (Employer / Job Seeker)
- ✅ Role-based dashboard redirection
- ✅ Firestore user profiles
- ✅ Employer: Post jobs with full details
- ✅ Employer: View & delete own listings
- ✅ Employer: Dashboard stats
- ✅ Job Seeker: Browse all jobs
- ✅ Job Seeker: Search & filter jobs
- ✅ Job Seeker: Apply to jobs (one-time per job)
- ✅ Job Seeker: View application history
- ✅ Job detail modal popup
- ✅ Mobile responsive (sidebar + mobile nav)
- ✅ Toast notifications
- ✅ Loading states & empty states
- ✅ Glassmorphism dark UI (navy/indigo theme)
- ✅ Smooth animations & transitions

---

## 🎨 Design System

- **Fonts**: Syne (headings) + DM Sans (body)
- **Theme**: Dark navy (#08090f) with glassmorphism cards
- **Accent**: Indigo (#6366f1), Teal (#10b981), Amber (#f59e0b)
- **Effects**: Animated gradient orbs, floating job cards, hover transitions

---

*Built for DBMS Mini Project — NexHire © 2025*
