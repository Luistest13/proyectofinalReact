import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdaT9zWHE53qgj4soQOp397prSVq1dQdA",
  authDomain: "proyectofinalreactsantos.firebaseapp.com",
  projectId: "proyectofinalreactsantos",
  storageBucket: "proyectofinalreactsantos.appspot.com",
  messagingSenderId: "1008030221855",
  appId: "1:1008030221855:web:ed15d100a2c1547cebb72a",
  measurementId: "G-F2T7J3EHR8",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
