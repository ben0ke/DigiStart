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
                    "Reduce energy consumption by turning off lights and unplugging devices when not in use.",
                    "Switch to renewable energy sources such as solar or wind power to reduce reliance on fossil fuels.",
                    "Use public transportation, bike, or walk instead of driving to lower carbon emissions.",
                    "Support companies that use eco-friendly materials and sustainable production methods.",
                    "Participate in tree-planting initiatives to help absorb CO2 and provide oxygen.",
                    "Reduce meat consumption to lower greenhouse gas emissions from the livestock industry.",
                    "Advocate for strong environmental policies and vote for leaders who prioritize climate action.",
                    "Reduce, reuse, and recycle to minimize waste in landfills and oceans.",
                    "Avoid single-use plastics by opting for reusable bags, bottles, and containers.",
                    "Properly dispose of hazardous waste such as batteries and electronics to prevent pollution.",
                    "Join or organize clean-up events to remove waste from parks, beaches, and cities.",
                    "Use eco-friendly cleaning products to reduce the number of harmful chemicals in waterways.",
                    "Reduce air pollution by choosing electric vehicles or alternative transportation.",
                    "Fix leaks and install water-efficient appliances to conserve water at home.",
                    "Take shorter showers and turn off the tap while brushing your teeth to reduce water waste.",
                    "Collect rainwater for gardening to reduce dependence on municipal water supplies.",
                    "Reduce food waste by planning meals and storing food properly.",
                    "Support clean water initiatives to provide safe drinking water to communities in need.",
                    "Go paperless by using digital documents and online billing to reduce deforestation.",
                    "Choose sustainable packaging to minimize unnecessary waste.",
                    "Buy products made from certified sustainable wood and paper sources.",
                    "Avoid products containing unsustainable palm oil to prevent rainforest destruction.",
                    "Participate in reforestation projects to restore lost forests.",
                    "Support sustainable farming practices that protect soil and biodiversity.",
                    "Use solar panels to generate renewable energy at home.",
                    "Encourage schools and workplaces to implement green energy solutions.",
                    "Choose businesses that use renewable energy in their operations.",
                    "Unplug devices when not in use and invest in smart thermostats to save energy.",
                    "Reduce reliance on air conditioning by using fans or natural ventilation.",
                    "Donate to or volunteer for organizations focused on sustainability.",
                    "Educate yourself and others on environmental issues to spread awareness.",
                    "Compost organic waste to create natural fertilizer instead of sending it to landfills.",
                    "Use biodegradable and non-toxic personal care products.",
                    "Install energy-efficient LED bulbs to reduce electricity consumption.",
                    "Reduce unnecessary purchases and buy second-hand or sustainable products.",
                    "Eat more locally grown produce to reduce transportation emissions.",
                    "Limit fast fashion purchases and choose ethical, sustainable brands.",
                    "Advocate for more green spaces in urban areas to improve air quality and biodiversity.",
                    "Reduce digital carbon footprint by deleting unused emails and cloud storage files.",
                    "Invest in reusable coffee cups, straws, and cutlery instead of disposables.",
                    "Support policies that promote electric public transportation.",
                    "Avoid excessive packaging by choosing bulk items and bringing reusable containers.",
                    "Be mindful of water use in agriculture by supporting farms with sustainable irrigation.",
                    "Support businesses that offset carbon emissions through tree planting or renewable projects.",
                    "Reduce holiday waste by using reusable wrapping paper and decorations.",
                    "Turn old clothes into reusable materials instead of throwing them away.",
                    "Choose eco-friendly pet products, such as biodegradable poop bags and sustainable pet food.",
                    "Encourage restaurants to use sustainable food packaging.",
                    "Limit outdoor plastic decorations that contribute to environmental waste.",
                    "Reduce printing by utilizing digital tools for notes, invoices, and event tickets."
                ],
                hu: [
                    "Csökkentsd az energiafogyasztást azzal, hogy lekapcsolod a lámpákat és kihúzod a készülékeidet, amikor éppen nem használod őket.",
                    "Térj át megújuló energiaforrásokra, például nap- vagy szélenergiára, hogy csökkentsd a fosszilis tüzelőanyagoktól való függőséget.",
                    "Használj tömegközlekedést, kerékpárt vagy gyalogolj, ahelyett, hogy autóval közlekednél, ezzel csökkentve a szén-dioxid kibocsátást.",
                    "Támogass olyan cégeket, amelyek környezetbarát anyagokat és fenntartható gyártási módszereket alkalmaznak.",
                    "Vegyél részt faültetési kezdeményezésekben, hogy segíts csökkenteni a CO2-t és oxigént biztosíts.",
                    "Hasznosíts újra, hogy minimalizáld a hulladék termelést.",
                    "Kerüld az egyszer használatos műanyagokat, és válassz újrahasználható táskákat, palackokat és tárolóedényeket.",
                    "Helyesen kezeld a veszélyes hulladékot, például az akkumulátorokat és az elektronikát, hogy megakadályozd a szennyezést.",
                    "Csatlakozz vagy szervezz takarító eseményeket, hogy eltávolítsd a hulladékot a parkokból, strandokról és városokból.",
                    "Használj környezetbarát tisztítószereket, hogy csökkentsd a víziutakba kerülő káros vegyi anyagok mennyiségét.",
                    "Csökkentsd a levegőszennyezést elektromos járművek vagy alternatív közlekedési eszközök választásával.",
                    "Javítsd meg a szivárgásokat és telepíts víztakarékos készülékeket, hogy vizet takaríts meg otthon.",
                    "Vigyél rövidebb zuhanyokat, és kapcsold el a csapot, miközben fogat mosol, hogy csökkentsd a vízpazarlást.",
                    "Gyűjts esővizet a kertészkedéshez, hogy csökkentsd a városi vízellátástól való függőséget.",
                    "Csökkentsd az élelmiszer-pazarlást azzal, hogy előre megtervezed az étkezéseket és megfelelően tárolod az élelmiszereket.",
                    "Támogass tiszta víz kezdeményezéseket, hogy biztonságos ivóvizet biztosíts a rászoruló közösségeknek.",
                    "Térj át a papírmentes ügyintézésre digitális dokumentumok és online számlázás használatával, hogy csökkentsd az erdőirtást.",
                    "Válassz fenntartható csomagolást, hogy minimalizáld a felesleges hulladékot.",
                    "Vásárolj olyan termékeket, amelyek tanúsítottan fenntartható fából és papírból készültek.",
                    "Kerüld az olyan termékeket, amelyek nem fenntartható pálmaolajat tartalmaznak, hogy megakadályozd az esőerdők pusztítását.",
                    "Vegyél részt erdőtelepítési projektekben az elveszett erdők helyreállításához.",
                    "Támogass fenntartható mezőgazdasági gyakorlatokat, amelyek védik a talajt és a biodiverzitást.",
                    "Használj napkollektorokat, hogy megújuló energiát termelj otthon.",
                    "Bátorítsd az iskolákat és munkahelyeket, hogy alkalmazzanak zöldenergia-megoldásokat.",
                    "Válassz olyan vállalkozásokat, amelyek megújuló energiát használnak működésük során.",
                    "Húzd ki a készülékeket, amikor nem használod őket, és fektess be okos termosztátokba az energia megtakarítása érdekében.",
                    "Csökkentsd a légkondicionálótól való függőséget ventilátorok vagy természetes szellőzés használatával.",
                    "Adományozz vagy önkénteskedj fenntarthatósággal foglalkozó szervezeteknél.",
                    "Oktasd magad és másokat környezetvédelmi kérdésekben, hogy növeld a tudatosságot.",
                    "Komposztáld az organikus hulladékot, hogy természetes trágyát készíts belőle, ahelyett, hogy a szeméttelepre küldenéd.",
                    "Használj biológiailag lebomló és nem toxikus személyes higiéniai termékeket.",
                    "Telepíts energiahatékony LED izzókat az áramfogyasztás csökkentése érdekében.",
                    "Csökkentsd a felesleges vásárlásokat és vásárolj használt vagy fenntartható termékeket.",
                    "Fogyassz több helyben termesztett élelmiszert, hogy csökkentsd a szállítási kibocsátásokat.",
                    "Korlátozd a gyors divat vásárlását, és válassz etikus, fenntartható márkákat.",
                    "Támogasd több zöldterület kialakítását a városi területeken, hogy javuljon a levegő minősége és a biodiverzitás.",
                    "Csökkentsd a digitális szénlábnyomot azáltal, hogy törlöd a nem használt e-maileket és felhőalapú tároló fájlokat.",
                    "Fektess újrahasználható kávéscsészékbe, szívószálakba és evőeszközökbe az egyszer használatosak helyett.",
                    "Támogass olyan politikákat, amelyek elősegítik az elektromos tömegközlekedést.",
                    "Kerüld a túlzott csomagolást azáltal, hogy nagy kiszerelésű termékeket választasz és hozol magaddal újrahasználható tárolókat.",
                    "Légy tudatában a vízfogyasztásnak a mezőgazdaságban, támogasd azokat a gazdaságokat, amelyek fenntartható öntözési módszereket alkalmaznak.",
                    "Támogasd azokat a vállalkozásokat, amelyek fáültetéssel vagy megújuló projektekkel kompenzálják a szén-dioxid kibocsátást.",
                    "Csökkentsd az ünnepi hulladékot azzal, hogy újrahasználható ajándékcsomagolást és díszeket használsz.",
                    "A régi ruhákat hasznosítsd újra, ahelyett, hogy kidobnád őket.",
                    "Válassz környezetbarát háziállat termékeket, például biológiailag lebomló kutyaszacskókat és fenntartható háziállat ételt.",
                    "Bátorítsd az éttermeket fenntartható étkezési csomagolás használatára.",
                    "Korlátozd a kültéri műanyag díszeket, amelyek hozzájárulnak a környezeti hulladékhoz.",
                    "Csökkentsd a nyomtatást digitális eszközök használatával jegyzetekhez, számlákhoz és eseményjegyekhez."
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
                if (fileName.includes("")) {
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
