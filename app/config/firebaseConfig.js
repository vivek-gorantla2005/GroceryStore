// firebaseConfig.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSyT5AMBqk5LBY2o2LSZQed5Nx-wcviKY",
  authDomain: "grocerystore-55642.firebaseapp.com",
  projectId: "grocerystore-55642",
  storageBucket: "grocerystore-55642.appspot.com",
  messagingSenderId: "257059953400",
  appId: "1:257059953400:web:5e1849c16a5f415278790d",
  measurementId: "G-BE92JH2TYL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the storage service
const storage = getStorage(app);

export { storage };
