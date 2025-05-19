document.addEventListener("DOMContentLoaded", function () {
    const volunteerButton = document.getElementById("volunteerButton");
    const loadMoreEventsButton = document.getElementById("loadMoreEvents");
    const lang = document.documentElement.getAttribute("data-lang"); // Get the language

    function handleVolunteerClick() {
        const message = lang === "hu"
            ? "Köszönjük érdeklődését! Hamarosan felvesszük Önnel a kapcsolatot az önkéntes lehetőségekkel kapcsolatban."
            : "Thank you for your interest! We will contact you with volunteering opportunities soon.";
        alert(message);
    }

    function handleLoadMoreEventsClick() {
        const eventsList = document.getElementById("eventsList");
        const newEvents = lang === "hu"
            ? [
                "🌿 Környezetbarát Műhely - 2025. június 12.",
                "♻️ Újrahasznosító Akció - 2025. július 8.",
                "🚲 Autómentes Nap - 2025. augusztus 20."
            ]
            : [
                "🌿 Eco-Friendly Workshop - June 12, 2025",
                "♻️ Recycling Drive - July 8, 2025",
                "🚲 Car-Free Day - August 20, 2025"
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

        if (selectedLang === "hu" && fileName.includes("")) {
            window.location.href = fileName.replace("get-involved.html", "get-involved-hu.html");
        } else if (selectedLang !== "hu" && fileName.includes("-hu")) {
            window.location.href = fileName.replace("-hu", "");
        }
    }

    languageSwitcherLinks.forEach(link => {
        link.addEventListener("click", handleLanguageSwitch);
    });
});

console.log("Script is running!");
