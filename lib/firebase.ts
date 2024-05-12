// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDE6Ylz2qOo1HzuJBgMgSi8iJc40jtbOfk",
  authDomain: "jobinator1000.firebaseapp.com",
  projectId: "jobinator1000",
  storageBucket: "jobinator1000.appspot.com",
  messagingSenderId: "67920924405",
  appId: "1:67920924405:web:54aa6df77da8e2534fbfbc",
  measurementId: "G-9LVK9663FW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);