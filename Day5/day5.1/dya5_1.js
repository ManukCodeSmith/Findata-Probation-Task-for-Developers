 document.addEventListener('DOMContentLoaded', function() {
     const mobileMenu = document.getElementById('mobile-menu');
     const nav = document.getElementById('nav');
  
     mobileMenu.addEventListener('click', function() {
       nav.classList.toggle('active');
     });
  });
  