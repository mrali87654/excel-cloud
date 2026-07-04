function login() {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {

            message.style.color = "green";
            message.innerText = "Login successful...";

            // redirect to spreadsheet
            window.location.href = "index.html";

        })
        .catch((error) => {

            message.style.color = "red";
            message.innerText = error.message;

        });
}


// logout function (used later in index.html)
function logout() {

    auth.signOut().then(() => {
        window.location.href = "login.html";
    });

}


// protect pages
auth.onAuthStateChanged(user => {

    if (!user && window.location.pathname.includes("index.html")) {
        window.location.href = "login.html";
    }

});
