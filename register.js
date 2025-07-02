// Helper functions
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function checkPasswordStrength(password) {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
}

const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const emailInput = document.getElementById('email');
const passwordStrengthDiv = document.getElementById('passwordStrength');
const togglePassword = document.getElementById('togglePassword');

// Password strength indicator
passwordInput.addEventListener('input', function() {
    const strength = checkPasswordStrength(passwordInput.value);
    let message = '';
    let color = '';
    switch (strength) {
        case 0:
        case 1:
            message = 'Weak'; color = '#d8000c'; break;
        case 2:
        case 3:
            message = 'Medium'; color = '#ffb400'; break;
        case 4:
        case 5:
            message = 'Strong'; color = '#4BB543'; break;
    }
    passwordStrengthDiv.textContent = message;
    passwordStrengthDiv.style.color = color;
});

// Show/hide password toggle
if (togglePassword) {
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.type === 'password' ? 'text' : 'password';
        passwordInput.type = type;
        togglePassword.textContent = type === 'password' ? 'Show' : 'Hide';
    });
}

document.getElementById('registerForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    const errorDiv = document.getElementById('register-error-message');
    errorDiv.textContent = '';
    errorDiv.style.color = '#d8000c';

    if (!validateEmail(email)) {
        errorDiv.textContent = 'Please enter a valid email address.';
        return;
    }
    if (password !== confirmPassword) {
        errorDiv.textContent = 'Passwords do not match.';
        return;
    }
    if (checkPasswordStrength(password) < 3) {
        errorDiv.textContent = 'Password is too weak.';
        return;
    }

    try {
        const response = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        });
        const data = await response.json();
        if (data.success) {
            errorDiv.style.color = 'green';
            errorDiv.textContent = 'Account created! You can now log in.';
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);
        } else {
            errorDiv.textContent = data.message || 'Registration failed.';
        }
    } catch (err) {
        errorDiv.textContent = 'An error occurred. Please try again.';
    }
}); 