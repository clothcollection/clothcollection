document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const goToSignUp = document.getElementById('goToSignUp');
    const goToLogin = document.getElementById('goToLogin');

    // Toggle between login and signup forms
    goToSignUp.addEventListener('click', function() {
        document.querySelector('.login-container').style.display = 'none';
        document.querySelector('.signup-container').style.display = 'block';
    });

    goToLogin.addEventListener('click', function() {
        document.querySelector('.signup-container').style.display = 'none';
        document.querySelector('.login-container').style.display = 'block';
    });

    // Sign Up form submission
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('signupUsername').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;

        // Send a request to the backend to store the user information
        fetch('/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Sign Up Successful!');
                signupForm.reset();
            } else {
                alert('Sign Up Failed: ' + data.message);
            }
        });
    });

    // Login form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        // Send a request to the backend to verify the user information
        fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Login Successful!');
                loginForm.reset();
            } else {
                alert('Login Failed: ' + data.message);
            }
        });
    });
});
