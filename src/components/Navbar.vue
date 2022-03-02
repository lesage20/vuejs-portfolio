<template>
<v-card>
    <v-app-bar app color="grey darken-4 rounded-0" dark flat v-if="isMobile">
        <v-app-bar-nav-icon @click="draw = true"></v-app-bar-nav-icon>
        <v-app-bar-title class="text-uppercase">
            Kouakou btp
        </v-app-bar-title>
    </v-app-bar>
    <template v-if="$route.name != 'Auth'">

        <v-navigation-drawer dark v-model="draw" app :permanent="!isMobile" color="grey darken-4 rounded-0 ">
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="text-h6">
                        Kouakou btp
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
        </v-navigation-drawer>
    </template>

</v-card>
</template>

<script>
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
    created() {
        console.log(this.$route.name == "Auth")
    }
}
</script>

<style>

</style>
