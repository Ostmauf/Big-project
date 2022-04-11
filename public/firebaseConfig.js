import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCQnzx15BsQ9ESmO1BY_bk3yOoLoGGNygM",
    authDomain: "big-project-73143.firebaseapp.com",
    databaseURL: "https://big-project-73143-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "big-project-73143",
    storageBucket: "big-project-73143.appspot.com",
    messagingSenderId: "771585036900",
    appId: "1:771585036900:web:2f1f75bcb228cbb5ba4571"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore()

//Html elements
const loginForm = document.getElementById("loginForm");

// lots of code

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, e.target.email.value, e.target.password.value)
    .then((cred) => {
        return cred.user.getIdToken()
    }).then((token) => {
        console.log(token);
    })
    .catch((err) => {
        if (err) throw err
    })
})