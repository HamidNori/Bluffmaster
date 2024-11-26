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



  
      fetch(
        "https://script.google.com/macros/s/AKfycbzeOmcqPUQQ7bNomPQG_ORk13ct3OZMA5Nt2rgx8Ze-JKmMbWK3GATVCpdCgX2LEesS/exec",
        {
          method: "POST",
          mode: "no-cors", // Bypass CORS restrictions
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      )
        .then(() => {
          // Display success message
          messageElement.textContent = "Data submitted successfully!";
          messageElement.style.backgroundColor = "green";
          messageElement.style.color = "white";
          submitButton.disabled = false;
          this.reset();
  
          // Hide the message after a short delay
          setTimeout(() => {
            messageElement.textContent = "";
            messageElement.style.display = "none";
          }, 3000);
        })
        .catch((error) => {
          console.error(error);
          messageElement.textContent =
            "An error occurred while submitting the form.";
          messageElement.style.backgroundColor = "red";
          messageElement.style.color = "white";
          messageElement.style.display = "block";
        });
;

  