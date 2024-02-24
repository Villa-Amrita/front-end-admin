import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtDSlER1C2OdhDEAycU_Sj5gvk2FYasIY",
  authDomain: "villa-amrita.firebaseapp.com",
  projectId: "villa-amrita",
  storageBucket: "villa-amrita.appspot.com",
  messagingSenderId: "44441625226",
  appId: "1:44441625226:web:573f0131fa4a7acc0cc373",
  measurementId: "G-NLJE7EQTNT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
