// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCGsr4mEqwNpXF9R8OBXCJyi86Z_qyphQ",
  authDomain: "reactnativefirst-613dd.firebaseapp.com",
  projectId: "reactnativefirst-613dd",
  storageBucket: "reactnativefirst-613dd.appspot.com",
  messagingSenderId: "88393857894",
  appId: "1:88393857894:web:2645b8b0f43ba8780626a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);