export class Scroller {
    scrollDelay = 2000;
    scrolling = false;
    touchStart: number;

    Setup() {
        window.addEventListener("wheel", (e : WheelEvent) => this.WheelScroll(e), { passive: false });
        window.addEventListener("keydown", (e: KeyboardEvent) => this.KeyScroll(e));
        window.addEventListener("touchstart", (e: TouchEvent) => this.TouchStart(e), { passive: false });
        window.addEventListener("touchend", (e: TouchEvent) => this.TouchScroll(e), { passive: false });
        window.addEventListener("resize", this.RefreshHash);
    }

    WheelScroll(e: WheelEvent) {
        e.preventDefault();

        if (this.scrolling) {
            return;
        }

        this.scrolling = true;
        setTimeout(() => {
            this.scrolling = false;
        }, this.scrollDelay);

        this.ScrollBetweenSections(e.deltaY > 0)
    }

    KeyScroll(e: KeyboardEvent) {
        if (e.key==="ArrowUp" || e.key==="ArrowDown") {
            this.ScrollBetweenSections(e.key==="ArrowDown");
        }
    }

    TouchStart(e: TouchEvent) {
        e.preventDefault();
        this.touchStart = e.changedTouches[0].pageY;
    }

    TouchScroll(e: TouchEvent) {
        e.preventDefault();
        this.ScrollBetweenSections(e.changedTouches[0].pageY<this.touchStart);
    }

    ScrollBetweenSections(next: boolean) {
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
        } else {
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