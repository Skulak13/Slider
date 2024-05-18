let slider = {
    currentSlide: 0,
    slides: [
        "images/Designer (1).jpeg",
        "images/Designer (2).jpeg",
        "images/Designer (3).jpeg",
        "images/Designer (4).jpeg"
    ],

    nextSlide: function () {
        this.currentSlide++;
        if (this.currentSlide >= this.slides.length) {
            this.currentSlide = 0;
        }
        document.getElementById("slider-image").src = this.slides[this.currentSlide];
    },

    prevSlide: function () {
        this.currentSlide--;
        if (this.currentSlide < 0) {
            this.currentSlide = this.slides.length - 1;
        }
        document.getElementById("slider-image").src = this.slides[this.currentSlide];
    },

    startAutoSlide: function () {
        this.autoSlideInterval = setInterval(() => {
            this.nextSlide();
        }, 10000);
    },

    stopAutoSlide: function () {
        clearInterval(this.autoSlideInterval);
    },

    toggleAutoSlide: function () {
        const autoButton = document.querySelector("#auto-button");
        if (!autoButton.classList.contains('clicked')) {
            this.startAutoSlide();
            autoButton.classList.add('clicked');
            autoButton.textContent = 'Stop auto';
        } else {
            this.stopAutoSlide();
            autoButton.classList.remove('clicked');
            autoButton.textContent = 'Start auto';
        }
    },

    init: function () {
        document.getElementById("slider-image").src = this.slides[this.currentSlide];
        document.getElementById("prev-button").addEventListener("click", this.prevSlide.bind(this));
        document.getElementById("auto-button").addEventListener("click", this.toggleAutoSlide.bind(this));
        document.getElementById("next-button").addEventListener("click", this.nextSlide.bind(this));
    }
};

slider.init();