/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCUbD6Unjv5HzS-Y9EE4ttK5vLjUPmyjqc",
  authDomain: "villa-amrita-admin.firebaseapp.com",
  projectId: "villa-amrita-admin",
  storageBucket: "villa-amrita-admin.appspot.com",
  messagingSenderId: "719593643122",
  appId: "1:719593643122:web:5456cd563bfadbccff36eb",
  measurementId: "G-MBNQPLS125",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
