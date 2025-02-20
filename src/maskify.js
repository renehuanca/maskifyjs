class Maskify {
    constructor(selector, options = {}) {
        this.mask = typeof selector === "string" ? document.querySelector(selector) : selector;

        if (!this.mask) {
            console.error("Element not found:", selector);
            return;
        }

        // Default
        this.settings = {
            size: options.size || "10%",
            strength: options.strength || 5,
            color: options.color || "black",
            fallbackColor: options.fallbackColor || "red",
        };

        this.mask.style.backgroundColor = this.settings.fallbackColor;
        this.handleMouseMove = this.handleMouseMove.bind(this);

        window.addEventListener("mousemove", this.handleMouseMove);
    }

    handleMouseMove(e) {
        this.mask.style.maskImage = `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, 
        ${this.settings.color} ${this.settings.size}, transparent ${this.settings.strength}%)`;
        this.mask.style.webkitMaskImage = this.mask.style.maskImage;
    }

    destroy() {
        window.removeEventListener("mousemove", this.handleMouseMove);
    }
}

// Export

if (typeof module !== "undefined" && module.exports) {
    module.exports = Maskify;
} else {
    window.Maskify = Maskify; // Browser
}

