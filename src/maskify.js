class Maskify {
    constructor(selector, options = {}) {
        this.mask = typeof selector === "string" ? document.querySelector(selector) : selector;

        if (!this.mask) {
            console.error("Element not found:", selector);
            return;
        }

        // Default settings
        this.settings = {
            size: options.size || 100, // Tamaño fijo en píxeles
            feathering: options.feathering || 100, // difuminado > 100
            color: options.color || "black",
            fallbackColor: options.fallbackColor || "crimson",
        };

        this.mask.style.width = '100vw';
        this.mask.style.height = '100vh';
        this.mask.style.position = 'absolute';
        this.mask.style.top = 0;
        this.mask.style.left = 0;
        this.mask.style.backgroundColor = this.settings.fallbackColor;
        this.handleMouseMove = this.handleMouseMove.bind(this);

        window.addEventListener("mousemove", this.handleMouseMove);
    }

    handleMouseMove(e) {
        const { size, feathering, color } = this.settings;
        this.mask.style.maskImage = `radial-gradient(circle ${size}px at ${e.clientX}px ${e.clientY}px, 
        ${color} ${size}px, transparent ${feathering}px)`;
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
