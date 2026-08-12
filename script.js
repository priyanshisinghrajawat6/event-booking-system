function selectEvent(eventName) {
    document.getElementById("eventSelect").value = eventName;

    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });
}


document.getElementById("bookingForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const selectedEvent = document.getElementById("eventSelect").value;
    const tickets = document.getElementById("tickets").value;

    document.getElementById("bookingMessage").innerHTML =
        `Booking confirmed for ${name}! You booked ${tickets} ticket(s) for ${selectedEvent}.`;

    this.reset();
});
document.getElementById("searchInput").addEventListener("input", function() {

    const searchValue = this.value.toLowerCase();

    const cards = document.querySelectorAll(".event-card");

    cards.forEach(function(card) {

        const eventName =
            card.querySelector("h3").textContent.toLowerCase();

        if (eventName.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});
document.getElementById("categoryFilter").addEventListener("change", function() {

    const selectedCategory = this.value;

    const cards = document.querySelectorAll(".event-card");

    cards.forEach(function(card) {

        const cardCategory = card.getAttribute("data-category");

        if (
            selectedCategory === "all" ||
            cardCategory === selectedCategory
        ) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});
