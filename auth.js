import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJmdwkZ7vwmHYiygz2GV3kWkOrm7iqXDk",
  authDomain: "bot-buddies-1abaf.firebaseapp.com",
  projectId: "bot-buddies-1abaf",
  storageBucket: "bot-buddies-1abaf.firebasestorage.app",
  messagingSenderId: "812393997373",
  appId: "1:812393997373:web:88c1840d4683b501007654"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// -------------------------
// SIGN UP
// -------------------------
const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      alert("Account created successfully!");

      window.location.href = "index.html";
    } catch (error) {
      alert(error.message);
    }
  });
}

// -------------------------
// LOGIN
// -------------------------
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    try {
      await signInWithEmailAndPassword(auth, email, password);

      alert("Login successful!");

      window.location.href = "index.html";
    } catch (error) {
      alert(error.message);
    }
  });
}

// -------------------------
// AUTH STATE
// -------------------------
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Logged in as:", user.email);
  } else {
    console.log("No user signed in.");
  }
});

// -------------------------
// LOGOUT FUNCTION
// -------------------------
window.logout = async function () {
  try {
    await signOut(auth);
    alert("Logged out!");
    window.location.href = "login.html";
  } catch (error) {
    alert(error.message);
  }
};
