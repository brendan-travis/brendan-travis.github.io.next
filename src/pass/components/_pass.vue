<template>
  <welcome></welcome>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Welcome from "./welcome.vue";

@Options({
  components: {
    Welcome,
  },
})
export default class Pass extends Vue {}
</script>

<style lang="scss">
@import "../styles/variables";
@import "../styles/_fonts.scss";

html {
  background: $col-base-3;
  color: $col-base-1;
}
</style>
