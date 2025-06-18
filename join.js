
import { db } from "./firebase.js";
import { collection, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const form = document.getElementById("joinForm");
const statusText = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const referral = document.getElementById("referral").value;

  try {
    await addDoc(collection(db, "users"), {
      name,
      phone,
      referral,
      joinedAt: Timestamp.now()
    });
    statusText.innerText = "✅ Successfully joined!";
    form.reset();
  } catch (error) {
    statusText.innerText = "❌ Error: " + error.message;
  }
});
