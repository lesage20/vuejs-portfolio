<template>
<v-card>
    <v-app-bar app color="grey darken-4 rounded-0" dense dark flat>
        <v-app-bar-nav-icon @click="draw = true"></v-app-bar-nav-icon>
        <v-app-bar-title class="text-uppercase">
            SageCoders
        </v-app-bar-title>
    </v-app-bar>
    <template v-if="$route.name != 'Auth'">

        <v-navigation-drawer dark v-model="draw" app :permanent="!isMobile" color="grey darken-4 rounded-0 ">
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="text-h6">
                        SageCoders
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        Portfolio
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense nav>
                <v-list-item v-for="item in items" :key="item.title" link :to='item.to'>
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

            </v-list>
            <template v-slot:append>
                <div class="pa-2">
                    <v-btn block @click="logout">
                        <v-icon small left>mdi-logout</v-icon> Deconnexion
                    </v-btn>
                </div>
            </template>
        </v-navigation-drawer>
    </template>

</v-card>
</template>

<script>
import axios from "axios"
export default {
    data: () => ({

        items: [{
                title: 'Dashboard',
                icon: 'mdi-view-dashboard',
                to: "/"
            },
            {
                title: 'Projets',
                icon: 'mdi-folder',
                to: '/projets'
            },

            {
                title: 'About',
                icon: 'mdi-help-box',
                to: '/about'
            },
            {
                title: 'Documentation',
                icon: 'mdi-book-open',
                to: {
                    name: 'Documentation'
                }
            },
            {
                title: 'Auth',
                icon: 'mdi-account',
                to: '/auth'
            },
        ],
        draw: false,
        right: null,

    }),
    methods: {
        logout() {
            axios.post(this.authAPI + "logout/")
                .then(() => {
                        this.$store.commit('resetUG_C')
                        this.$router.push({name: "Auth"})
                        }

                    )
                    .catch(err => console.dir(err))

                },
        },
        created() {
            console.log(this.$route.name == "Auth")
        }
    }
</script>

<style>

</style>
