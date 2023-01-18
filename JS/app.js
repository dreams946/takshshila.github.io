 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
 import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyCLz5-GUUnPLFJKt4Y3IABAqwG2ylwO-jI",
   authDomain: "takshshila-325dd.firebaseapp.com",
   projectId: "takshshila-325dd",
   storageBucket: "takshshila-325dd.appspot.com",
   messagingSenderId: "272592573304",
   appId: "1:272592573304:web:b52b09f047e9bcea9e2e8d",
   measurementId: "G-Q2LZM5KMKW"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth();

 let register_btn = document.getElementById('register_btn');
 
 register_btn.addEventListener("click", function(){
    let email = document.getElementById('floatInput');
    let password = document.getElementById('floatPassword');
    
    
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
      console.log("user==>", user)
    // ...
  })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error=>", errorMessage)

    // ..
  });

 })

 
 let login_btn = document.getElementById('login_btn');

 login_btn.addEventListener("click", function(){
    let login_email = document.getElementById('floatingInput');
    let login_password = document.getElementById('floatingPassword');
   
    
    signInWithEmailAndPassword(auth, login_email.value, login_password.value )
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("user=>", user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error=>", errorMessage)
    });

 })

 
 
