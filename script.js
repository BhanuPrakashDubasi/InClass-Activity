// Change color on button click
document.getElementById("color-button").addEventListener("click", function() {
    this.style.backgroundColor = this.style.backgroundColor === "blue" ? "green" : "blue";
    this.style.color = "white";
});

// Show alert message on form submission if input is empty
document.getElementById("input-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission to show alert
    const inputField = document.getElementById("text-input").value.trim();
    if (inputField === "") {
        alert("Please enter some text before submitting.");
    } else {
        alert("Thank you for your input!");
    }
});

// Bulb rollover effect using JavaScript
const bulbImage = document.getElementById("bulb-image");
bulbImage.addEventListener("mouseover", function() {
    bulbImage.src = "bulb-on.png"; // Change to bulb-on image on hover
});

bulbImage.addEventListener("mouseout", function() {
    bulbImage.src = "bulb-off.png"; // Revert to bulb-off image when not hovering
});
