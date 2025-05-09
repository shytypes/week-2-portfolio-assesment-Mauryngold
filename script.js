
const form = document.getElementById('contact-form');
const responseBox = document.getElementById('response');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const firstname = document.getElementById('firstname').value;
  const lastname = document.getElementById('lastname').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  responseBox.innerHTML = `
    <h3>Message Received:</h3>
    <p><strong>Name:</strong> ${firstname} ${lastname}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;
  responseBox.classList.remove('hidden');
  
  form.reset();
});