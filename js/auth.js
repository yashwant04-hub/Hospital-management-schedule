import { auth } from './firebaseConfig.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

// ---------------------------
// ✅ User Registration
// ---------------------------
const registerForm = document.getElementById('registerForm');
if (registerForm) {
  registerForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, pass)
      .then(() => {
        alert("User registered successfully");
        window.location.href = 'user-dashboard.html'; // redirect after register
      })
      .catch(err => alert("Registration failed: " + err.message));
  });
}

// ---------------------------
// ✅ User Login
// ---------------------------
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, pass)
      .then(() => {
        alert("User login successful");
        window.location.href = 'user-dashboard.html'; // redirect after login
      })
      .catch(err => alert("Login failed: " + err.message));
  });
}

// ---------------------------
// ✅ Admin Login
// ---------------------------
const adminForm = document.getElementById('adminLoginForm');
if (adminForm) {
  adminForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('adminEmail').value;
    const pass = document.getElementById('adminPassword').value;

    // Optional: secure with allowed admin emails
    const allowedAdmins = ['admin@example.com', 'otadmin@hospital.com'];

    if (!allowedAdmins.includes(email)) {
      alert("You are not authorized as an admin.");
      return;
    }

    signInWithEmailAndPassword(auth, email, pass)
      .then(() => {
        alert("Admin login successful");
        window.location.href = 'admin.html'; // redirect to admin panel
      })
      .catch(err => alert("Admin login failed: " + err.message));
  });
}

