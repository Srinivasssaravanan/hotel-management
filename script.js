document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const buttonClicked = event.submitter.textContent; // Identify which button was clicked

    if (buttonClicked === 'Login') {
        // Retrieve stored user data
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        // Validate against stored user data
        if (username === storedUsername && password === storedPassword) {
            window.location.href = 'menu.html';
        } else {
            alert('Invalid username or password');
        }
    }
     else if (buttonClicked === 'Register') {
        // Save new user data
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        window.location.href = 'menu.html';
        alert('Registration successful! Redirecting to main page...');
    }
});

   

