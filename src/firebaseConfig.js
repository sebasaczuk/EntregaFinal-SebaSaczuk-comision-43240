import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Esta línea la necesito para levantar firestore

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD574pUmQ76wU2o-r5JMhgMXhecWkhi3YM",
  authDomain: "pharmastock2023.firebaseapp.com",
  projectId: "pharmastock2023",
  storageBucket: "pharmastock2023.appspot.com",
  messagingSenderId: "62283505944",
  appId: "1:62283505944:web:205649fda1a5ce9187be6d",
};

// Initializa Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // Aca se inicializa db
