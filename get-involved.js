document.addEventListener("DOMContentLoaded", function () {
    const volunteerButton = document.getElementById("volunteerButton");
    const loadMoreEventsButton = document.getElementById("loadMoreEvents");
    // Próbáljuk kinyerni a nyelvet az <html> elemből (lang attribútum)
    const lang = document.documentElement.lang; 

    function handleVolunteerClick() {
        const message = lang === "hu"
            ? "Köszönjük érdeklődését a DigiStart iránt! Hamarosan felvesszük Önnel a kapcsolatot."
            : "Thank you for your interest in DigiStart! We will contact you soon.";
        alert(message);
    }

    function handleLoadMoreEventsClick() {
        const eventsList = document.getElementById("eventsList");
        const newEvents = lang === "hu"
            ? [
                "💡 Digitális Kompetencia Workshop - 2025. június 12.",
                "📱 Okos Eszközök Napja - 2025. július 8.",
                "🖥️ Programozás Gyerekeknek - 2025. augusztus 20."
            ]
            : [
                "💡 Digital Skills Workshop - June 12, 2025",
                "📱 Smart Devices Day - July 8, 2025",
                "🖥️ Programming for Kids - August 20, 2025"
            ];

        newEvents.forEach(event => {
            const li = document.createElement("li");
            li.textContent = event;
            eventsList.appendChild(li);
        });

        loadMoreEventsButton.style.display = "none";
    }

    if (volunteerButton) {
        volunteerButton.addEventListener("click", handleVolunteerClick);
    } else {
        console.error("Button with ID 'volunteerButton' not found.");
    }

    if (loadMoreEventsButton) {
        loadMoreEventsButton.addEventListener("click", handleLoadMoreEventsClick);
    } else {
        console.error("Button with ID 'loadMoreEvents' not found.");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const languageSwitcherLinks = document.querySelectorAll("#languageSwitcher a");

    function handleLanguageSwitch(e) {
        e.preventDefault();
        const selectedLang = this.getAttribute("data-lang");
        const currentURL = window.location.pathname;
        const fileName = currentURL.substring(currentURL.lastIndexOf("/") + 1);

        if (selectedLang === "hu" && !fileName.includes("-hu")) {
            window.location.href = fileName.replace("get-involved.html", "get-involved-hu.html");
        }
        else if (selectedLang === "en" && fileName.includes("-hu")) {
            window.location.href = fileName.replace("get-involved-hu.html", "get-involved.html");
        }
    }

    languageSwitcherLinks.forEach(link => {
        link.addEventListener("click", handleLanguageSwitch);
    });
});

console.log("DigiStart get-involved.js script is running!");
