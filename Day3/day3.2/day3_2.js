document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); 
  
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const nameError = document.getElementById('nameError');

      nameError.textContent = '';
      emailError.textContent = '';
  
      if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required';
        nameInput.focus();
        return false;
      }
      if (!emailRegex.test(emailInput.value)) {
        emailInput.focus();
        return false;
      }

      alert('Form submitted successfully!');
      <div class="error" id="emailError"></div>
    });
  });
  