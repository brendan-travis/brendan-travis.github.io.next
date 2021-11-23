<template>
  <div class="footer-container">
    <p>2021 Brendan Travis</p>
    <a href="https://github.com/brendan-travis">GitHub</a>
    <a href="https://www.linkedin.com/in/brendan-travis-029b89166/">LinkedIn</a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss" scoped>
@import "../styles/variables";

.footer-container {
  display: flex;
  margin: 16px auto;

  p,
  a {
    color: $col-base-5;
    margin: 8px;
    font-size: 0.75rem;
  }
}
</style>
