// JavaScript to handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form default submission
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  alert(`Thank you, ${name}! We will contact you at ${email}.`);
});
