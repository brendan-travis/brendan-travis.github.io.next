import {AnimationManager} from "./animation-manager";

describe("AnimationManager", () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <section id="about" class="h-100vh">
                <div class="frame-container">
                    <div class="top-frame"></div>
                    <div class="bottom-frame"></div>
                    <div class="left-frame"></div>
                    <div class="right-frame"></div>
                </div>
            </section>
            <section id="dark-souls-checklist">
                <div class="frame-container">
                    <div class="top-frame"></div>
                    <div class="bottom-frame"></div>
                    <div class="left-frame"></div>
                    <div class="right-frame"></div>
                </div>
            </section>`;

        Object.defineProperty(window, "location", {
            value: {
                href: "https://example.com"
            },
            writable: true
        });
    });

    afterEach(() => {
        document.body.innerHTML = "";
    });

    describe("constructor", () => {
        it("Constructs without errors", () => {
            new AnimationManager();
        });
    });

    describe("SetAnimationsForCurrentPage", () => {
        it("Sets the animation classes on the correct class when provided with a valid hash", async () => {
            // Arrange
            const animationDelay = 10;
            const section = "about";
            const sectionElement = document.getElementById(section);
            const topFrame = sectionElement?.getElementsByClassName("frame-container")[0]?.getElementsByClassName("top-frame")[0];
            const bottomFrame = sectionElement?.getElementsByClassName("frame-container")[0]?.getElementsByClassName("bottom-frame")[0];
            const leftFrame = sectionElement?.getElementsByClassName("frame-container")[0]?.getElementsByClassName("left-frame")[0];
            const rightFrame = sectionElement?.getElementsByClassName("frame-container")[0]?.getElementsByClassName("right-frame")[0];

            window.location.hash = `#${section}`;

            // Act
            new AnimationManager().SetAnimationsForCurrentPage(animationDelay);
            await new Promise(f => setTimeout(f, animationDelay));

            // Assert
            expect(topFrame?.classList).toContain("animate");
            expect(bottomFrame?.classList).toContain("animate");
            expect(leftFrame?.classList).toContain("animate");
            expect(rightFrame?.classList).toContain("animate");
        });
    });

    describe("RemoveFrameAnimations", () => {
        it("Removes the animation class from given section", () => {
            // Arrange
            const section = "dark-souls-checklist";
            const sectionElement = document.getElementById(section);
            const topFrame = sectionElement?.getElementsByClassName("frame-container")[0]?.getElementsByClassName("top-frame")[0];
            const bottomFrame = sectionElement?.getElementsByClassName("frame-container")[0]?.getElementsByClassName("bottom-frame")[0];
            const leftFrame = sectionElement?.getElementsByClassName("frame-container")[0]?.getElementsByClassName("left-frame")[0];
            const rightFrame = sectionElement?.getElementsByClassName("frame-container")[0]?.getElementsByClassName("right-frame")[0];

            topFrame?.classList.add("animate");
            bottomFrame?.classList.add("animate");
            leftFrame?.classList.add("animate");
            rightFrame?.classList.add("animate");

            // Act
            new AnimationManager().RemoveFrameAnimations(section);

            // Assert
            expect(topFrame?.classList).not.toContain("animate");
            expect(bottomFrame?.classList).not.toContain("animate");
            expect(leftFrame?.classList).not.toContain("animate");
            expect(rightFrame?.classList).not.toContain("animate");
        });

        it("Does nothing if the section does not exist", () => {
            // Act
            new AnimationManager().RemoveFrameAnimations("unknown-section-just-for-testing");
        });
    });

    describe("ApplyFrameAnimations", () => {
        it("Applies the animation class on the given section", () => {
            // Arrange
            const section = "about";
            const sectionElement = document.getElementById(section);
            const topFrame = sectionElement?.getElementsByClassName("frame-container")[0]?.getElementsByClassName("top-frame")[0];
            const bottomFrame = sectionElement?.getElementsByClassName("frame-container")[0]?.getElementsByClassName("bottom-frame")[0];
            const leftFrame = sectionElement?.getElementsByClassName("frame-container")[0]?.getElementsByClassName("left-frame")[0];
            const rightFrame = sectionElement?.getElementsByClassName("frame-container")[0]?.getElementsByClassName("right-frame")[0];

            // Act
            new AnimationManager().ApplyFrameAnimations(section);

            // Assert
            expect(topFrame?.classList).toContain("animate");
            expect(bottomFrame?.classList).toContain("animate");
            expect(leftFrame?.classList).toContain("animate");
            expect(rightFrame?.classList).toContain("animate");
        });

        it("Does nothing if the section does not exist", () => {
            // Act
            new AnimationManager().ApplyFrameAnimations("unknown-section-just-for-testing");
        });
    });
});