import {Particles} from "./particles";

describe("Particles", () => {
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

    describe("constructor", () => {
        it("Constructs without errors", () => {
           new Particles(0);
        });
    });

    describe("InitialiseParticles", () => {
        it("Initialises on construction and creates correct number of particles", () => {
            // Act
            new Particles(10);

            // Assert
            const particles = document.getElementsByClassName("particle");
            expect(particles.length).toBe(10);
        });

        it("Creates a second batch of particles doubling the total count if called after construction", () => {
            // Arrange
            const sut = new Particles(10);

            // Act
            sut.InitialiseParticles();

            // Assert
            const particles = document.getElementsByClassName("particle");
            expect(particles.length).toBe(20);
        });
    });

    describe("CreateParticle", () => {
        it("Adds a particle to the particle container", () => {
            // Act
            new Particles(0).CreateParticle();

            // Assert
            const particles = document.getElementsByClassName("particle");
            expect(particles.length).toBe(1);
        });
    });

    describe("ClearParticles", () => {
        it("Removes all particles from the container", () => {
            // Arrange
            const sut = new Particles(10);
            let particles = document.getElementsByClassName("particle");
            expect(particles.length).toBe(10);

            // Act
            sut.ClearParticles();

            // Act
            particles = document.getElementsByClassName("particle");
            expect(particles.length).toBe(0);
        });
    });

    describe("GetRandomNumberBetween", () => {
        it("Gets a random number in between the range (x10)", () => {
            // Arrange
            const sut = new Particles(0);
            const min = 1;
            const max = 10;

            // Act
            for (let i = 0; i < 10; i++) {
                let result = sut.GetRandomNumberBetween(min, max);

                // Assert
                expect(result).toBeGreaterThanOrEqual(min);
                expect(result).toBeLessThanOrEqual(max);
            }
        });
    });
});
