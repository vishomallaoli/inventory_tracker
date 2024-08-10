// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdW2VXXPjSCm6WANmYJqcTow9sCZoD1rg",
  authDomain: "inventory-management-c37e7.firebaseapp.com",
  projectId: "inventory-management-c37e7",
  storageBucket: "inventory-management-c37e7.appspot.com",
  messagingSenderId: "299267673555",
  appId: "1:299267673555:web:57e8a759591128edce3326",
  measurementId: "G-TYBSCZ0NFH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore };