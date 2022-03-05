<template>
<v-app>
    <v-dialog>
        <v-card>
            <v-card-text>
                Votre session a expiré veuillez vous reconnecter
            </v-card-text>
        </v-card>
    </v-dialog>
    <navbar />
    <v-main class="grey lighten-3">
        <v-fade-transition hide-on-leave origin="center center" appear>
            <router-view />
        </v-fade-transition>
    </v-main>
</v-app>
</template>

<script>
import Vue from 'vue'
import Navbar from './components/Navbar.vue';
import axios from "axios"
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
    created() {
        console.log(this.ug_c)
        axios
            .post(this.authAPI + "token-verify/", {
                token: this.ug_c,
            })
            .then()
            .catch(err => {
                console.log(location.href)
                if (err.response.status == "400") {
                    if (location.href == location.origin + '/auth') {
                        return
                    } else {
                        alert("Votre session a expiré. Veuillez vous reconnecter.")
                        this.$router.push({
                            name: 'Auth'
                        })
                    }
                }
                console.dir(err)
            })

    }
};
</script>
