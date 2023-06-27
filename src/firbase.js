// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcMmEd3HCDngXYEdV-Ly79CQqIK0bRpVc",
  authDomain: "shop-auth-48237.firebaseapp.com",
  projectId: "shop-auth-48237",
  storageBucket: "shop-auth-48237.appspot.com",
  messagingSenderId: "943894452635",
  appId: "1:943894452635:web:3c849fcf34d5f2ed1ee93e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)
export default app