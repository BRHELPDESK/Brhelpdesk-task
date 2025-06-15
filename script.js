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