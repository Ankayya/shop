document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('error-message');
    errorDiv.textContent = '';

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        if (data.success) {
            window.location.href = '/dashboard'; // Redirect on success
        } else {
            errorDiv.textContent = data.message || 'Login failed.';
        }
    } catch (err) {
        errorDiv.textContent = 'An error occurred. Please try again.';
    }
}); 