<template>
<v-app>
    <!-- <v-app-bar transparent  >
      <div class="d-flex align-center">

        
      </div>

      <v-spacer></v-spacer>
    </v-app-bar> -->
    <navbar />
    <v-main class="grey lighten-3">
        <router-view />
    </v-main>
</v-app>
</template>

<script>
import Vue from 'vue'
import Navbar from './components/Navbar.vue';
Vue.mixin({
    data: () => ({
        // authAPI: "http://127.0.0.1:8000/auth/",
        // authAPI: "http://127.0.0.1:8000/auth/",
        // authAPI: "http://127.0.0.1:8000/docs.json",
        authAPI: "http://192.168.43.108:8000/auth/",
        dataAPI: "http://192.168.43.108:8000/projets/",
        docAPI: "http://192.168.43.108:8000/docs.json",
    }),
    computed: {
        ug_c() {
            return this.$store.state.ug_c
        },
        isMobile() {
            if (window.screen.width < 940) {
                return true
            }
            return false
        }
    }
})

export default {
    components: {
        Navbar
    },
    name: "App",

    data: () => ({}),
};
</script>
