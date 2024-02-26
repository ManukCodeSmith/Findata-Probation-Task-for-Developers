
function saveFormData() {
    const formData = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      email: document.getElementById('email').value
    };
    localStorage.setItem('formData', JSON.stringify(formData));
  }
  function loadFormData() {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      const formData = JSON.parse(savedData);
      document.getElementById('firstName').value = formData.firstName;
      document.getElementById('lastName').value = formData.lastName;
      document.getElementById('email').value = formData.email;
    }
  }
  function throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', throttle(saveFormData, 30));
  });

  document.addEventListener('DOMContentLoaded', loadFormData);

  console.log(localStorage.getItem('formData'));
  