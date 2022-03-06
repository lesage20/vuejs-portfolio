<template>
  <div>
    <v-carousel
      class="my-1"
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(slide, i) in items" :src="slide.image"  :key="i">
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
      required: true
    }
  },
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
};
</script>
