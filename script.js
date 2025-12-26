let is24Hour = true; 
const clockElement = document.getElementById("clock");
const dateElement = document.getElementById("date");
const toggleBtn = document.getElementById("toggleBtn");

// Event Listener for the button
toggleBtn.addEventListener("click", () => {
    is24Hour = !is24Hour;
    toggleBtn.textContent = is24Hour ? "Switch to 12H" : "Switch to 24H";
    updateClock(); // Run immediately so the UI snaps to the new format
});

function updateClock() {
    const now = new Date();
    
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    let amPm = "";

    // 12-hour format conversion
    if (!is24Hour) {
        amPm = hours >= 12 ? " PM" : " AM";
        hours = hours % 12 || 12; // Modulo operator
    }

    const displayHours = String(hours).padStart(2, '0');
    clockElement.textContent = `${displayHours}:${minutes}:${seconds}${amPm}`;

    // Date display
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = now.toLocaleDateString(undefined, dateOptions);
}

// Update every 1 second
setInterval(updateClock, 1000);

// Initialize clock immediately
updateClock();