export class Scroller {
    scrollDelay = 1500;
    scrolling = false;

    Setup() {
        window.addEventListener("wheel", (e : WheelEvent) => this.ScrollSection(e), { passive: false });
    }

    ScrollSection(e: WheelEvent) {
        e.preventDefault();

        if (this.scrolling) {
            return;
        }

        this.scrolling = true;
        setTimeout(() => {
            this.scrolling = false;
        }, this.scrollDelay);

        const nextSection = e.deltaY > 0;

        if (nextSection)
        {
            if (this.IsInViewport(document.getElementById("section-1"))) {
                document.getElementById("section-2")?.scrollIntoView();
            } else if (this.IsInViewport(document.getElementById("section-2"))) {
                document.getElementById("section-3")?.scrollIntoView();
            }
        } else {
            if (this.IsInViewport(document.getElementById("section-2"))) {
                document.getElementById("section-1")?.scrollIntoView();
            } else if (this.IsInViewport(document.getElementById("section-3"))) {
                document.getElementById("section-2")?.scrollIntoView();
            }
        }
    }

    private IsInViewport(element: HTMLElement | null) {
        const rect = element?.getBoundingClientRect();
        if (!element) {
            return false;
        }

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
}