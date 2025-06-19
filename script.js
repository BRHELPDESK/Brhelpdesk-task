function register() {
  const name = document.getElementById('name').value;
  const mobile = document.getElementById('mobile').value;
  const password = document.getElementById('password').value;

  if (!name || !mobile || !password) {
    alert('All fields required!');
    return;
  }

  const user = { name, mobile, password };
  localStorage.setItem(mobile, JSON.stringify(user));
  alert('Registered successfully!');
}

function login() {
  const loginName = document.getElementById('loginName').value;
  const loginPassword = document.getElementById('loginPassword').value;

  const storedUser = localStorage.getItem(loginName);
  if (!storedUser) {
    alert('User not found!');
    return;
  }

  const user = JSON.parse(storedUser);
  if (user.password === loginPassword) {
    alert('Login successful!');
    window.location.href = 'task.html';
  } else {
    alert('Wrong password!');
  }
}
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

function registerUser() {
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const referral = document.getElementById("referral").value.trim();

  if (name && phone) {
    const userRef = ref(window.db, 'users/');
    push(userRef, {
      name: name,
      phone: phone,
      referral: referral,
      joinedAt: new Date().toISOString()
    });

    document.getElementById("status").innerText = "✅ Successfully Registered!";
  } else {
    document.getElementById("status").innerText = "❌ Please fill all fields.";
  }
}
window.registerUser = registerUser;
