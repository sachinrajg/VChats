
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBsqiH_mmu1v5eEUqOawV53S8iw_3ZuqwE",
  authDomain: "chats-916e1.firebaseapp.com",
  projectId: "chats-916e1",
  storageBucket: "chats-916e1.appspot.com",
  messagingSenderId: "184898174623",
  appId: "1:184898174623:web:f15c3c836262e40475acaa",
  measurementId: "G-Q4JLH032XG"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

//const analytics = getAnalytics(app);