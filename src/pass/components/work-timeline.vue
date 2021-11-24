<template>
  <div class="timeline">
    <h2>History</h2>
    <div class="line"></div>
    <div class="timeline-details">
      <div class="point-container">
        <div class="point"></div>
        <div>
          <h3>Answer <span>Digital</span></h3>
          <p>Oct 2021 - Present</p>
          <p>Senior Developer</p>
          <br />
          <p>Jan 2020 - Oct 2021</p>
          <p>Level 2 Developer / Mid-Level Developer</p>
          <br />
          <p>Jan 2019 - Jan 2020</p>
          <p>Level 1 Developer / Junior Developer</p>
          <br />
          <p>Oct 2018 - Jan 2019</p>
          <p>Academy Developer</p>
        </div>
      </div>
      <div class="point-container">
        <div class="point"></div>
        <div>
          <h3><span>Eclipse</span> Legal Systems Ltd</h3>
          <p>Sep 2016 - Oct 2018</p>
          <p>Project Consultant</p>
        </div>
      </div>
      <div class="point-container">
        <div class="point"></div>
        <div>
          <h3>University of <span>Huddersfield</span></h3>
          <p>2012-2016</p>
          <p>Music Technology & Audio Systems</p>
          <p>BSc with First Class Honours</p>
        </div>
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

.timeline {
  display: flex;
  flex-direction: column;
  margin-left: 30%;
  margin-top: 100px;

  @media (max-width: $break-mobile-max) {
    margin-left: 15%;
  }

  h2 {
    color: $col-base-5;
    position: absolute;
    text-orientation: mixed;
    writing-mode: vertical-rl;
    margin-left: -40px;
    margin-top: 20px;
  }

  .line {
    height: 540px;
    width: 2px;
    margin-left: 9px;
    background: $col-base-5;
    position: absolute;
  }

  .timeline-details {
    padding-top: 8px;
    z-index: 10;

    .point-container {
      display: flex;
      flex-direction: row;
      margin-top: 32px;
      margin-bottom: 32px;

      .point {
        height: 16px;
        width: 16px;
        background-color: $col-base-1;
        border-radius: 50%;
        border: 2px solid $col-base-5;
      }

      h3 {
        color: $col-base-5;
        margin: 0;
        padding-left: 16px;

        span {
          color: $col-primary;
        }
      }

      p {
        color: $col-base-5;
        margin: 0;
        padding-left: 24px;
      }
    }
  }
}
</style>
