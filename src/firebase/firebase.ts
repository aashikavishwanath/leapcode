import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5sqaA-gwJgUrGe_FfRmxA0ta30-HePBo",
  authDomain: "leapcode-11b11.firebaseapp.com",
  projectId: "leapcode-11b11",
  storageBucket: "leapcode-11b11.appspot.com",
  messagingSenderId: "763629655155",
  appId: "1:763629655155:web:4d9ca2a449cd7bb5a9c606"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };