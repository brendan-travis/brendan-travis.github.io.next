<template>
  <div class="top-container">
    <div class="image-placeholder"></div>
    <h1>Brendan Travis</h1>
  </div>
  <div class="page-container">
    <h2>Full-Stack Developer</h2>
    <p class="scroll-indicator">scroll down →</p>

    <div style="height: 100vh"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss" scoped>
@import "../styles/variables";

.top-container {
  height: 50vh;
  display: flex;
  flex-direction: column-reverse;

  @media (max-width: $break-mobile-max) {
    height: 66vh;
  }

  h1 {
    margin-bottom: 8px;

    @media (max-width: $break-mobile-max) {
      align-self: center;
    }

    @media (min-width: $break-mobile-min) {
      margin-left: 20%;
    }
  }

  .image-placeholder {
    width: 200px;
    height: 200px;
    background: blue;
    position: absolute;
    right: 10%;
    top: calc(50vh - 100px);

    @media (max-width: $break-mobile-max) {
      top: 20%;
      right: calc(50vw - 100px);
    }
  }
}

.page-container {
  background: $col-base-1;
  display: flex;
  flex-direction: column;

  h2 {
    color: $col-base-5;
    margin-top: 8px;

    @media (max-width: $break-mobile-max) {
      align-self: center;
    }

    @media (min-width: $break-mobile-min) {
      margin-left: 20%;
    }
  }

  p {
    color: $col-base-5;
    align-self: center;
  }

  .scroll-indicator {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    position: absolute;
    margin: 0;
    bottom: 8px;
    left: 8px;
    animation: bounce-bottom 2s ease infinite;
  }
}

@keyframes bounce-bottom {
  0% {
    padding-bottom: 0;
  }
  50% {
    padding-bottom: 16px;
  }
  100% {
    padding-bottom: 0;
  }
}
</style>
