
const db = firebase.database();

document.getElementById("joinForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const referral = document.getElementById("referral").value.trim();
  if (!name || !phone) return;

  const userData = {
    name: name,
    phone: phone,
    referral: referral || "none",
    joinedAt: new Date().toISOString()
  };

  db.ref("users").push(userData, function(error) {
    if (error) {
      document.getElementById("message").innerText = "Something went wrong!";
    } else {
      document.getElementById("message").innerText = "Successfully Joined!";
      document.getElementById("joinForm").reset();
    }
  });
});
