// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

//prod
export const firebaseConfig = {
  apiKey: "AIzaSyAk0OUc0E1B-K6XrFucvuuXP4pYhrBmrxE",
  authDomain: "sixt-plus.firebaseapp.com",
  projectId: "sixt-plus",
  storageBucket: "sixt-plus.appspot.com",
  messagingSenderId: "514082256978",
  appId: "1:514082256978:web:4abe5eb90ad341637c478b",
  measurementId: "G-K3ZXBDEJNY",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();

export const storage = getStorage(app);
