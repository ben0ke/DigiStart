document.addEventListener("DOMContentLoaded", function () {
    const generateRandomTip = () => {
        const tips = [
            "Switch to reusable bags and bottles.",
            "Support local farmers to reduce carbon footprint.",
            "Reduce energy use by unplugging devices when not in use.",
            "Plant more trees in your neighborhood.",
            "Use bicycles or public transport instead of cars.",
            "Participate in local cleanup campaigns.",
            "Install solar panels to generate renewable energy.",
            "Harvest rainwater to conserve water resources."
        ];
        const randomTip = tips[Math.floor(Math.random() * tips.length)];
        document.getElementById("tipText").innerText = randomTip;
    };

    const tipButton = document.getElementById("generateTips");
    if (tipButton) {
        tipButton.addEventListener("click", generateRandomTip);
    }

    const handleLanguageSwitch = (e) => {
    e.preventDefault();
    const selectedLang = e.currentTarget.getAttribute("data-lang");
    const currentURL = window.location.pathname;
    const fileName = currentURL.substring(currentURL.lastIndexOf("/") + 1);

    if (selectedLang === "hu") {
        if (!fileName.includes("-hu")) {
            window.location.href = currentURL.replace(fileName, "index-hu.html");
        }
    } else {
        if (fileName.includes("-hu")) {
            window.location.href = currentURL.replace(fileName, "index.html");
        }
    }
    };

    console.log("Selected Language:", selectedLang);
    console.log("Current URL:", currentURL);
    console.log("File Name:", fileName);

    const languageSwitcherLinks = document.querySelectorAll("#languageSwitcher a");
    languageSwitcherLinks.forEach(link => {
        link.addEventListener("click", handleLanguageSwitch);
    });
});
