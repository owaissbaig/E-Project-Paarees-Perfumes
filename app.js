
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


window.addEventListener('load', function () {
    document.body.classList.add('loaded');
});
  // Function to validate email using a regex
  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  // Add event listener to the form submit
  document.querySelector("form").addEventListener("submit", function(event) {
    const emailInput = document.getElementById("email");
    const emailValue = emailInput.value;
    
    if (!validateEmail(emailValue)) {
      alert("Please enter a valid email address.");
      event.preventDefault(); // Prevent form submission if email is invalid
    }
  });

