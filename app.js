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

  
// Open Modal
const buyButton = document.getElementById('buy-button');
const checkoutModal = document.getElementById('checkout-modal');
const closeModal = document.querySelector('.close');

buyButton.addEventListener('click', () => {
  checkoutModal.style.display = 'block'; // Show modal
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
});

// Close Modal
closeModal.addEventListener('click', () => {
  checkoutModal.style.display = 'none'; // Hide modal
  document.body.style.overflow = 'auto'; // Re-enable background scrolling
});

// Close Modal When Clicking Outside Content
window.addEventListener('click', (event) => {
  if (event.target === checkoutModal) {
    checkoutModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});

// Form Submission
const checkoutForm = document.getElementById('checkout-form');
checkoutForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Collect Form Data
  const formData = new FormData(checkoutForm);
  const data = Object.fromEntries(formData.entries());

  // Simulate Checkout Process
  alert(`Tack för ditt köp, ${data.name}!\nDitt spel skickas till:\n${data.address}\nBetalningsmetod: ${data.payment}`);

  // Close Modal and Reset Form
  checkoutModal.style.display = 'none';
  document.body.style.overflow = 'auto';
  checkoutForm.reset();
});


document.getElementById('preorder-form').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    try {
      const response = await fetch('/api/preorder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });
  
      const result = await response.json();
  
      if (result.success) {
        alert('Tack för din förbeställning! Vi har skickat ett e-postmeddelande.');
      } else {
        alert('Något gick fel. Försök igen senare.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Kunde inte skicka förbeställningen. Försök igen senare.');
    }
  });
  