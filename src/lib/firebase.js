import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-chatapp-6f058.firebaseapp.com",
  projectId: "react-chatapp-6f058",
  storageBucket: "react-chatapp-6f058.appspot.com",
  messagingSenderId: "815417695565",
  appId: "1:815417695565:web:08e9fe6cb0d6f66cd72b04",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
