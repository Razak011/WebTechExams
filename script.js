// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCKF0zZaovZxNxiSlRLXRDJX5p1z8NBSK8",
    authDomain: "webtech-ffc13.firebaseapp.com",
    projectId: "webtech-ffc13",
    storageBucket: "webtech-ffc13.appspot.com",
    messagingSenderId: "246366752072",
    appId: "1:246366752072:web:b6c3af8030192f9cb3777d",
    measurementId: "G-DCTBJFS4LJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Function to handle user registration
document.getElementById('register-form')?.addEventListener('submit', async function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const preferences = document.getElementById('preferences').value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const userId = userCredential.user.uid;

        // Save user data to Firestore
        await setDoc(doc(db, "users", userId), {
            name,
            email,
            preferences,
            role: email === "admin@example.com" ? "admin" : "user" // Default admin email
        });

        alert("Registration successful! You can now log in.");
        window.location.href = "login.html";
    } catch (error) {
        console.error("Error during registration:", error);
        alert(`Registration failed: ${error.message}`);
    }
});

// Function to handle user login
document.getElementById('login-form')?.addEventListener('submit', async function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const userId = userCredential.user.uid;

        // Retrieve user data from Firestore
        const userDoc = await getDoc(doc(db, "users", userId));
        const userData = userDoc.data();

        if (userData) {
            alert("Login successful!");
            localStorage.setItem("loggedInUser", JSON.stringify(userData)); // Store user info in localStorage
            window.location.href = "index.html"; // Redirect to homepage
        } else {
            throw new Error("User data not found.");
        }
    } catch (error) {
        console.error("Error during login:", error);
        alert(`Login failed: ${error.message}`);
    }
});

// Function to display the admin panel on the homepage if an admin is logged in
window.onload = async function () {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (loggedInUser) {
        const welcomeMessage = document.getElementById("welcome-message");
        welcomeMessage.innerText = `Welcome, ${loggedInUser.name}!`;

        if (loggedInUser.role === "admin") {
            const adminPanel = document.getElementById("admin-panel");
            adminPanel.style.display = "block";
        }
    }
};

