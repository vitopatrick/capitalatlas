import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-2-GLSjdql6d1eIWk4M4WpAAlh_vdYq0",
  authDomain: "capitalatlas-60248.firebaseapp.com",
  projectId: "capitalatlas-60248",
  storageBucket: "capitalatlas-60248.firebasestorage.app",
  messagingSenderId: "5986442766",
  appId: "1:5986442766:web:e57f5aff090a8f2728e65f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);
