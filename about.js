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
                    window.location.href = fileName.replace("about.html", "about-hu.html");
                }
            } else {
                if (fileName.includes("-hu")) {
                    window.location.href = fileName.replace("about-hu.html", "about.html");
                }
            }
        });
    });
});
