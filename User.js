document.addEventListener('DOMContentLoaded', function () {
  const signupForm = document.getElementById('signup-form');
  const messageDiv = document.getElementById('message');

  signupForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      debugger

      // Create an object with the user's credentials
      const userData = {
          email: email,
          password: password
      };

      // Make a POST request to your server for authentication
      fetch('https://furry-ticket-production.up.railway.app/users/newUser', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
      })
      .then(response => response.json())
      .then(data => {
          if (data.success) {
              // Authentication successful
              messageDiv.innerHTML = 'Sign in successful! Redirecting...';
              window.location.href = '/dashboard'; // Redirect to dashboard or another page
          } else {
              // Authentication failed
              messageDiv.innerHTML = 'Sign in failed. Please check your credentials.';
          }
      })
      .catch(error => {
          console.error('Error:', error);
          messageDiv.innerHTML = 'An error occurred while signing in.';
      });
  });
});
