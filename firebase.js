import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDRkHfkz-kGRN6OgWmq2Hi9lqYENP6GJbg",
  authDomain: "brhelpdesk-6a014.firebaseapp.com",
  databaseURL: "https://brhelpdesk-6a014-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "brhelpdesk-6a014",
  storageBucket: "brhelpdesk-6a014.firebasestorage.app",
  messagingSenderId: "559099521764",
  appId: "1:559099521764:web:34871192eb8085f89f1af1",
  measurementId: "G-NTBKQW42TY"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
