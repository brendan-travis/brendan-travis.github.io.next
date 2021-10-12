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
            switch (currentHash) {
                case "#about":
                    this.RemoveFrameAnimations("about");
                    setTimeout(() => this.ApplyFrameAnimations("about"), animationDelay ?? this.animationDelay);
                    break;
                case "#dark-souls-checklist":
                    this.RemoveFrameAnimations("dark-souls-checklist");
                    setTimeout(() => this.ApplyFrameAnimations("dark-souls-checklist"), animationDelay ?? this.animationDelay);
                    break;
                case "#contact":
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
        scrollDelay = 2000;
        scrolling = false;
        touchStart = 0;
        constructor() {
            const sectionContainer = document.getElementById("sections");
            window.addEventListener("wheel", (e) => this.WheelScroll(e), { passive: false });
            window.addEventListener("keydown", (e) => this.KeyScroll(e));
            sectionContainer?.addEventListener("touchstart", (e) => this.TouchStart(e), { passive: false });
            sectionContainer?.addEventListener("touchend", (e) => this.TouchScroll(e), { passive: false });
            window.addEventListener("resize", this.RefreshHash);
        }
        WheelScroll(e) {
            e.preventDefault();
            if (this.scrolling) {
                return;
            }
            this.scrolling = true;
            setTimeout(() => {
                this.scrolling = false;
            }, this.scrollDelay);
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
            document.getElementById("selector-i")?.addEventListener("click", (e) => this.Select(e.target, "#landing"));
            document.getElementById("selector-ii")?.addEventListener("click", (e) => this.Select(e.target, "#about"));
            document.getElementById("selector-iii")?.addEventListener("click", (e) => this.Select(e.target, "#dark-souls-checklist"));
            document.getElementById("selector-iv")?.addEventListener("click", (e) => this.Select(e.target, "#contact"));
            window.addEventListener("hashchange", () => this.SelectFromRoute());
            this.SelectFromRoute();
        }
        Select(button, page) {
            window.location.href = page;
            this.UnselectAll();
            button.classList.add(this.selectedClass);
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
define("main", ["require", "exports", "scroller", "page-selector", "animation-manager"], function (require, exports, scroller_1, page_selector_1, animation_manager_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    new scroller_1.Scroller();
    new page_selector_1.PageSelector();
    new animation_manager_1.AnimationManager();
});
