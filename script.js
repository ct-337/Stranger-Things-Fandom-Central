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
