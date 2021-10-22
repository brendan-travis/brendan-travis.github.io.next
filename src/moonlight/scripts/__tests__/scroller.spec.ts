import { Scroller } from "@/moonlight/scripts/scroller";

describe("Scroller", () => {
  beforeEach(() => {
    document.body.innerHTML = `
            <div id="sections"></div>`;

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

  describe("constructor()", () => {
    it("Constructs without errors", () => {
      new Scroller();
    });
  });

  describe("WheelScroll()", () => {
    it("Scrolls to the next section if the wheel delta is greater than 0", () => {
      // Arrange
      const expectedHash = "#about";
      window.location.hash = "#landing";

      const event = new WheelEvent("wheel", { deltaY: 10 });

      // Act
      new Scroller().WheelScroll(event);

      // Assert
      expect(window.location.hash).toBe(expectedHash);
    });

    it("Scrolls to the previous section if the wheel delta is less than 0", () => {
      // Arrange
      const expectedHash = "#landing";
      window.location.hash = "#about";

      const event = new WheelEvent("wheel", { deltaY: -10 });

      // Act
      new Scroller().WheelScroll(event);

      // Assert
      expect(window.location.hash).toBe(expectedHash);
    });

    it("Does not scroll twice if the second call is within the scroll delay", () => {
      // Arrange
      const sut = new Scroller();
      const expectedHash = "#about";
      window.location.hash = "#landing";

      const event = new WheelEvent("wheel", { deltaY: 10 });

      // Act
      sut.WheelScroll(event);
      sut.WheelScroll(event);

      // Assert
      expect(window.location.hash).toBe(expectedHash);
    });

    it("Scrolls twice if the second call is outside of the scroll delay", async () => {
      // Arrange
      const sut = new Scroller();
      const expectedHash = "#dark-souls-checklist";
      window.location.hash = "#landing";

      const event = new WheelEvent("wheel", { deltaY: 10 });

      // Act
      sut.WheelScroll(event);
      await new Promise((f) => setTimeout(f, 2000));
      sut.WheelScroll(event);

      // Assert
      expect(window.location.hash).toBe(expectedHash);
    });
  });

  describe("KeyScroll()", () => {
    it("Scrolls to the next section if the key pressed is the down arrow", () => {
      // Arrange
      const expectedHash = "#about";
      window.location.hash = "#landing";

      const event = new KeyboardEvent("keydown", { key: "ArrowDown" });

      // Act
      new Scroller().KeyScroll(event);

      // Assert
      expect(window.location.hash).toBe(expectedHash);
    });

    it("Scrolls to the previous section if the key pressed is the up arrow", () => {
      // Arrange
      const expectedHash = "#landing";
      window.location.hash = "#about";

      const event = new KeyboardEvent("keydown", { key: "ArrowUp" });

      // Act
      new Scroller().KeyScroll(event);

      // Assert
      expect(window.location.hash).toBe(expectedHash);
    });

    it("Does not scroll if the key pressed is not a Y axis arrow key", () => {
      // Arrange
      const expectedHash = "#landing";
      window.location.hash = expectedHash;

      const event = new KeyboardEvent("keydown", { key: "ArrowLeft" });

      // Act
      new Scroller().KeyScroll(event);

      // Assert
      expect(window.location.hash).toBe(expectedHash);
    });
  });

  describe("TouchStart()", () => {
    it("Sets the touch start property to the pageY parameter on the first changed touch of the event", () => {
      // Arrange
      const sut = new Scroller();

      const container = document.getElementById("sections")!;
      const event = new TouchEvent("TouchStart", {
        changedTouches: [
          {
            pageY: 50,
            pageX: 0,
            clientX: 0,
            clientY: 0,
            force: 0,
            identifier: 0,
            radiusX: 0,
            radiusY: 0,
            rotationAngle: 0,
            screenX: 0,
            screenY: 0,
            target: container,
            altitudeAngle: 0,
            touchType: "direct",
            azimuthAngle: 0,
          },
        ],
      });

      // Act
      sut.TouchStart(event);

      // Assert
      expect(sut.touchStart).toBe(50);
    });
  });

  describe("TouchScroll()", () => {
    it("Scrolls to the next section if the touch end is above the touch start", () => {
      // Arrange
      const sut = new Scroller();
      sut.touchStart = 100;

      window.location.hash = "#landing";
      const expectedHash = "#about";
      const container = document.getElementById("sections")!;
      const event = new TouchEvent("TouchEnd", {
        changedTouches: [
          {
            pageY: 50,
            pageX: 0,
            clientX: 0,
            clientY: 0,
            force: 0,
            identifier: 0,
            radiusX: 0,
            radiusY: 0,
            rotationAngle: 0,
            screenX: 0,
            screenY: 0,
            target: container,
            altitudeAngle: 0,
            touchType: "direct",
            azimuthAngle: 0,
          },
        ],
      });

      // Act
      sut.TouchScroll(event);

      // Assert
      expect(window.location.hash).toBe(expectedHash);
    });

    it("Scrolls to the previous section if the touch end is below the touch start", () => {
      // Arrange
      const sut = new Scroller();
      sut.touchStart = 100;

      window.location.hash = "#contact";
      const expectedHash = "#dark-souls-checklist";
      const container = document.getElementById("sections")!;
      const event = new TouchEvent("TouchEnd", {
        changedTouches: [
          {
            pageY: 150,
            pageX: 0,
            clientX: 0,
            clientY: 0,
            force: 0,
            identifier: 0,
            radiusX: 0,
            radiusY: 0,
            rotationAngle: 0,
            screenX: 0,
            screenY: 0,
            target: container,
            altitudeAngle: 0,
            touchType: "direct",
            azimuthAngle: 0,
          },
        ],
      });

      // Act
      sut.TouchScroll(event);

      // Assert
      expect(window.location.hash).toBe(expectedHash);
    });
  });

  describe("ScrollBetweenSections()", () => {
    it("Does not change the location hash if current route is not valid when scrolling to the next section", () => {
      // Arrange
      const expectedHash = "#something-invalid";
      window.location.hash = "#something-invalid";

      // Act
      new Scroller().ScrollBetweenSections(true);

      // Assert
      expect(window.location.hash).toBe(expectedHash);
    });

    it("Does not change the location hash if current route is not valid when scrolling to the previous section", () => {
      // Arrange
      const expectedHash = "#something-invalid";
      window.location.hash = "#something-invalid";

      // Act
      new Scroller().ScrollBetweenSections(false);

      // Assert
      expect(window.location.hash).toBe(expectedHash);
    });

    it("Changes the location hash if current route is valid when scrolling to the next section", () => {
      // Arrange
      window.location.hash = "#landing";
      const expectedHash = "#about";

      // Act
      new Scroller().ScrollBetweenSections(true);

      // Assert
      expect(window.location.hash).toBe(expectedHash);
    });

    it("Changes the location hash if current route is valid when scrolling to the previous section", () => {
      // Arrange
      window.location.hash = "#contact";
      const expectedHash = "#dark-souls-checklist";

      // Act
      new Scroller().ScrollBetweenSections(false);

      // Assert
      expect(window.location.hash).toBe(expectedHash);
    });
  });

  describe("RefreshHash()", () => {
    it("Does not change the location hash", () => {
      // Arrange
      const expectedHash = "#test-hash";
      window.location.hash = expectedHash;

      // Act
      new Scroller().RefreshHash();

      // Assert
      expect(window.location.hash).toBe(expectedHash);
    });
  });
});
