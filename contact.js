document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const responseText = document.getElementById("formResponse");
	
	const currentLang = window.location.pathname.includes("-hu") ? "hu" : "en";

    if (name === "" || email === "" || message === "") {
        responseText.style.color = "red";
        responseText.innerText = currentLang === "hu" ? "Kérjük, töltse ki az összes mezőt!" : "Please fill in all fields.";
    } else {
        responseText.style.color = "green";
        responseText.innerText = currentLang === "hu" ? "Köszönjük jelentkezését! Hamarosan visszaigazoljuk." : "Thank you for your application! We'll get back to you soon.";
        
        document.getElementById("contactForm").reset();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const languageSwitcher = document.querySelectorAll("#languageSwitcher a");

    languageSwitcher.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const selectedLang = this.getAttribute("data-lang");
            let currentURL = window.location.pathname;

            let fileName = currentURL.substring(currentURL.lastIndexOf("/") + 1);

            if (selectedLang === "hu") {
                if (fileName.includes("")) {
                    window.location.href = fileName.replace("contact.html", "contact-hu.html");
                }
            } else {
                if (fileName.includes("-hu")) {
                    window.location.href = fileName.replace("contact-hu.html", "contact.html");
                }
            }
        });
    });
});