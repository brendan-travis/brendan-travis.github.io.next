import PageIndicator from "@/components/page-indicator.vue";
import { shallowMount } from "@vue/test-utils";

describe("Page Indicator Component", () => {
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
        href: "https://example.com",
      },
      writable: true,
    });
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("Renders without errors", () => {
    // Act/Assert
    shallowMount(PageIndicator);
  });

  describe("SelectFromRoute()", () => {
    it("Selects the expected selector when location hash is valid", () => {
      // Arrange
      const sut = shallowMount(PageIndicator).vm as typeof PageIndicator;
      window.location.hash = "#landing";

      // Act
      sut.SelectFromRoute();

      // Assert
      expect(document.getElementById("selector-i")?.classList).toContain(
        "selected"
      );
    });

    it("Selects no objects when the expected page is an unexpected value", () => {
      // Arrange
      const sut = shallowMount(PageIndicator).vm as typeof PageIndicator;
      window.location.hash = "#unknown";

      // Act
      sut.SelectFromRoute();

      // Assert
      expect(document.getElementById("selector-i")?.classList).not.toContain(
        "selected"
      );
      expect(document.getElementById("selector-ii")?.classList).not.toContain(
        "selected"
      );
      expect(document.getElementById("selector-iii")?.classList).not.toContain(
        "selected"
      );
      expect(document.getElementById("selector-iv")?.classList).not.toContain(
        "selected"
      );
    });
  });

  describe("UnselectAll()", () => {
    it("Removes selected class from all selectors", () => {
      // Arrange
      const sut = shallowMount(PageIndicator).vm as typeof PageIndicator;
      const selectorI = document.getElementById("selector-i");
      const selectorII = document.getElementById("selector-ii");
      const selectorIII = document.getElementById("selector-iii");
      const selectorIV = document.getElementById("selector-iv");

      selectorI?.classList.add("selected");
      selectorII?.classList.add("selected");
      selectorIII?.classList.add("selected");
      selectorIV?.classList.add("selected");

      // Act
      sut.UnselectAll();

      // Act
      expect(selectorI).not.toContain("selected");
      expect(selectorII).not.toContain("selected");
      expect(selectorIII).not.toContain("selected");
      expect(selectorIV).not.toContain("selected");
    });
  });
});
