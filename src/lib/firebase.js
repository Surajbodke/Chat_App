import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-b8a99.firebaseapp.com",
  projectId: "reactchat-b8a99",
  storageBucket: "reactchat-b8a99.appspot.com",
  messagingSenderId: "437754098213",
  appId: "1:437754098213:web:07f32d572efce0653085cc",
  measurementId: "G-2MDL15V5KD",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
