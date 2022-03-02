<template>
<v-container class="grey lighten-3">
    <template>
        <v-row>
            <v-card color="grey lighten-3 " flat>
                <v-card-subtitle class="mx-lg-16 mt-2">
                    Liste de projets
                </v-card-subtitle>
                <v-card-text>
                    <v-row justify="space-around" class="px-lg-16  flex-wrap" v-if='projets.length'>
                        <v-col md="6" cols="12" v-for="(projet, i)  in projets" :key='i'>
                            <v-card>
                                <v-card-title>
                                    <v-row justify="space-between" class="px-4">
                                        <h5>{{projet.nom}}</h5>
                                        <h6>{{projet.taches.length}} Tâche{{ projet.tache_array.length > 1 ? "s" : "" }}</h6>
                                    </v-row>

                                </v-card-title>

                                <v-card-text>
                                    <v-list three-line>
                                        <template v-for="item in projet.tache_array">

                                            <v-list-item :key="item.titre">
                                                <v-list-item-content>
                                                    <v-list-item-title v-html="item.titre"></v-list-item-title>
                                                    <v-row justify="space-between">
                                                        <v-col>
                                                            <small>
                                                                Du {{new Date(item.date_debut).toLocaleDateString()}} Au {{new Date(item.date_fin).toLocaleDateString()}}
                                                            </small>
                                                        </v-col>
                                                        <v-col>
                                                            <v-row justify='end' class="mr-1   ">
                                                                <v-chip small class="mt-lg-2 mt-3" :color="chipColor(item.status)">
                                                                    {{item.status}}
                                                                </v-chip>
                                                            </v-row>

                                                        </v-col>

                                                    </v-row>
                                                    <v-divider></v-divider>

                                                </v-list-item-content>

                                            </v-list-item>
                                        </template>
                                    </v-list>

                                    <div class="mt-2">
                                        <v-row justify="space-between" class="my-1 px-4">
                                            <h4 class="d-flex">Progression ... </h4>
                                            <h4 class="d-flex"> {{projet.progression}}%</h4>
                                        </v-row>
                                        <v-progress-linear striped rounded color="success" strip :value="projet.progression"></v-progress-linear>

                                    </div>
                                </v-card-text>
                                <v-divider class="mb-4"></v-divider>
                                <v-card-actions>
                                    <v-row justify="end" class="mx-auto">
                                        <v-btn class="mb-2" link :to="'/projets/' + projet.id + '/' " color="primary" text>
                                            Voir
                                        </v-btn>
                                    </v-row>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-row justify="end" class="fill-height" v-else>
                        <v-col class="mx-lg-16 text-center">
                            <!-- <v-alert>
                                <v-icon small class="mb-1"> mdi-flask-empty-outline </v-icon> Aucune donnée

                            </v-alert> -->
                            <v-alert border="left" class="py-2" colored-border color="error" elevation="2">
                                Aucun projet.<v-btn  color="success" text elevation="0" > <v-icon> mdi-plus </v-icon> Ajoutez en </v-btn>
                            </v-alert>

                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-row>
    </template>
</v-container>
</template>

<script>
import axios from 'axios'
export default {
    name: "Dashboard",
    data: () => ({
        projets: []
    }),
    methods: {
        chipColor(status) {
            if (status == "en attente") return "error"
            if (status == "en cours") return "warning"
            if (status == "terminée") return "success"

        },
        getProjects() {
            axios
                .get(this.dataAPI + "projets/", {
                    headers: {
                        Authorization: "Bearer " + this.ug_c
                    }
                })
                .then(res => {
                    // var proj = res.data
                    res.data.forEach(element => {
                        element.tache_array = []
                        element.taches.forEach(el => {
                            axios.get(el, {
                                    headers: {
                                        Authorization: "Bearer " + this.ug_c
                                    }
                                }).then(response => {

                                    element.tache_array.push(response.data)

                                    element.tache_accomp = element.tache_array.filter(tache => tache.status == "terminée")
                                    element.progression = (element.tache_accomp.length / element.tache_array.length) * 100
                                    if (element.tache_array.length > 3) {
                                        element.tache_array = element.tache_array.splice(0, 3)
                                    }

                                })
                                .catch(error => {
                                    console.dir(error)
                                })
                        })

                    })
                    this.projets = res.data

                })
                .catch(err => {
                    if (err.response.status == "401") {
                        alert("Votre session a expiré. Veuillez vous reconnecter.")
                        this.$router.push({
                            name: 'Auth'
                        })
                    }
                    console.dir(err)
                })
        }
    },
    created() {
        this.getProjects()
    }
}
</script>
