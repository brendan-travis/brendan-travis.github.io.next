import {PageSelector} from "./page-selector";

describe("PageSelector", () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <div id="selector-container">
                <button id="selector-i"></button>
                <button id="selector-ii"></button>
                <button id="selector-iii"></button>
                <button id="selector-iv"></button>
            </div>`;

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
            // Act/Assert
            new PageSelector();
        });
    });

    describe("Select", () => {
        it("Sets window href to the page input parameter", () => {
            // Arrange
            const sut = new PageSelector();
            const button = document.getElementById("selector-iii") as HTMLButtonElement;
            const page = "page-number-3-for-testing-purposes";

            // Act
            sut.Select(button, page);

            // Act
            expect(window.location.href).toBe(page);
        });

        it("Adds the selected class to the button that was passed in", () => {
            // Arrange
            const button = document.getElementById("selector-iii") as HTMLButtonElement;
            const page = "page-number-3-for-testing-purposes";

            // Act
            new PageSelector().Select(button, page);

            // Act
            expect(button.classList).toContain("selected");
        });
    });

    describe("SelectFromRoute", () => {
        it("Selects the expected selector when location hash is valid", () => {
            // Arrange
            window.location.hash = "#landing";

            // Act
            new PageSelector().SelectFromRoute();

            // Assert
            expect(document.getElementById("selector-i")!.classList).toContain("selected");
        });

        it("Selects no objects when the expected page is an unexpected value", () => {
            // Arrange
            window.location.hash = "#unknown";

            // Act
            new PageSelector().SelectFromRoute();

            // Assert
            expect(document.getElementById("selector-i")!.classList).not.toContain("selected");
            expect(document.getElementById("selector-ii")!.classList).not.toContain("selected");
            expect(document.getElementById("selector-iii")!.classList).not.toContain("selected");
            expect(document.getElementById("selector-iv")!.classList).not.toContain("selected");
        });
    });

    describe("UnselectAll", () => {
        it("Removes selected class from all selectors", () => {
            // Arrange
            const selectorI = document.getElementById("selector-i");
            const selectorII = document.getElementById("selector-ii");
            const selectorIII = document.getElementById("selector-iii");
            const selectorIV = document.getElementById("selector-iv");

            selectorI!.classList.add("selected");
            selectorII!.classList.add("selected");
            selectorIII!.classList.add("selected");
            selectorIV!.classList.add("selected");

            // Act
            new PageSelector().UnselectAll();

            // Act
            expect(selectorI).not.toContain("selected");
            expect(selectorII).not.toContain("selected");
            expect(selectorIII).not.toContain("selected");
            expect(selectorIV).not.toContain("selected");
        });
    });
});
