import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD-rwc2S2VHnGwdG9-YKkogj43UDgT-FJg",
  authDomain: "artify-b7813.firebaseapp.com",
  projectId: "artify-b7813",
  storageBucket: "artify-b7813.firebasestorage.app",
  messagingSenderId: "887523706074",
  appId: "1:887523706074:web:c7408478b71a19671911e3",
  measurementId: "G-LKBM1LJYLL"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };