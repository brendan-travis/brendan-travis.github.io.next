define("animation-manager", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AnimationManager = void 0;
    class AnimationManager {
        animationClass = "animate";
        animationDelay = 500;
        constructor() {
            window.addEventListener("hashchange", () => this.SetAnimationsForCurrentPage());
            window.addEventListener("load", () => this.SetAnimationsForCurrentPage(0));
        }
        SetAnimationsForCurrentPage(animationDelay) {
            const currentHash = window.location.hash;
            document.getElementsByClassName("selected-section")[0]?.classList.remove("selected-section");
            switch (currentHash) {
                case "":
                case "#landing":
                    document.getElementById("landing")?.classList.add("selected-section");
                    break;
                case "#about":
                    document.getElementById("about")?.classList.add("selected-section");
                    this.RemoveFrameAnimations("about");
                    setTimeout(() => this.ApplyFrameAnimations("about"), animationDelay ?? this.animationDelay);
                    break;
                case "#dark-souls-checklist":
                    document.getElementById("dark-souls-checklist")?.classList.add("selected-section");
                    this.RemoveFrameAnimations("dark-souls-checklist");
                    setTimeout(() => this.ApplyFrameAnimations("dark-souls-checklist"), animationDelay ?? this.animationDelay);
                    break;
                case "#contact":
                    document.getElementById("contact")?.classList.add("selected-section");
                    this.RemoveFrameAnimations("contact");
                    setTimeout(() => this.ApplyFrameAnimations("contact"), animationDelay ?? this.animationDelay);
                    break;
            }
        }
        RemoveFrameAnimations(sectionId) {
            const section = document.getElementById(sectionId);
            section?.getElementsByClassName("top-frame")[0]?.classList.remove(this.animationClass);
            section?.getElementsByClassName("bottom-frame")[0]?.classList.remove(this.animationClass);
            section?.getElementsByClassName("left-frame")[0]?.classList.remove(this.animationClass);
            section?.getElementsByClassName("right-frame")[0]?.classList.remove(this.animationClass);
        }
        ApplyFrameAnimations(sectionId) {
            const section = document.getElementById(sectionId);
            section?.getElementsByClassName("top-frame")[0]?.classList.add(this.animationClass);
            section?.getElementsByClassName("bottom-frame")[0]?.classList.add(this.animationClass);
            section?.getElementsByClassName("left-frame")[0]?.classList.add(this.animationClass);
            section?.getElementsByClassName("right-frame")[0]?.classList.add(this.animationClass);
        }
    }
    exports.AnimationManager = AnimationManager;
});
define("scroller", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Scroller = void 0;
    class Scroller {
        scrollDelay = 500;
        scrolling = false;
        scrollTimer;
        touchStart = 0;
        constructor() {
            window.addEventListener("wheel", (e) => this.WheelScroll(e), { passive: false });
            window.addEventListener("keydown", (e) => this.KeyScroll(e));
            window.addEventListener("touchstart", (e) => this.TouchStart(e), { passive: false });
            window.addEventListener("touchend", (e) => this.TouchScroll(e), { passive: false });
            window.addEventListener("resize", this.RefreshHash);
        }
        WheelScroll(e) {
            e.preventDefault();
            if (this.scrollTimer) {
                clearTimeout(this.scrollTimer);
            }
            this.scrollTimer = setTimeout(() => {
                this.scrolling = false;
            }, this.scrollDelay);
            if (this.scrolling) {
                return;
            }
            this.scrolling = true;
            this.ScrollBetweenSections(e.deltaY > 0);
        }
        KeyScroll({ key }) {
            if (key === "ArrowUp" || key === "ArrowDown") {
                this.ScrollBetweenSections(key === "ArrowDown");
            }
        }
        TouchStart(e) {
            e.preventDefault();
            this.touchStart = e.changedTouches[0].pageY;
        }
        TouchScroll(e) {
            e.preventDefault();
            this.ScrollBetweenSections(e.changedTouches[0].pageY < this.touchStart);
        }
        ScrollBetweenSections(next) {
            const currentRoute = window.location.hash;
            if (next) {
                switch (currentRoute) {
                    case "":
                    case "#landing":
                        window.location.hash = "#about";
                        break;
                    case "#about":
                        window.location.hash = "#dark-souls-checklist";
                        break;
                    case "#dark-souls-checklist":
                        window.location.hash = "#contact";
                        break;
                }
            }
            else {
                switch (currentRoute) {
                    case "#about":
                        window.location.hash = "#landing";
                        break;
                    case "#dark-souls-checklist":
                        window.location.hash = "#about";
                        break;
                    case "#contact":
                        window.location.hash = "#dark-souls-checklist";
                        break;
                }
            }
        }
        RefreshHash() {
            const currentHash = window.location.hash;
            window.location.hash = "";
            window.location.hash = currentHash;
        }
    }
    exports.Scroller = Scroller;
});
define("page-selector", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PageSelector = void 0;
    class PageSelector {
        selectedClass = "selected";
        selectorContainer = "selector-container";
        constructor() {
            window.addEventListener("hashchange", () => this.SelectFromRoute());
            this.SelectFromRoute();
        }
        SelectFromRoute() {
            this.UnselectAll();
            const currentRoute = window.location.hash;
            switch (currentRoute) {
                case "":
                case "#landing":
                    document.getElementById("selector-i")?.classList.add(this.selectedClass);
                    break;
                case "#about":
                    document.getElementById("selector-ii")?.classList.add(this.selectedClass);
                    break;
                case "#dark-souls-checklist":
                    document.getElementById("selector-iii")?.classList.add(this.selectedClass);
                    break;
                case "#contact":
                    document.getElementById("selector-iv")?.classList.add(this.selectedClass);
                    break;
            }
        }
        UnselectAll() {
            const selectedItems = document.getElementById(this.selectorContainer)?.getElementsByClassName(this.selectedClass);
            if (selectedItems) {
                for (const item of selectedItems) {
                    item.classList.remove(this.selectedClass);
                }
            }
        }
    }
    exports.PageSelector = PageSelector;
});
define("particles", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Particles = void 0;
    class Particles {
        container;
        maxWidth;
        maxHeight;
        numberOfParticles;
        colours = [
            "#4e242a",
            "#fcb360",
            "#fdee98"
        ];
        constructor(numberOfParticles) {
            this.numberOfParticles = numberOfParticles;
            window.addEventListener("resize", () => {
                this.ClearParticles();
                this.InitialiseParticles();
            });
            this.InitialiseParticles();
        }
        InitialiseParticles() {
            this.container = document.getElementById("particle-container");
            this.maxWidth = this.container?.offsetWidth * 1.2 ?? 0;
            this.maxHeight = this.container?.offsetHeight * 1.2 ?? 0;
            for (let i = 0; i < this.numberOfParticles; i++) {
                this.CreateParticle();
            }
        }
        CreateParticle() {
            const maxHeight = this.maxHeight ?? 0;
            const maxWidth = this.maxWidth ?? 0;
            const colour = this.GetRandomNumberBetween(0, 2);
            const startX = `${Math.floor(Math.random() * maxWidth)}px`;
            const startY = `${Math.floor(Math.random() * maxHeight)}px`;
            const endX = `${Math.floor(Math.random() * maxWidth)}px`;
            const endY = `${Math.floor(Math.random() * maxHeight)}px`;
            const width = this.GetRandomNumberBetween(10, 30);
            const blurRadius = this.GetRandomNumberBetween(2, 8);
            const animationName = `particle-${Math.floor(Math.random() * 1_000_000)}`;
            const animationLength = this.GetRandomNumberBetween(40, 80);
            const animationMidPoint = this.GetRandomNumberBetween(30, 80);
            const animation = `
            @keyframes ${animationName} {
                0% {
                    opacity: 0;
                    left: ${startX};
                    top: ${startY};
                }
                ${animationMidPoint}% {
                    opacity: 0.8;
                }
                100% {
                    opacity: 0;
                    left: ${endX};
                    top: ${endY};
                }
            }`;
            document.styleSheets[0].insertRule(animation, document.styleSheets[0].cssRules.length - 1);
            const particle = document.createElement("div");
            particle.classList.add("particle");
            particle.style.animation = `${animationName} ${animationLength}s infinite`;
            particle.style.height = particle.style.width = `${width}px`;
            particle.style.filter = `blur(${blurRadius}px)`;
            particle.style.background = this.colours[colour];
            this.container?.appendChild(particle);
        }
        ClearParticles() {
            if (this.container) {
                this.container.innerHTML = "";
            }
        }
        GetRandomNumberBetween(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    }
    exports.Particles = Particles;
});
define("main", ["require", "exports", "scroller", "page-selector", "animation-manager", "particles"], function (require, exports, scroller_1, page_selector_1, animation_manager_1, particles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    new animation_manager_1.AnimationManager();
    new page_selector_1.PageSelector();
    new particles_1.Particles(30);
    new scroller_1.Scroller();
});
