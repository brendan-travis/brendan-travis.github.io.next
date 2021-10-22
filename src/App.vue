<template>
  <moonlight></moonlight>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Moonlight from "@/moonlight/components/_moonlight.vue";

@Options({
  components: {
    Moonlight,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss"></style>
