// Redirect if user is not logged in
auth.onAuthStateChanged(function(user) {
    if (!user) {
        window.location.href = "login.html";
        return;
    }

    // Show user email if the element exists
    const emailSpan = document.getElementById("userEmail");
    if (emailSpan) {
        emailSpan.textContent = user.email;
    }
});

// Logout
function logout() {
    auth.signOut()
        .then(function() {
            window.location.href = "login.html";
        })
        .catch(function(error) {
            alert(error.message);
        });
}

// Login function (used by login.html)
function login() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then(function() {
            window.location.href = "index.html";
        })
        .catch(function(error) {
            document.getElementById("message").innerText = error.message;
        });
}
