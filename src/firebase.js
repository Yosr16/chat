import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvTZ0f9ifJEGaUcPPozAU0BSNgRz4enq0",
  authDomain: "chat2-22170.firebaseapp.com",
  projectId: "chat2-22170",
  storageBucket: "chat2-22170.appspot.com",
  messagingSenderId: "903150495342",
  appId: "1:903150495342:web:5fdfb5a14743256407687f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db=getFirestore();