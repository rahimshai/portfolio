// src/firebaseConfig.ts

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage"; 

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARzL2K93vCPqGLOj-sg9CDsLmosIKpA8E",
  authDomain: "portfolio-54b95.firebaseapp.com",
  projectId: "portfolio-54b95",
  storageBucket: "portfolio-54b95.appspot.com",
  messagingSenderId: "104887106569",
  appId: "1:104887106569:web:a42441a4a46fec1f058cd8",
  measurementId: "G-M998KS6Y4H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { db, auth, provider , storage};
