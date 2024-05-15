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

    autoSlide: setInterval(function () {
        const autoButton = document.querySelector("#auto-button");
        if (!autoButton.classList.contains('clicked')) {
            this.currentSlide++;
            if (this.currentSlide >= this.slides.length) {
                this.currentSlide = 0;
            }
            document.getElementById("slider-image").src = this.slides[this.currentSlide];
            autoButton.classList.add('clicked');
            autoButton.textContent = 'Stop auto';
        }
        else {
            autoButton.classList.remove('clicked');
            autoButton.textContent = 'Start auto';
            clearInterval(this.autoSlide);
        }
    }.bind(this), 10000),

    prevSlide: function () {
        this.currentSlide--;
        if (this.currentSlide < 0) {
            this.currentSlide = this.slides.length - 1;
        }
        document.getElementById("slider-image").src = this.slides[this.currentSlide];
    },

    init: function () {
        document.getElementById("slider-image").src = this.slides[this.currentSlide];
        document.getElementById("prev-button").addEventListener("click", this.prevSlide.bind(this));
        document.getElementById("auto-button").addEventListener("click", this.nextSlide.bind(this));
        document.getElementById("next-button").addEventListener("click", this.nextSlide.bind(this));
    }
};

slider.init();