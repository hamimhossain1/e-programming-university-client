// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYmgk7fH14rIBxAvULFScvjvsXXlbT4-0",
  authDomain: "e-programming-university.firebaseapp.com",
  projectId: "e-programming-university",
  storageBucket: "e-programming-university.appspot.com",
  messagingSenderId: "358050461057",
  appId: "1:358050461057:web:f2bfce461ebaf8f85ae480"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;