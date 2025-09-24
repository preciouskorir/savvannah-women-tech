// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {

  // ====== Donation Frequency Buttons ======
  const donationButtons = document.querySelectorAll(".donation-btn");
  donationButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      donationButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  // ====== Donation Amount Buttons ======
  const amountButtons = document.querySelectorAll(".amount-btn");
  amountButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      amountButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const impactText = document.querySelector(".impact-text");
      const amount = parseInt(btn.textContent.replace("£",""));
      if (!isNaN(amount)) {
        impactText.innerHTML = `
          Because of your <span class="highlight">£${amount} donation</span>, 
          we can deploy <span class="highlight">${Math.floor(amount/5)} more laptops</span> 
          to enable ${amount * 5} more students every year.
        `;
      }
    });
  });

  // ====== Smooth Scroll for Navigation ======
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      const targetId = link.getAttribute("href");
      if (targetId.startsWith("#")) {
        e.preventDefault();
        document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // ====== Optional: Simulate Form Submission (Request/Offer Forms) ======
  const forms = document.querySelectorAll("form");
  forms.forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("Thank you for submitting your request/offer! We will get back to you soon.");
      form.reset();
    });
  });

});
