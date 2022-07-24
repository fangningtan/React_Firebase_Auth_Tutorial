import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPGXOqGIL2tAFpQtlFs-mS7rXW9mdLi-4",
  authDomain: "learnink-test.firebaseapp.com",
  projectId: "learnink-test",
  storageBucket: "learnink-test.appspot.com",
  messagingSenderId: "387311431417",
  appId: "1:387311431417:web:8a9d00300694622c247c28",
  measurementId: "G-7V52YDJY5W"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
