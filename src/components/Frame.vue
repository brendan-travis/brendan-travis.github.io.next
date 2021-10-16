<template>
  <div class="frame-container">
    <div class="top-frame"></div>
    <div class="bottom-frame"></div>
    <div class="left-frame"></div>
    <div class="right-frame"></div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Frame extends Vue {
  private animationClass = "animate";
  private animationDelay = 500;

  mounted(): void {
    window.addEventListener("hashchange", () =>
      this.SetAnimationsForCurrentPage()
    );
    window.addEventListener("load", () => this.SetAnimationsForCurrentPage(0));
  }

  SetAnimationsForCurrentPage(animationDelay?: number): void {
    const currentHash = window.location.hash;
    document
      .getElementsByClassName("selected-section")[0]
      ?.classList.remove("selected-section");

    switch (currentHash) {
      case "":
      case "#landing":
        document.getElementById("landing")?.classList.add("selected-section");
        break;
      case "#about":
        document.getElementById("about")?.classList.add("selected-section");
        this.RemoveFrameAnimations("about");
        setTimeout(
          () => this.ApplyFrameAnimations("about"),
          animationDelay ?? this.animationDelay
        );
        break;
      case "#dark-souls-checklist":
        document
          .getElementById("dark-souls-checklist")
          ?.classList.add("selected-section");
        this.RemoveFrameAnimations("dark-souls-checklist");
        setTimeout(
          () => this.ApplyFrameAnimations("dark-souls-checklist"),
          animationDelay ?? this.animationDelay
        );
        break;
      case "#contact":
        document.getElementById("contact")?.classList.add("selected-section");
        this.RemoveFrameAnimations("contact");
        setTimeout(
          () => this.ApplyFrameAnimations("contact"),
          animationDelay ?? this.animationDelay
        );
        break;
    }
  }

  RemoveFrameAnimations(sectionId: string): void {
    const section = document.getElementById(sectionId);

    section
      ?.getElementsByClassName("top-frame")[0]
      ?.classList.remove(this.animationClass);
    section
      ?.getElementsByClassName("bottom-frame")[0]
      ?.classList.remove(this.animationClass);
    section
      ?.getElementsByClassName("left-frame")[0]
      ?.classList.remove(this.animationClass);
    section
      ?.getElementsByClassName("right-frame")[0]
      ?.classList.remove(this.animationClass);
  }

  ApplyFrameAnimations(sectionId: string): void {
    const section = document.getElementById(sectionId);

    section
      ?.getElementsByClassName("top-frame")[0]
      ?.classList.add(this.animationClass);
    section
      ?.getElementsByClassName("bottom-frame")[0]
      ?.classList.add(this.animationClass);
    section
      ?.getElementsByClassName("left-frame")[0]
      ?.classList.add(this.animationClass);
    section
      ?.getElementsByClassName("right-frame")[0]
      ?.classList.add(this.animationClass);
  }
}
</script>

<style lang="scss" scoped>
@import "./src/styles/variables";

.frame-container {
  position: absolute;
  height: 100%;
  width: 100%;

  $frame-border: 48px;
  $frame-border-mobile: 16px;

  .top-frame {
    width: 0;
    height: 1px;
    background: $col-main;
    position: absolute;

    top: $frame-border;
    left: $frame-border;
    @media (max-width: $mobile) {
      top: $frame-border-mobile;
      left: $frame-border-mobile;
    }
  }

  .bottom-frame {
    width: 0;
    height: 1px;
    background: $col-main;
    position: absolute;

    bottom: $frame-border;
    right: $frame-border;
    @media (max-width: $mobile) {
      bottom: $frame-border-mobile;
      right: $frame-border-mobile;
    }
  }

  .left-frame {
    height: 0;
    width: 1px;
    background: $col-main;
    position: absolute;

    left: $frame-border;
    bottom: $frame-border;
    @media (max-width: $mobile) {
      left: $frame-border-mobile;
      bottom: $frame-border-mobile;
    }
  }

  .right-frame {
    height: 0;
    width: 1px;
    background: $col-main;
    position: absolute;

    right: $frame-border;
    top: $frame-border;
    @media (max-width: $mobile) {
      right: $frame-border-mobile;
      top: $frame-border-mobile;
    }
  }

  .top-frame.animate,
  .bottom-frame.animate {
    animation: draw-horizontal 1.5s ease-in-out 1 normal forwards;
  }

  .left-frame.animate,
  .right-frame.animate {
    animation: draw-vertical 1.5s ease-in-out 1 normal forwards;
  }

  @keyframes draw-horizontal {
    0% {
      width: 0;
    }
    100% {
      width: calc(100% - (2 * #{$frame-border}));
    }
  }

  @keyframes draw-vertical {
    0% {
      height: 0;
    }
    100% {
      height: calc(100% - (2 * #{$frame-border}));
    }
  }

  @media (max-width: $mobile) {
    @keyframes draw-horizontal {
      0% {
        width: 0;
      }
      100% {
        width: calc(100% - (2 * #{$frame-border-mobile}));
      }
    }

    @keyframes draw-vertical {
      0% {
        height: 0;
      }
      100% {
        height: calc(100% - (2 * #{$frame-border-mobile}));
      }
    }
  }
}
</style>
