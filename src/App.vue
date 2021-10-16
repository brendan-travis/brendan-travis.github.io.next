<template>
  <div class="background"></div>
  <pageIndicator></pageIndicator>
  <particles></particles>
  <section id="landing" class="h-100vh">
    <div class="landing-heading">
      <h1>BRENDAN<br />TRAVIS</h1>
      <p>Full stack developer</p>
    </div>
  </section>
  <section id="about" class="h-100vh">
    <frame></frame>
    <div class="page-heading">
      <h2>About me</h2>
    </div>
  </section>
  <section id="dark-souls-checklist" class="h-100vh">
    <frame></frame>
    <div class="page-heading">
      <h2>Dark Souls III<br />Quest Checklist</h2>
    </div>
  </section>
  <section id="contact" class="h-100vh">
    <frame></frame>
    <div class="page-heading">
      <h2>Connect</h2>
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import PageIndicator from "./components/PageIndicator.vue";
import Particles from "@/components/Particles.vue";
import Frame from "@/components/Frame.vue";
import { Scroller } from "@/scripts/scroller";

@Options({
  components: {
    Frame,
    Particles,
    PageIndicator,
  },
})
export default class App extends Vue {
  mounted(): void {
    new Scroller();
  }
}
</script>

<style lang="scss">
@import "./src/styles/variables";
@import "./src/styles/fonts";
@import "./src/styles/utils";

.background {
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: -1;
  background: linear-gradient(
    0deg,
    $col-background-dark 0%,
    $col-background-light 100%
  );
}

.landing-heading {
  color: $col-main;
  position: absolute;
  left: 20%;
  user-select: none;
  margin: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;

  h1 {
    font-family: "Architects Daughter", cursive;
    font-size: 5rem;
  }

  p {
    font-size: 1.5rem;
  }

  @media (max-width: $mobile) {
    left: 25%;

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
}

.page-heading {
  color: $col-main;
  position: absolute;
  user-select: none;
  margin: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  left: -100%;
  transition: left 1s;

  h2 {
    font-family: "Comfortaa", cursive;
    font-size: 4rem;
  }

  @media (max-width: $mobile) {
    h2 {
      font-size: 1rem;
    }
  }
}

.selected-section {
  .page-heading {
    left: 15%;

    @media (max-width: $mobile) {
      left: 20%;
    }
  }
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  overflow: hidden;
}
</style>
