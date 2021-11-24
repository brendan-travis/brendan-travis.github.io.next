<template>
  <div class="card">
    <h2>About Me</h2>
    <p>
      Brendan is a full stack developer that cut his teeth on C# and TypeScript
      development, working with cloud technologies, .NET APIs, and frontend
      JavaScript Frameworks. An independent worker capable of working across
      multi-disciplined teams and mentoring junior members with a focus on Agile
      iterative development cycles.
    </p>
    <p>
      Whether it be tweaking kubernetes containers on a cloud estate or
      perfectly aligning components on the front-end, Brendan has a high
      attention to detail and always looking for new technology opportunities to
      further his learning.
    </p>
    <p class="tags">
      Azure, AWS, Kubernetes, Docker, C#, .NET (Framework, Core), TypeScript,
      JavaScript, HTML, CSS/SCSS, Angular, Vue
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss" scoped>
@import "../styles/variables";

.card {
  background: $col-base-3;
  margin: 64px 20% 0;
  padding: 24px;
  position: relative;

  @media (max-width: $break-mobile-max) {
    margin-left: 5%;
    margin-right: 5%;
  }

  p {
    text-align: justify;
  }

  h2 {
    color: $col-base-1;
  }

  .tags {
    font-size: 0.75rem;
  }
}

.card:before {
  content: "";
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 20px 20px 0 0;
  border-color: $col-base-1 transparent transparent transparent;
  position: absolute;
  top: 0;
  left: 0;
}
.card:after {
  content: "";
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 20px 20px;
  border-color: transparent transparent $col-base-1 transparent;
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
