<template>
  <div class="page-container">
    <h1>Brendan Travis</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss" scoped>
@import "../styles/variables";

.page-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;

  h1 {
    margin-top: 240px;
    margin-left: 24px;
  }
}
</style>
