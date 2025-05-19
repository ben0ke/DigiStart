document.addEventListener("DOMContentLoaded", function () {
    function getCurrentLanguage() {
        // Check if the language is Hungarian ('-hu') or English ('')
        if (document.documentElement.lang === 'hu') {
            return '-hu';  // Hungarian
        }
        return '';  // Default to English
    }

    const tipButton = document.getElementById("generateTips");

    if (tipButton) {
        tipButton.addEventListener("click", function () {
            const tipTextElement = document.getElementById("tipText");
            if (tipTextElement) {
                tipTextElement.textContent = ""; // Clear the text
            }
            const tips = {
                en: [
                    "Protect your accounts: Use strong and unique passwords for all your DigiStart logins.",
                    "Keep your software up to date to benefit from DigiStart's latest security features.",
                    "Take regular breaks from screens to maintain a healthy digital lifestyle.",
                    "Explore DigiStart's online courses to boost your digital skills.",
                    "Always back up your important files with DigiStart's cloud solutions.",
                    "Be cautious with suspicious emails—DigiStart recommends enabling two-factor authentication.",
                    "Join DigiStart community workshops to stay updated on IT trends.",
                    "Educate others about digital literacy with DigiStart's resources.",
                    "Participate in DigiStart's sustainability challenges to lower your digital carbon footprint.",
                    "Use energy-saving settings on devices for a greener digital experience.",
                    "Support businesses that use renewable energy for their digital services.",
                    "Secure your home WiFi with a strong password and WPA3 encryption.",
                    "Dispose of old electronics responsibly—DigiStart supports e-waste recycling.",
                    "Turn off devices when not in use to save energy and extend their lifespan.",
                    "Encourage your workplace or school to adopt green IT policies.",
                    "Limit unnecessary printing by storing documents digitally.",
                    "Utilize DigiStart's AI-powered tips to enhance your digital well-being.",
                    "Keep your digital workspace organized by deleting unused files and emails.",
                    "Learn about data privacy and protect your personal information online.",
                    "Volunteer for DigiStart's digital education programs in your community."
                ],
                hu: [
                    "Védd a fiókjaidat erős, egyedi jelszavakkal.",
                    "Tartsd naprakészen a szoftvereidet, hogy élvezhesd a legújabb biztonsági funkciókat.",
                    "Tarts rendszeres szüneteket a képernyő előtt, hogy egészséges digitális életmódot folytass.",
                    "Fejleszd digitális készségeidet a DigiStart online tanfolyamaival.",
                    "Készíts biztonsági mentéseket a fontos fájljaidról a DigiStart felhőmegoldásaival.",
                    "Légy óvatos a gyanús e-mailekkel—kapcsold be a kétlépcsős azonosítást DigiStart ajánlásával.",
                    "Vegyél részt a DigiStart közösségi workshopjain az aktuális IT trendekért.",
                    "Segítsd mások digitális írástudását DigiStart tudásanyagával.",
                    "Csatlakozz a DigiStart fenntarthatósági kihívásaihoz a digitális karbonlábnyom csökkentéséért.",
                    "Használj energiatakarékos beállításokat az eszközeiden a zöldebb digitális élményért.",
                    "Támogass olyan vállalkozásokat, amelyek megújuló energiát használnak digitális szolgáltatásaikhoz.",
                    "Védd az otthoni WiFi-hálózatodat erős jelszóval és WPA3 titkosítással.",
                    "Add le a régi elektronikai eszközeidet felelősen—DigiStart támogatja az e-hulladék újrahasznosítást.",
                    "Kapcsold ki az eszközeidet, ha nem használod őket, hogy energiát spórolj és meghosszabbítsd az élettartamukat.",
                    "Bátorítsd munkahelyedet vagy iskoládat a zöld IT-irányelvek bevezetésére.",
                    "Csökkentsd a felesleges nyomtatást digitális dokumentumok tárolásával.",
                    "Használd a DigiStart AI-alapú tippjeit digitális jólléted javítására.",
                    "Tartsd rendezettnek a digitális munkatered azzal, hogy törlöd a felesleges fájlokat és e-maileket.",
                    "Tanulj az adatvédelemről és óvd személyes adataidat az interneten.",
                    "Önkénteskedj a DigiStart digitális oktatási programjaiban a közösségedben."
                ]
            };

            const currentLanguage = getCurrentLanguage();
            const tipsArray = currentLanguage === '-hu' ? tips.hu : tips.en;

            displayRandomTip(tipsArray);
        });
    }

    function displayRandomTip(tipsArray) {
        const tipsContainer = document.getElementById("tipsContainer");

        if (!tipsContainer) {
            console.error("Tips container not found!");
            return;
        }

        tipsContainer.innerHTML = "";

        const randomIndex = Math.floor(Math.random() * tipsArray.length);
        const randomTip = tipsArray[randomIndex];

        const tipElement = document.createElement("p");
        tipElement.textContent = randomTip;

        tipsContainer.appendChild(tipElement);
    }

    const languageSwitcher = document.querySelectorAll("#languageSwitcher a");
    languageSwitcher.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const selectedLang = this.getAttribute("data-lang");
            let currentURL = window.location.pathname;
            let fileName = currentURL.substring(currentURL.lastIndexOf("/") + 1);

            if (selectedLang === "hu") {
                if (!fileName.includes("-hu")) {
                    window.location.href = fileName.replace("solutions.html", "solutions-hu.html");
                }
            } else {
                if (fileName.includes("-hu")) {
                    window.location.href = fileName.replace("solutions-hu.html", "solutions.html");
                }
            }
        });
    });
});
