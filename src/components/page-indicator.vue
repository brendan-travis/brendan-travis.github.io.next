<template>
  <div id="selector-container" class="page-indicator">
    <div id="selector-i"></div>
    <div id="selector-ii"></div>
    <div id="selector-iii"></div>
    <div id="selector-iv"></div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class PageIndicator extends Vue {
  private selectedClass = "selected";
  private selectorContainer = "selector-container";

  mounted(): void {
    window.addEventListener("hashchange", () => this.SelectFromRoute());
    this.SelectFromRoute();
  }

  SelectFromRoute(): void {
    this.UnselectAll();
    const currentRoute = window.location.hash;

    switch (currentRoute) {
      case "":
      case "#landing":
        document
          .getElementById("selector-i")
          ?.classList.add(this.selectedClass);
        break;
      case "#about":
        document
          .getElementById("selector-ii")
          ?.classList.add(this.selectedClass);
        break;
      case "#dark-souls-checklist":
        document
          .getElementById("selector-iii")
          ?.classList.add(this.selectedClass);
        break;
      case "#contact":
        document
          .getElementById("selector-iv")
          ?.classList.add(this.selectedClass);
        break;
    }
  }

  UnselectAll(): void {
    const selectedItems = document
      .getElementById(this.selectorContainer)
      ?.getElementsByClassName(this.selectedClass);
    if (selectedItems) {
      for (const item of selectedItems) {
        item.classList.remove(this.selectedClass);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./src/styles/variables";

.page-indicator {
  position: fixed;
  left: 48px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 10;

  @media (max-width: $mobile) {
    left: 16px;
  }

  div {
    background: $col-main;
    padding: 0;
    border: 0;
    margin-top: 12px;
    margin-left: 8px;
    margin-bottom: 11px;
    height: 1px;
    width: 16px;
    color: $col-main;
    transition: width ease-in-out 0.5s;
  }

  div.selected {
    width: 32px;
  }

  button.clickable {
    cursor: pointer;
  }
}
</style>
