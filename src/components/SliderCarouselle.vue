<template>
  <div>
    <v-carousel
      class="my-1"
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(slide, i) in items" :src="slide.image" :key="i">
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
export default {
  name: "SliderCarouselle",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>
