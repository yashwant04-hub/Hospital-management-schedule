// js/firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyACXQNKaDGnjQ5d-I5fsvQA-BZbLhhF8XI",
  authDomain: "hospital-management-0403.firebaseapp.com",
  projectId: "hospital-management-0403",
  storageBucket: "hospital-management-0403.firebasestorage.app",
  messagingSenderId: "895315944410",
  appId: "1:895315944410:web:7fecdcebef0949819156e3"

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };