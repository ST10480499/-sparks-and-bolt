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

    // ==========================================
  // ENQUIRY FORM VALIDATION & DYNAMIC RESPONSE
  // ==========================================
  const enquiryForm = document.getElementById("enquiryForm");
  
  if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (e) {
      e.preventDefault();
      
      let isValid = true;
      
      const name = document.getElementById("enqName");
      const email = document.getElementById("enqEmail");
      const service = document.getElementById("enqService");
      const property = document.getElementById("enqProperty");
      const message = document.getElementById("enqMessage");
      
      const nameErr = document.getElementById("enqNameError");
      const emailErr = document.getElementById("enqEmailError");
      const serviceErr = document.getElementById("enqServiceError");
      const propErr = document.getElementById("enqPropertyError");
      const msgErr = document.getElementById("enqMessageError");

      // Reset errors
      [nameErr, emailErr, serviceErr, propErr, msgErr].forEach(el => el.style.display = "none");
      [name, email, service, property, message].forEach(el => el.style.borderColor = "#CCCCCC");

      // Validate Name
      if (name.value.trim() === "") {
        nameErr.style.display = "block";
        name.style.borderColor = "#d32f2f";
        isValid = false;
      }

      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value.trim())) {
        emailErr.style.display = "block";
        email.style.borderColor = "#d32f2f";
        isValid = false;
      }

      // Validate Service selection
      if (service.value === "") {
        serviceErr.style.display = "block";
        service.style.borderColor = "#d32f2f";
        isValid = false;
      }

      // Validate Property selection
      if (property.value === "") {
        propErr.style.display = "block";
        property.style.borderColor = "#d32f2f";
        isValid = false;
      }

      // Validate Message
      if (message.value.trim().length < 10) {
        msgErr.style.display = "block";
        message.style.borderColor = "#d32f2f";
        isValid = false;
      }

      // If all is valid, simulate AJAX and show dynamic response
      if (isValid) {
        const submitBtn = enquiryForm.querySelector("button[type='submit']");
        submitBtn.textContent = "Processing...";
        submitBtn.disabled = true;

        setTimeout(() => {
          // Dynamic response based on the selected service
          let responseText = "";
          if (service.value === "coc") {
            responseText = "Based on your request for a COC, we estimate a turnaround time of 2-3 business days. A consultant will contact you with a formal quote.";
          } else if (service.value === "repair") {
            responseText = "For emergency repairs, we aim to respond within 2 hours. A team member will call you shortly to confirm details.";
          } else {
            responseText = "Thank you for your enquiry. A representative will contact you within 24 hours with availability and a cost estimate.";
          }

          document.getElementById("dynamicResponseText").textContent = responseText;
          document.getElementById("enqSuccessModal").style.display = "block";
          enquiryForm.reset();
          submitBtn.textContent = "Submit Enquiry";
          submitBtn.disabled = false;
        }, 1500);
      }
    });
  }

  // Close Enquiry Modal
  const closeEnqModalBtn = document.getElementById("closeEnqModalBtn");
  if (closeEnqModalBtn) {
    closeEnqModalBtn.addEventListener("click", function() {
      document.getElementById("enqSuccessModal").style.display = "none";
    });
  }
});