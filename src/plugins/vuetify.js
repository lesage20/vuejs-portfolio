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
        primary: "#5497a7",
        secondary: "#E79174",
        accent: "#7284a8",
        error: "#FF5252",
        degrade1:"74E780",
        degrade2:"ffa052",
        degrade3:"ff5252",
        info: "#a1d2ce",
        success: "#74E780",
        warning: "#EA2323",
      },
    },
  },
});
