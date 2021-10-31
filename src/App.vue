<template>
  <!--  <moonlight></moonlight>-->
  <pass></pass>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
// import Moonlight from "@/moonlight/components/_moonlight.vue";
import Pass from "@/pass/components/_pass.vue";

@Options({
  components: {
    Pass,
    // Moonlight,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss"></style>
