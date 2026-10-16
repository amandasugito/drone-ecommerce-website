const contactForm = document.getElementById("contactForm");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const message = document.getElementById("message");
const tos = document.getElementById("tos");

contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    // Reset semua error
    document.querySelectorAll(".error").forEach(el => el.innerText = "");
    document.querySelectorAll(".input").forEach(el => el.classList.remove("error-border"));

    let valid = true;

    // First Name
    if(firstName.value.trim() === "") {
        document.getElementById("errFirst").innerText = "First Name cannot be empty";
        firstName.classList.add("error-border");
        valid = false;
    }

    // Last Name
    if(lastName.value.trim() === "") {
        document.getElementById("errLast").innerText = "Last Name cannot be empty";
        lastName.classList.add("error-border");
        valid = false;
    }

    // Phone (10-12 angka, hanya digit)
    const phoneVal = phone.value.trim();
    if(!/^\d{10,12}$/.test(phoneVal)) {
        document.getElementById("errPhone").innerText = "Phone must be 10-12 digits";
        phone.classList.add("error-border");
        valid = false;
    }

    // Email (harus ada @ dan .)
    const emailVal = email.value.trim();
    if(!emailVal.includes("@") || !emailVal.includes(".")) {
        document.getElementById("errEmail").innerText = "Please enter a valid email";
        email.classList.add("error-border");
        valid = false;
    }

    // Message (tidak boleh kosong)
    if(message.value.trim() === "") {
        document.getElementById("errMessage").innerText = "Message cannot be empty";
        message.classList.add("error-border");
        valid = false;
    }

    // Terms checkbox
    if(!tos.checked) {
        document.getElementById("errTos").innerText = "You must agree to the terms";
        valid = false;
    }

    if(valid) {
        alert("Form submitted successfully!");
        contactForm.reset();
    }
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
