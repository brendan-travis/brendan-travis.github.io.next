<template>
  <div class="container">
    <h2>Personal Projects</h2>
    <div class="card">
      <img class="image" src="@/assets/api_playground.png" />
      <div class="content">
        <h3>API Playground</h3>
        <p>
          A .NET API built for testing purposes with the aim to provide a fully
          functional API to mock backend functionality when developing or
          testing frontend systems.
        </p>
        <p>
          Built with a fully orchestrate container environment with Kubernetes
          and numerous build scripts to provide a local interpretation of a CD
          pipeline.
        </p>
        <a href="https://github.com/brendan-travis/api-playground">
          Click to view the source code.
        </a>
        <p class="tags">.NET, Web API, Kubernetes, Docker</p>
      </div>
    </div>
    <div class="card">
      <img class="image" src="@/assets/ds3_quest_checklist.jpg" />
      <div class="content">
        <h3>Dark Souls III Quest Checklist</h3>
        <p>
          A lightweight checklist to assist in completing all Dark Souls III
          quest-lines in a single play-through.
        </p>
        <p>
          Built with Angular as a way to learn the framework and get to grips
          with the component level design that modern JavaScript frameworks
          offer. The app has PWA support and manages state to provide a
          consistent experience across reloads.
        </p>
        <a
          href="https://brendan-travis.github.io/dark-souls-iii.quest-tracker/"
        >
          Click to view the app.
        </a>
        <p class="tags">TypeScript, Angular, PWA, HTML, SCSS</p>
      </div>
    </div>
    <div class="card">
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
          <span class="code">HourTickover</span> parameter to 20 will trigger
          the hour event when the clock reaches 20 past the hour. Also setting
          the <span class="code">DayTickover</span> parameter to 6 will trigger
          the day event when the clock reaches 6:20.
        </p>
        <a href="https://github.com/brendan-travis/rpgmv.real-time-clock">
          Click to view the source code.
        </a>
        <p class="tags">JavaScript, RPG Maker MV</p>
      </div>
    </div>
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

  @media (max-width: $break-mobile-max) {
    padding: 32px 10% 64px;
  }

  .card {
    margin-top: 24px;
    display: flex;
    flex-direction: row;

    @media (max-width: $break-mobile-max) {
      flex-direction: column;
    }

    a {
      color: unset;
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
      text-align: justify;

      @media (max-width: $break-mobile-max) {
        margin-top: 8px;
      }

      @media (min-width: $break-mobile-min) {
        margin-left: 24px;
      }

      .tags {
        font-size: 0.75rem;
      }

      .code {
        color: $col-base-2;
        font-weight: bold;
      }

      h3 {
        margin-top: 0;
      }
    }
  }
}
</style>
