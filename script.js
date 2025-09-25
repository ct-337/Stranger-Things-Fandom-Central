console.log("Welcome to Stranger Things Fandom Central!");

// Login form handler
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      document.getElementById("authMessage").textContent = "Logged in!";
      window.location.href = "profile.html";
    })
    .catch((error) => {
      document.getElementById("authMessage").textContent = error.message;
    });
});

// Registration form handler
document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("newEmail").value.trim();
  const password = document.getElementById("newPassword").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      document.getElementById("authMessage").textContent = "Account created! You can now log in.";
      document.getElementById("registerForm").reset();
    })
    .catch((error) => {
      document.getElementById("authMessage").textContent = error.message;
    });
});

function logout() {
  firebase.auth().signOut()
    .then(() => {
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert("Logout failed: " + error.message);
    });
}

function changeEmail() {
  const user = firebase.auth().currentUser;
  const newEmail = document.getElementById("newEmail").value.trim();

  user.updateEmail(newEmail)
    .then(() => {
      alert("Email updated!");
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
}
function resetPassword() {
  const user = firebase.auth().currentUser;
  firebase.auth().sendPasswordResetEmail(user.email)
    .then(() => {
      alert("Reset email sent!");
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
}
function deleteAccount() {
  const user = firebase.auth().currentUser;
  user.delete()
    .then(() => {
      alert("Account deleted.");
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
}
