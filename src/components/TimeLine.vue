<template>
<v-timeline :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item v-for="(item, i) in items" :key="item.titre" :color="color(item)" fill-dot :left="i % 2 == 0" :right='i % 2 != 0'>
        <v-card>
            <v-card-title :class="color(item)">
                <h2 class="text-h4 white--text font-weight-light">{{item.titre}}</h2>
            </v-card-title>
        </v-card>
    </v-timeline-item>

</v-timeline>
</template>

<script>
export default {
    name: "TimeLine",
    data: () => ({}),
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    methods: {
        color(item) {
            if (item.status == 'terminée') return 'success'
            else if (item.status == 'en cours') return 'warning'
            if (item.status == 'en attente') return 'pink'
        },
        itemsByStatus() {
            console.log("items avant tri: \n", this.items)

            this.items = this.items.sort(function (tache, tache2) {
                let a = tache.status.toUpperCase(),
                    b = tache2.status.toUpperCase();
                return a == b ? 0 : a > b ? -1 : 1;
            });
            console.log("items apres tri: \n", this.items)

        }
    },
    mounted() {
      setTimeout(()=>{this.itemsByStatus()}, 50)
    }
};
</script>
