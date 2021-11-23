<template>
  <div class="card">
    <h2>About Me</h2>
    <p>
      A wonderful serenity has taken possession of my entire soul, like these
      sweet mornings of spring which I enjoy with my whole heart. I am alone,
      and feel the charm of existence in this spot, which was created for the
      bliss of souls like mine. I am so happy, my dear friend, so absorbed in
      the exquisite sense of mere tranquil existence, that I neglect my talents.
      I should be incapable of drawing a single stroke at the present moment;
      and yet I feel that I never was a greater artist than now.
    </p>
    <p>
      When, while the lovely valley teems with vapour around me, and the
      meridian sun strikes the upper surface of the impenetrable foliage of my
      trees, and but a few stray gleams steal into the inner sanctuary, I throw
      myself down among the tall grass by the trickling stream; and, as I lie
      close to the earth, a thousand unknown plants are noticed by me: when I
      hear the buzz of the little world among the stalks, and grow familiar with
      the countless indescribable forms of the insects and flies, then I feel
      the presence of the Almighty, who formed us in his own image, and the
      breath of that universal love which bears and sustains us, as it floats
      around us in an eternity of bliss; and then, my friend, when darkness
      overspreads my eyes, and heaven and earth seem to dwell in my soul and
      absorb its power, like the form of a beloved mistress, then I often think
      with longing, Oh, would I could describe these conceptions, could impress
      upon paper all that is living so full and warm within me, that it might be
      the mirror of my soul, as my soul is the mirror of the infinite God! O my
      friend -- but it is too much for my strength -- I sink under the weight of
      the splendour of these visions! A wonderful serenity has taken possession
      of my entire soul, like these sweet mornings of spring which I enjoy with
      my whole heart. I am alone, and feel the charm of existence in this spot,
      which was created for the bliss of souls like mine.
    </p>
    <p>
      I am so happy, my dear friend, so absorbed in the exquisite sense of mere
      tranquil existence, that I neglect my talents. I should be incapable of
      drawing a single stroke at the present moment; and yet I feel that I never
      was a greater artist than now. When, while the lovely valley teems with
      vapour around me, and the meridian sun strikes the upper surface of the
      impenetrable foliage of my trees, and but a few stray gleams steal into
      the inner sanctuary, I throw myself down among the tall grass by the
      trickling stream; and, as I lie close to the earth, a thousand unknown
      plants are noticed by me: when I hear the buzz of the little world among
      the stalks, and grow familiar with the countless indescribable forms of
      the insects and flies, then I feel the presence of the Almighty, who
      formed us in his own image, and the breath of that universal love which
      bears and sustains us, as it floats around us in an eternity of bliss; and
      then, my friend, when darkness overspreads my eyes, and heaven and earth
      seem to dwell in my soul and absorb its power, like the form of a beloved
      mistress, then I often think with longing, Oh, would I could describe
      these conceptions, could impress upon paper all that is living so full and
      warm within me, that it might be the mirror of my soul, as my soul is the
      mirror of the infinite God! O my friend -- but it is too much for my
      strength -- I sink under the weight of the splendour of these visions!
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
  margin-left: 20%;
  margin-right: 20%;
  padding: 24px;
  position: relative;

  h2 {
    color: $col-base-1;
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
