const form = document.getElementById('contactForm');

function changeText() {
  document.getElementById("submit").textContent = "You clicked the button!";
}

    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(
        `Thank you, ${firstName} ${lastName}!\nWe have received your message:\n"${message}"\nWe'll get back to you at ${email}.`
    );

  