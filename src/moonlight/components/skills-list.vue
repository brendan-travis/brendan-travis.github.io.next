<template>
  <div class="skills-container">
    <div class="card">
      <div class="skill" v-for="item in skills" :key="item">
        <img v-bind:src="item.imagePath" />
        <div
          class="progress-bar"
          v-bind:style="{ width: `${item.percentage}%` }"
        ></div>
        <div
          class="progress-bar-remaining"
          v-bind:style="{ width: `${100 - item.percentage}%` }"
        ></div>
        <p>{{ item.percentage }}%</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

interface skill {
  imagePath: string;
  percentage: number;
}

export default class SkillsList extends Vue {
  skills: skill[] = [
    { imagePath: "/assets/dotnet.svg", percentage: 75 },
    { imagePath: "/assets/typescript.svg", percentage: 60 },
    { imagePath: "/assets/html5.svg", percentage: 60 },
    { imagePath: "/assets/kubernetes.svg", percentage: 35 },
  ];
}
</script>

<style lang="scss" scoped>
@import "../styles/variables";

.skills-container {
  width: 40%;
  height: 100%;
  position: absolute;
  right: 10%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  .card {
    background: $col-primary;
    height: 60%;
    padding-left: 32px;
    padding-right: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: rotate(7deg);

    .skill {
      display: flex;
      flex-direction: row;
      margin-top: 16px;
      margin-bottom: 16px;

      p {
        color: $col-base;
        margin-left: 16px;
      }

      img {
        width: 48px;
      }

      .progress-bar {
        height: 2px;
        margin: auto auto auto 16px;
        background: $col-base;
      }

      .progress-bar-remaining {
        height: 2px;
        margin: auto;
        background: $col-main;
      }
    }
  }
}
</style>
