import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAq3BJgYMpAWxZZVMkOv33cNmwr8Hg5rzs",
  authDomain: "teste-jogo-51dd9.firebaseapp.com",
  projectId: "teste-jogo-51dd9",
  storageBucket: "teste-jogo-51dd9.appspot.com",
  messagingSenderId: "861407053377",
  appId: "1:861407053377:web:a0b5acd4e23cf08555e8c0"
  };
  
  // Initialize Firebase
  
  const firebaseApp=initializeApp(firebaseConfig)
  const db=getFirestore(firebaseApp)

  export {db}