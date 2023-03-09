import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, inMemoryPersistence } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
//TODO: add firebaes config
const firebaseConfig = {
  apiKey: "AIzaSyDZ2GxzpdLyqICLXkyKm8lJJsIyq1pzO2w",
  authDomain: "kitwork-b6c50.firebaseapp.com",
  projectId: "kitwork-b6c50",
  storageBucket: "kitwork-b6c50.appspot.com",
  messagingSenderId: "492731294606",
  appId: "1:492731294606:web:ef470715a0b77abb1afadf"
};

const app = initializeApp(firebaseConfig, "CLIENT");
export const auth = getAuth(app)
export const db = getFirestore(app); 
setPersistence(auth, inMemoryPersistence)