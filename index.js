// script.js
const jaCheckbox = document.getElementById("ja");
const neeCheckbox = document.getElementById("nee");
const confettiContainer = document.getElementById("confetti-container");
let neeCount = 0; // Track the number of 'nee' clicks

// Messages to display when 'nee' is clicked
const messages = [
    "Are you sure?",
    "Why do you want to hurt me?",
    "Please don't do this to me."
];

// Function to create confetti effect
function createConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.left = Math.random() * 100 + "vw"; // Random horizontal position
        confetti.style.animationDuration = Math.random() * 2 + 3 + "s"; // Random fall duration
        confettiContainer.appendChild(confetti);

        // Remove confetti after animation ends
        confetti.addEventListener("animationend", () => {
            confetti.remove();
        });
    }
}

// Function to generate a random color
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Handle 'Ja' checkbox click
jaCheckbox.addEventListener("change", () => {
    if (jaCheckbox.checked) {
        // Create confetti
        createConfetti();
        // Clear all messages
        const messageElements = document.querySelectorAll(".message");
        messageElements.forEach((msg) => msg.remove());
        // Reset the 'Nee' checkbox
        neeCheckbox.checked = false;
        neeCount = 0; // Reset the 'nee' click count
    }
});

// Handle 'Nee' checkbox click
neeCheckbox.addEventListener("change", () => {
    if (neeCheckbox.checked) {
        neeCount++; // Increment the count of 'nee' clicks
        const message = document.createElement("div");
        message.classList.add("message");
        message.textContent = messages[Math.floor(Math.random() * messages.length)];
        // Set random position for the message
        message.style.top = Math.random() * 100 + "vh";
        message.style.left = Math.random() * 100 + "vw";
        document.body.appendChild(message);

        // Reset the 'Ja' checkbox
        jaCheckbox.checked = false; 
        neeCheckbox.checked = false; // Uncheck the 'nee' checkbox for single click
    }
});
