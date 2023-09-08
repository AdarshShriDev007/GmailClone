import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0eAO-jSySVPGPUOjldKKB5-d-iw81MVE",
  authDomain: "clone-f2171.firebaseapp.com",
  projectId: "clone-f2171",
  storageBucket: "clone-f2171.appspot.com",
  messagingSenderId: "596514836684",
  appId: "1:596514836684:web:7b350a4bfaeaca51643269"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);