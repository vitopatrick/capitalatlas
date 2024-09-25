import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL9tMC2_ZcNofl7VWSUbvjIVY3RfOhdLw",
  authDomain: "wealthwisefx-5a66a.firebaseapp.com",
  projectId: "wealthwisefx-5a66a",
  storageBucket: "wealthwisefx-5a66a.appspot.com",
  messagingSenderId: "301366350687",
  appId: "1:301366350687:web:e0b476fe6448eb6af0dcea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);
