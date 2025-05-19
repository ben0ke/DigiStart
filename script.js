document.addEventListener("DOMContentLoaded", function () {
    const generateRandomTip = () => {
        const tips = [
            "Protect your data: Use strong and unique passwords for every account.",
            "Keep your software up-to-date for better security.",
            "Take regular breaks while using digital devices to protect your eyes.",
            "Explore online courses to boost your IT knowledge.",
            "Always back up your important files in the cloud or on external drives.",
            "Be cautious with suspicious emails and links to avoid phishing.",
            "Contribute to open source projects to improve your skills.",
            "Educate others about digital literacy in your community."
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

    const languageSwitcherLinks = document.querySelectorAll("#languageSwitcher a");
    languageSwitcherLinks.forEach(link => {
        link.addEventListener("click", handleLanguageSwitch);
    });
});
