import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAVIQkE-CQ40hye0Zmomt2VriVjAHRsfBo",
  authDomain: "clone-cc937.firebaseapp.com",
  projectId: "clone-cc937",
  storageBucket: "clone-cc937.appspot.com",
  messagingSenderId: "938060480870",
  appId: "1:938060480870:web:4f242625081bd1c74608a7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);