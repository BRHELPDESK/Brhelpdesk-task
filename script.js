function register() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => alert("Registered Successfully"))
    .catch(error => alert(error.message));
}
function login() {
  var email = document.getElementById("loginEmail").value;
  var password = document.getElementById("loginPassword").value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => alert("Login Success"))
    .catch(error => alert(error.message));
}