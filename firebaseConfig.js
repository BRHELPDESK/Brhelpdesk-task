// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRkHfkz-kGRN6OgWmq2Hi9lqYENP6GJbg",
  authDomain: "brhelpdesk-6a014.firebaseapp.com",
  databaseURL: "https://brhelpdesk-6a014-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "brhelpdesk-6a014",
  storageBucket: "brhelpdesk-6a014.appspot.com",
  messagingSenderId: "559099521764",
  appId: "1:559099521764:web:34871192eb8085f89f1af1",
  measurementId: "G-NTBKQW42TY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);