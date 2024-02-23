document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('[data-color]');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const color = this.getAttribute('data-color');
      document.body.style.backgroundColor = color;
    });
  });
});
