// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Sticky Navbar
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  });
  
  // Menu Toggle for Mobile
  const toggleButton = document.querySelector('.menu-toggle');
  toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('open');
  });
  
  // Scroll-to-Top Button
  const scrollToTop = document.querySelector('.scroll-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTop.style.display = 'block';
    } else {
      scrollToTop.style.display = 'none';
    }
  });
  
  scrollToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Scroll Reveal Effect
  const revealElements = document.querySelectorAll('.reveal');
  window.addEventListener('scroll', () => {
    revealElements.forEach(el => {
      const elementPosition = el.getBoundingClientRect().top;
      if (elementPosition < window.innerHeight - 100) {
        el.classList.add('active');
      }
    });
  });


  // preorder events
  const scriptURL =
  'https://script.google.com/macros/s/AKfycbxUqAoFawflc6_YWA-xBfFo9q86u_dckue8ezEfPB_J2OBaUSDSyTibamcLI7BRCIyRRQ/exec';
const form = document.forms['submit-to-google-sheet'];
const messageElement = document.getElementById('message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  messageElement.style.display = 'block';
  messageElement.textContent = 'Skickar...';
  messageElement.className = '';

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      if (response.ok) {
        messageElement.textContent = 'Förbeställning mottagen!';
        messageElement.classList.add('success');
        form.reset();
      } else {
        throw new Error('Ett fel inträffade.');
      }
    })
    .catch((error) => {
      console.error('Error!', error.message);
      messageElement.textContent =
        'Något gick fel. Försök igen senare.';
      messageElement.classList.add('error');
    })
    .finally(() => {
      setTimeout(() => {
        messageElement.style.display = 'none';
        messageElement.className = '';
      }, 3000);
    });
});

//JavaScript for Animation and Enhancements
document.addEventListener("DOMContentLoaded", function() {
  // Scroll Animation for Reveal Elements
  function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(reveal => {
      const windowHeight = window.innerHeight;
      const elementTop = reveal.getBoundingClientRect().top;
      const revealPoint = 100;

      if (elementTop < windowHeight - revealPoint) {
        reveal.classList.add('show');
      } else {
        reveal.classList.remove('show');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Initial check to reveal elements already in view

  // FAQ Toggle Animation
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('active');
      const answer = item.querySelector('.answer');
      if (item.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
        answer.style.maxHeight = null;
      }
    });
  });
});


// Toggle Navbar on mobile
function toggleMenu() {
  const menu = document.querySelector('.navbar ul');
  const logo = document.querySelector('.navbar .logo');
  menu.classList.toggle('active'); // Show/hide menu
  logo.classList.toggle('active'); // Hide logo when menu is active
}
