document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var passwordField = document.getElementById('password');
    var repeatPasswordField = document.getElementById('repeatPassword');
    var repeatPasswordFeedback = document.getElementById('repeatPasswordFeedback');
  
    if (passwordField.value !== repeatPasswordField.value) {
      repeatPasswordField.classList.add('is-invalid');
      repeatPasswordFeedback.textContent = 'Passwords do not match.';
      return;
    } else {
      repeatPasswordField.classList.remove('is-invalid');
      repeatPasswordFeedback.textContent = 'Please repeat the password.';
    }
  
    var formControls = this.querySelectorAll('.form-control, .form-check-input');
  
    var isValid = true;
    formControls.forEach(function(control) {
      if (!control.checkValidity()) {
        control.classList.add('is-invalid');
        isValid = false;
      } else {
        control.classList.remove('is-invalid');
      }
    });
  
    if (isValid) {
      this.submit();
    }
  });