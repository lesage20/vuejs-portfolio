<template>
  <v-app>
    <!-- <v-app-bar transparent  >
      <div class="d-flex align-center">
        

        
      </div>

      <v-spacer></v-spacer>
    </v-app-bar> -->

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Vue from 'vue'
Vue.mixin({
  data: ()=>({
    // authAPI: "http://127.0.0.1:8000/auth/",
    authAPI: "http://192.168.43.108:8000/auth/"
  })
})


export default {
  name: "App",

  data: () => ({ }),
};
</script>
