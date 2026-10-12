const opening = document.getElementById("opening");
const giftScene = document.getElementById("giftScene");
const messageScene = document.getElementById("messageScene");
const partyScene = document.getElementById("partyScene");

const startBtn = document.getElementById("startBtn");
const giftBtn = document.getElementById("giftBtn");
const celebrateBtn = document.getElementById("celebrateBtn");

const cutCakeBtn = document.getElementById("cutCakeBtn");
const feedDishuBtn = document.getElementById("feedDishuBtn");

const partyMessage = document.getElementById("partyMessage");
const partyCaption = document.getElementById("partyCaption");
const cake = document.getElementById("cake");
const cakeSlice = document.getElementById("cakeSlice");
const feedMessage = document.getElementById("feedMessage");

// STEP 1: Opening se gift scene
startBtn.addEventListener("click", function () {
opening.classList.add("hidden");
giftScene.classList.remove("hidden");
});

// STEP 2: Gift se birthday message
giftBtn.addEventListener("click", function () {
giftScene.classList.add("hidden");
messageScene.classList.remove("hidden");
});

// STEP 3: Celebration + Party screen
celebrateBtn.addEventListener("click", function () {


// Confetti animation
for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");

    confetti.classList.add("confetti");

    confetti.innerHTML = ["💜", "💗", "✨", "🎉", "💕"][
        Math.floor(Math.random() * 5)
    ];

    confetti.style.left = Math.random() * 100 + "vw";

    confetti.style.animationDuration =
        (Math.random() * 2 + 2) + "s";

    confetti.style.fontSize =
        (Math.random() * 15 + 15) + "px";

    document.body.appendChild(confetti);

    setTimeout(function () {
        confetti.remove();
    }, 4000);
}

// Party screen open
messageScene.classList.add("hidden");
partyScene.classList.remove("hidden");


});

// STEP 4: Teddy, doggy aur kitty cake cut karenge
cutCakeBtn.addEventListener("click", function () {


cake.textContent = "🍰";

cakeSlice.classList.remove("hidden");

partyMessage.textContent =
    "Yayyy! Cake is ready, Dishu! 🎂";

partyCaption.textContent =
    "Teddy, doggy aur kitty ne tumhare liye cake cut kiya! 🧸🐶🐱";

cutCakeBtn.classList.add("hidden");

feedDishuBtn.classList.remove("hidden");


});

// STEP 5: Dishu ko cake offer karna
feedDishuBtn.addEventListener("click", function () {


cake.textContent = "🧁";

partyMessage.textContent =
    "Dishuuu, lo tum bhi khao! 🥹💗";

partyCaption.textContent =
    "A little bite of cake, a whole lot of love! 💜";

feedDishuBtn.classList.add("hidden");

feedMessage.classList.remove("hidden");


});
