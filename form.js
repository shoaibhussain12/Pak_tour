import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyCGpJKq7F8S7NzLU9FF6r-3R9GI4dRR8-U",
  authDomain: "authentication-c82be.firebaseapp.com",
  projectId: "authentication-c82be",
  storageBucket: "authentication-c82be.firebasestorage.app",
  messagingSenderId: "352860541682",
  appId: "1:352860541682:web:0618ae9a46b1bd77e6b66b",
  measurementId: "G-Q8NSZ024HG",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log("Logged-in user email:", user.email);

      localStorage.setItem("userEmail", user.email);

      Swal.fire({
        title: "Login Successful",
        icon: "success",
        text: "Welcome! You are logged in.",
        confirmButtonText: "Continue",
      }).then(() => {
        window.location.href = "index.html";
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      Swal.fire({
        title: "Error!",
        text: errorMessage,
        icon: "error",
        confirmButtonText: "OK",
      });
    });
});
