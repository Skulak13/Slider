let slider = {
    currentSlide: 0, // Number of the currently displayed slide
    slides: [
        "images/Designer (1).jpeg",
        "images/Designer (2).jpeg",
        "images/Designer (3).jpeg",
        "images/Designer (4).jpeg"
    ],

    // Function to move to the next slide
    nextSlide: function () {
        this.currentSlide++; // Increment the current slide number by 1
        if (this.currentSlide >= this.slides.length) {
            this.currentSlide = 0; // If the slide number exceeds the total number of slides, reset to the first slide
        }
        document.getElementById("slider-image").src = this.slides[this.currentSlide]; // Set the image source to the current slide
    },

    // Function to move to the previous slide
    prevSlide: function () {
        this.currentSlide--; // Decrement the current slide number by 1
        if (this.currentSlide < 0) {
            this.currentSlide = this.slides.length - 1; // If the slide number is less than 0, move to the last slide
        }
        document.getElementById("slider-image").src = this.slides[this.currentSlide]; // Set the image source to the current slide
    },

    // Function to automatically switch slides every 10 seconds
    startAutoSlide: function () {
        this.autoSlideInterval = setInterval(() => {
            this.nextSlide(); // Move to the next slide
        }, 10000); // Interval set to 10,000 milliseconds (10 seconds)
    },

    // Function to stop the automatic slide switching
    stopAutoSlide: function () {
        clearInterval(this.autoSlideInterval); // Clear the interval for automatic slide switching
    },

    // Function to toggle the automatic slide switching
    toggleAutoSlide: function () {
        const autoButton = document.querySelector("#auto-button"); // Find the auto switch button
        if (!autoButton.classList.contains('clicked')) { // If the button is not clicked
            this.startAutoSlide(); // Start automatic slide switching
            autoButton.classList.add('clicked'); // Add 'clicked' class to the button
            autoButton.textContent = 'Stop auto'; // Change button text to 'Stop auto'
        } else {
            this.stopAutoSlide(); // Stop automatic slide switching
            autoButton.classList.remove('clicked'); // Remove 'clicked' class from the button
            autoButton.textContent = 'Start auto'; // Change button text to 'Start auto'
        }
    },

    // Function to initialize the slider
    init: function () {
        document.getElementById("slider-image").src = this.slides[this.currentSlide]; // Set the initial image
        document.getElementById("prev-button").addEventListener("click", this.prevSlide.bind(this)); // Add event listener to the 'prev' button
        document.getElementById("auto-button").addEventListener("click", this.toggleAutoSlide.bind(this)); // Add event listener to the 'auto' button
        document.getElementById("next-button").addEventListener("click", this.nextSlide.bind(this)); // Add event listener to the 'next' button
    }
};

// Initialize the slider when the page loads
slider.init();