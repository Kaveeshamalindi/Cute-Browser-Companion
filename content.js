(() => {

    if (document.getElementById("browser-companion")) {
        return;
    }

    const companion = document.createElement("div");

    companion.id = "browser-companion";

    companion.innerHTML = `

        <div id="companion-message">
            You can do it! 🪄
        </div>

        <div id="companion-character">
            🐼
        </div>

        <div id="companion-name">
            Little Luna
        </div>

        <div id="companion-buttons">

            <button id="motivation-btn">
                🪄
            </button>

            <button id="water-btn">
                💧
            </button>

            <button id="break-btn">
                🍃
            </button>

        </div>

        <button id="close-btn">
            ×
        </button>
    `;

    document.body.appendChild(companion);


    const message =
        document.getElementById("companion-message");

    const character =
        document.getElementById("companion-character");


    // -----------------------------
    // Messages
    // -----------------------------

    const motivationMessages = [

        "You are doing great! ✨",

        "One step at a time. 🌱",

        "Keep going! You've got this! 💪",

        "Small progress is still progress. 🌷",

        "Believe in yourself. 💗",

        "Your future self will thank you. 💫",

        "Don't give up on your dreams. 🌙",

        "Keep learning and growing. 🌱",

        "You're closer than you think! 🚀"

    ];


    const waterMessages = [

        "Time to drink some water! 🥤",

        "Stay hydrated, bestie! 💙",

        "Take a little water break. 🫧",

        "Your body needs some water. 💧",

        "Hydration check! 💦"

    ];


    const breakMessages = [

        "You've been working hard. 🎓",

        "Take a little break. 🧘",

        "Look away from the screen for a moment. 🌱",

        "Stretch your shoulders. 🧸",

        "Rest is part of productivity. 🎶"

    ];


    // -----------------------------
    // Show message
    // -----------------------------

    function showMessage(text) {

        message.textContent = text;

        message.classList.remove("show");

        void message.offsetWidth;

        message.classList.add("show");

    }


    // -----------------------------
    // Random message
    // -----------------------------

    function randomMessage(list) {

        const index =
            Math.floor(
                Math.random() * list.length
            );

        showMessage(list[index]);

    }


    // -----------------------------
    // Motivation button
    // -----------------------------

    document
        .getElementById("motivation-btn")
        .addEventListener("click", () => {

            character.textContent = "🐼";

            randomMessage(
                motivationMessages
            );

        });


    // -----------------------------
    // Water button
    // -----------------------------

    document
        .getElementById("water-btn")
        .addEventListener("click", () => {

            character.textContent = "💧";

            randomMessage(
                waterMessages
            );

        });


    // -----------------------------
    // Break button
    // -----------------------------

    document
        .getElementById("break-btn")
        .addEventListener("click", () => {

            character.textContent = "🌿";

            randomMessage(
                breakMessages
            );

        });


    // -----------------------------
    // Click character
    // -----------------------------

    character.addEventListener("click", () => {

        character.textContent = "🥰";

        showMessage(
            "I'm cheering for you! 💗"
        );

        setTimeout(() => {

            character.textContent = "🐼";

        }, 1500);

    });


    // -----------------------------
    // Hydration reminder
    // Every 45 minutes
    // -----------------------------

    setInterval(() => {

        character.textContent = "💧";

        randomMessage(
            waterMessages
        );

    }, 45 * 60 * 1000);


    // -----------------------------
    // Break reminder
    // Every 60 minutes
    // -----------------------------

    setInterval(() => {

        character.textContent = "🌿";

        randomMessage(
            breakMessages
        );

    }, 60 * 60 * 1000);


    // -----------------------------
    // Random motivation
    // Every 20 minutes
    // -----------------------------

    setInterval(() => {

        character.textContent = "🐼";

        randomMessage(
            motivationMessages
        );

    }, 20 * 60 * 1000);


    // -----------------------------
    // Close
    // -----------------------------

    document
        .getElementById("close-btn")
        .addEventListener("click", () => {

            companion.remove();

        });


    // -----------------------------
    // Initial message
    // -----------------------------

    setTimeout(() => {

        message.classList.add("show");

    }, 500);

})();