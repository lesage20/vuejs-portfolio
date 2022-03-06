import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  breakpoint: {
    mobileBreakpoint: "sm", // This is equivalent to a value of 960
  },
  theme: {
    themes: {
      light: {
        // le bleu du site
        primary: "#1100af",
        //lr rouge du site
        secondary: "#E30613",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        //le vert de succes
        success: "#00E676",
        warning: "#FFC107",
      },
    },
  },
});
