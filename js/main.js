// index
document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if (userEmail == 'ashikurrb85@gmail.com' && userPassword == '12345') {
        window.location.href = 'banking.html'
    } else {
        alert('Invalid User');
    }
})




