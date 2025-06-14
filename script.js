
const usersKey = "brhelpdesk_users";
const currentUserKey = "brhelpdesk_current_user";

// Register
if (document.getElementById("registerForm")) {
  document.getElementById("registerForm").onsubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const referral = document.getElementById("referral").value;

    let users = JSON.parse(localStorage.getItem(usersKey)) || [];
    users.push({ name, phone, password, referral });
    localStorage.setItem(usersKey, JSON.stringify(users));
    alert("Registered! You can login now.");
    window.location.href = "login.html";
  };
}

// Login
if (document.getElementById("loginForm")) {
  document.getElementById("loginForm").onsubmit = (e) => {
    e.preventDefault();
    const phone = document.getElementById("loginPhone").value;
    const password = document.getElementById("loginPassword").value;

    let users = JSON.parse(localStorage.getItem(usersKey)) || [];
    let user = users.find(u => u.phone === phone && u.password === password);
    if (user) {
      localStorage.setItem(currentUserKey, JSON.stringify(user));
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid login!");
    }
  };
}

// Dashboard
if (window.location.pathname.includes("dashboard.html")) {
  const user = JSON.parse(localStorage.getItem(currentUserKey));
  if (user) {
    document.getElementById("userInfo").innerHTML = `
      <p>Name: ${user.name}</p>
      <p>Phone: ${user.phone}</p>
      <p>Your Referral Link: <b>${window.location.origin + "/register.html?ref=" + user.phone}</b></p>
    `;
  }
}

// Admin Panel
if (window.location.pathname.includes("admin.html")) {
  let users = JSON.parse(localStorage.getItem(usersKey)) || [];
  let output = "<h3>All Users</h3>";
  users.forEach(u => {
    output += `<p>${u.name} (${u.phone}) - Referred by: ${u.referral || "None"}</p>`;
  });
  document.getElementById("allUsers").innerHTML = output;
}
