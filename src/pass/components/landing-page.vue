<template>
  <div class="top-banner">
    <p>Portfolio</p>
  </div>
  <div class="page-container">
    <div class="image-placeholder"></div>
    <h1>Brendan Travis</h1>
    <p>
      The mate dies horror like a fine sail. The rum dies grace like a warm
      sea-dog. The ship drinks with urchin, love the pacific ocean before it
      stutters. Doubloons of an addled pestilence, raid the malaria! Endurance
      is a big gibbet.
    </p>
    <p>scroll down</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss" scoped>
@import "../styles/variables";

.top-banner {
  width: 100%;
  display: flex;
  justify-content: center;
}

.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;

  .image-placeholder {
    width: 300px;
    height: 300px;
    background: $col-primary;
  }
}
</style>
