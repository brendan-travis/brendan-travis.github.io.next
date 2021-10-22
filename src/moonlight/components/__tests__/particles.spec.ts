import { shallowMount } from "@vue/test-utils";
import Particles from "@/moonlight/components/particles.vue";

describe("Particles Component", () => {
  beforeEach(() => {
    document.body.innerHTML = `
            <div id="particle-container"></div>
            <style>
                #particle-container {
                    width: 10px;
                    height: 10px;
                }
            </style>`;
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("Renders without errors", () => {
    shallowMount(Particles);
  });

  describe("InitialiseParticles()", () => {
    it("Initialises on construction and creates correct number of particles", () => {
      // Act
      shallowMount(Particles).vm;

      // Assert
      const particles = document.getElementsByClassName("particle");
      expect(particles.length).toBe(30);
    });

    it("Creates a second batch of particles doubling the total count if called after construction", () => {
      // Arrange
      const sut = shallowMount(Particles).vm as typeof Particles;

      // Act
      sut.InitialiseParticles();

      // Assert
      const particles = document.getElementsByClassName("particle");
      expect(particles.length).toBe(60);
    });
  });

  describe("CreateParticle()", () => {
    it("Adds a particle to the particle container", () => {
      // Arrange
      const sut = shallowMount(Particles).vm as typeof Particles;

      // Act
      sut.CreateParticle();

      // Assert
      const particles = document.getElementsByClassName("particle");
      expect(particles.length).toBe(31);
    });
  });

  describe("ClearParticles()", () => {
    it("Removes all particles from the container", () => {
      // Arrange
      const sut = shallowMount(Particles).vm as typeof Particles;
      let particles = document.getElementsByClassName("particle");
      expect(particles.length).toBe(30);

      // Act
      sut.ClearParticles();

      // Act
      particles = document.getElementsByClassName("particle");
      expect(particles.length).toBe(0);
    });
  });

  describe("GetRandomNumberBetween()", () => {
    it("Gets a random number in between the range (x10)", () => {
      // Arrange
      const sut = shallowMount(Particles).vm as typeof Particles;
      const min = 1;
      const max = 10;

      // Act
      for (let i = 0; i < 10; i++) {
        const result = sut.GetRandomNumberBetween(min, max);

        // Assert
        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThanOrEqual(max);
      }
    });
  });
});
