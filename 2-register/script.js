document.getElementById('registerButton').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const name = document.getElementById('name').value;

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost/push&pull/register.php');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            if (response.status === 'success') {
                alert('Registration successful');
            } else {
                alert('Registration failed');
            }
        }
    };
    
    const data = JSON.stringify({ email: email, name: name, password: password });
    xhr.send(data);
});