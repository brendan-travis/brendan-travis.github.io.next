<template>
  <div id="particle-container"></div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Particles extends Vue {
  private container: HTMLDivElement | undefined;
  private maxWidth: number | undefined;
  private maxHeight: number | undefined;
  private readonly numberOfParticles = 30;
  private readonly colours = ["#4e242a", "#fcb360", "#fdee98"];

  mounted(): void {
    window.addEventListener("resize", () => {
      this.ClearParticles();
      this.InitialiseParticles();
    });

    this.InitialiseParticles();
  }

  InitialiseParticles(): void {
    this.container = document.getElementById(
      "particle-container"
    ) as HTMLDivElement;

    this.maxWidth = this.container?.offsetWidth * 1.2 ?? 0;
    this.maxHeight = this.container?.offsetHeight * 1.2 ?? 0;

    for (let i = 0; i < this.numberOfParticles; i++) {
      this.CreateParticle();
    }
  }

  CreateParticle(): void {
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

    document.styleSheets[0].insertRule(
      animation,
      document.styleSheets[0].cssRules.length - 1
    );

    const particle = document.createElement("div");

    particle.classList.add("particle");
    particle.style.animation = `${animationName} ${animationLength}s infinite`;
    particle.style.height = particle.style.width = `${width}px`;
    particle.style.filter = `blur(${blurRadius}px)`;
    particle.style.background = this.colours[colour];

    this.container?.appendChild(particle);
  }

  ClearParticles(): void {
    if (this.container) {
      this.container.innerHTML = "";
    }
  }

  GetRandomNumberBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
</script>

<style lang="scss">
.particle {
  position: absolute;
  border-radius: 100px;
}

#particle-container {
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: -1;
}
</style>
