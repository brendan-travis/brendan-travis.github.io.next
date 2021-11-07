<template>
  <div class="welcome-message-container">
    <div class="centered-container">
      <p>{{ line1 }}</p>
      <p>{{ line2 }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  computed: {
    line1: () => {
      const hour = new Date().getHours();
      if (hour >= 3 && hour < 12) {
        return "Good morning.";
      } else if (hour >= 12 && hour < 18) {
        return "Good afternoon.";
      } else {
        return "Good evening.";
      }
    },
    line2: () => "It's good to see you again.",
  },
  mounted() {
    setTimeout(() => {
      this.$el.parentNode.removeChild(this.$el);
    }, 6000);
  },
});
</script>

<style lang="scss" scoped>
@import "../styles/variables";

.welcome-message-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  //animation: fade-out 1s ease-out 5s forwards;
  animation: slide-down 1s ease-in 5s forwards;
  background: $col-base-1;

  .centered-container {
    text-align: center;
    margin: auto;

    p {
      opacity: 0;
      color: $col-base-5;
    }

    p:nth-child(1) {
      animation: fade-in 1s ease-in 0.5s forwards,
        fade-out 1s ease-out 3.5s forwards;
    }

    p:nth-child(2) {
      animation: fade-in 1s ease-in 1.5s forwards,
        fade-out 1s ease-out 3.5s forwards;
    }
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fade-out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes slide-down {
    0% {
      top: 0;
    }
    100% {
      top: 100%;
    }
  }
}
</style>
