function updateClock() {
    const now = new Date();
    const startDate = new Date("August 2, 2018");
    const timeDifference = now.getTime() - startDate.getTime();

    const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365.25));
    const months = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * (365.25 / 12)));
    const days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * (365.25 / 12))) / (1000 * 60 * 60 * 24));
    const hours = Math.floor(timeDifference / (1000 * 60 * 60)) % 24;
    const minutes = Math.floor(timeDifference / (1000 * 60)) % 60;
    const seconds = Math.floor(timeDifference / 1000) % 60;

    const clockElement = document.getElementById("time");
    clockElement.textContent = `${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

    // Call the function to update the anniversary message
    updateAnniversaryMessage(years);

    // Call the function to update the additional message
    updateAdditionalMessage(years);
}

function updateAnniversaryMessage(years) {
    const anniversaryMessageElement = document.getElementById("anniversaryMessage");
    anniversaryMessageElement.textContent = `Happy ${years}th Anniversary!`;
}

function updateAdditionalMessage(years) {
    const additionalMessageElement = document.getElementById("additionalMessage");
    additionalMessageElement.textContent = `${years} years of love, joy, and togetherness.`;
}

// Call updateClock every second
setInterval(updateClock, 1000);


