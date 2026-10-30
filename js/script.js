document.addEventListener("DOMContentLoaded", function () {
  
  // ==========================================
  // CONTACT FORM VALIDATION & AJAX SIMULATION
  // ==========================================
  const contactForm = document.getElementById("contactForm");
  
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Stop the page from reloading
      
      let isValid = true;
      
      // Get input elements
      const name = document.getElementById("contactName");
      const phone = document.getElementById("contactPhone");
      const email = document.getElementById("contactEmail");
      const message = document.getElementById("contactMessage");
      
      // Error message elements
      const nameErr = document.getElementById("nameError");
      const phoneErr = document.getElementById("phoneError");
      const emailErr = document.getElementById("emailError");
      const msgErr = document.getElementById("msgError");

      // Reset errors
      nameErr.style.display = "none";
      phoneErr.style.display = "none";
      emailErr.style.display = "none";
      msgErr.style.display = "none";
      name.style.borderColor = "#CCCCCC";
      phone.style.borderColor = "#CCCCCC";
      email.style.borderColor = "#CCCCCC";
      message.style.borderColor = "#CCCCCC";

      // Validate Name
      if (name.value.trim() === "") {
        nameErr.style.display = "block";
        name.style.borderColor = "#d32f2f";
        isValid = false;
      }

      // Validate Phone (10 digits starting with 0)
      const phoneRegex = /^0\d{9}$/;
      if (!phoneRegex.test(phone.value.trim())) {
        phoneErr.style.display = "block";
        phone.style.borderColor = "#d32f2f";
        isValid = false;
      }

      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value.trim())) {
        emailErr.style.display = "block";
        email.style.borderColor = "#d32f2f";
        isValid = false;
      }

      // Validate Message
      if (message.value.trim().length < 10) {
        msgErr.style.display = "block";
        message.style.borderColor = "#d32f2f";
        isValid = false;
      }

      // If everything is valid, simulate AJAX submission
      if (isValid) {
        const submitBtn = contactForm.querySelector("button[type='submit']");
        submitBtn.textContent = "Sending...";
        submitBtn.disabled = true;

        // Simulate a 1.5 second network request
        setTimeout(() => {
          document.getElementById("successModal").style.display = "block";
          contactForm.reset();
          submitBtn.textContent = "Send Request";
          submitBtn.disabled = false;
        }, 1500);
      }
    });
  }

  // Close Modal Button
  const closeModalBtn = document.getElementById("closeModalBtn");
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", function() {
      document.getElementById("successModal").style.display = "none";
    });
  }

});