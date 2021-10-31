<template>
  <landing-page></landing-page>
  <welcome></welcome>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import welcome from "@/pass/components/welcome.vue";
import landingPage from "@/pass/components/landing-page.vue";

export default defineComponent({
  components: {
    landingPage,
    welcome,
  },
});
</script>

<style lang="scss">
@import "../styles/variables";
@import "../styles/_fonts.scss";

html {
  background: $col-base-3;
  color: $col-base-1;
  user-select: none;
}

body {
  margin: 0;
}
</style>
