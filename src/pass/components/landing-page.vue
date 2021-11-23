<template>
  <div class="top-container">
    <img class="image" src="@/assets/profile.jpg" />
    <h1>Brendan Travis</h1>
  </div>
  <div class="page-container">
    <h2>Full-Stack Developer</h2>
    <p class="scroll-indicator">scroll down →</p>
    <about-me></about-me>
    <work-timeline></work-timeline>
    <project-list></project-list>
    <siteFooter></siteFooter>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import aboutMe from "@/pass/components/about-me.vue";
import workTimeline from "@/pass/components/work-timeline.vue";
import projectList from "@/pass/components/project-list.vue";
import siteFooter from "@/pass/components/site-footer.vue";

export default defineComponent({
  components: {
    aboutMe,
    workTimeline,
    projectList,
    siteFooter,
  },
});
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

  .image {
    width: 300px;
    height: 300px;
    position: absolute;
    right: 20%;
    border-radius: 150px;
    top: calc(50vh - 150px);

    @media (max-width: $break-mobile-max) {
      width: 200px;
      height: 200px;
      border-radius: 100px;
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
      margin-bottom: 33vh;
    }

    @media (min-width: $break-mobile-min) {
      margin-left: 20%;
      margin-bottom: 50vh;
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
