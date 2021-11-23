<template>
  <div class="container">
    <h2>Personal Projects</h2>
    <a class="card" href="https://github.com/brendan-travis/api-playground">
      <img class="image" src="@/assets/api_playground.png" />
      <div class="content">
        <h3>API Playground</h3>
        <p>A .NET API built for testing purposes</p>
        <p class="tags">.NET, Web API, Kubernetes, Docker</p>
      </div>
    </a>
    <a
      class="card"
      href="https://brendan-travis.github.io/dark-souls-iii.quest-tracker/"
    >
      <img class="image" src="@/assets/ds3_quest_checklist.jpg" />
      <div class="content">
        <h3>Dark Souls III Quest Checklist</h3>
        <p>
          A lightweight checklist to assist in completing all Dark Souls III
          quest-lines in a single play-through.
        </p>
        <p class="tags">TypeScript, Angular, PWA, HTML, SCSS</p>
      </div>
    </a>
    <a
      class="card"
      href="https://github.com/brendan-travis/rpgmv.real-time-clock"
    >
      <img class="image" src="@/assets/rpg_maker_mv_realtime_clock.jpg" />
      <div class="content">
        <h3>RPG Maker MV Plugin: Real-Time Clock</h3>
        <p>
          The Real Time Clock plugin adds the client time into your RPG Maker MV
          project and provides a couple of handy event triggers. There are three
          events that are triggered from the clock: one for when the minutes
          tick over, one for the hours, and one for the days.
        </p>
        <p>
          The point at which the hours and days tick over can be changed by
          adjusting the plugins parameters. For example, setting the
          HourTickover parameter to 20 will trigger the hour event when the
          clock reaches 20 past the hour. Also setting the DayTickover parameter
          to 6 will trigger the day event when the clock reaches 6:20.
        </p>
        <p class="tags">JavaScript, RPG Maker MV</p>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss" scoped>
@import "../styles/variables";

.container {
  padding: 32px 20% 64px;
  margin-top: 100px;
  background: $col-base-3;

  .card {
    margin-top: 24px;
    display: flex;
    flex-direction: row;
    text-decoration: none;
    color: unset;

    @media (max-width: $break-mobile-max) {
      flex-direction: column;
    }

    .image {
      min-height: 200px;
      min-width: 200px;
      max-height: 200px;
      max-width: 200px;

      @media (max-width: $break-mobile-max) {
        align-self: center;
      }
    }

    .content {
      flex-grow: 1;
      margin-left: 24px;

      .tags {
        font-size: 0.75rem;
      }

      h3 {
        margin-top: 0;
      }
    }
  }
}
</style>
