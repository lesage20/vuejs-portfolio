<template>
<v-container class="grey lighten-3">
    <v-dialog v-model="dialog" max-width="70vw">
        <v-img :src="currentImg" width="100%" height="500" alt="" @click.stop="dialog=false" />
    </v-dialog>
    <v-row>
        <v-col>
            <v-card dark elevation="0" class="curved">
                <h1 class="text-center my-auto py-auto">
                    {{projet.nom }}
                </h1>
            </v-card>
        </v-col>
    </v-row>
    <!-- <v-row>
        <v-col cols="3">
            <v-card>
                <v-card-subtitle class="text-center">
                    <v-icon color="success">mdi-check-decagram</v-icon> Tâches terminées
                </v-card-subtitle>
                <v-divider></v-divider>
                <v-card-text>
                    <h4 class="text-center">
                        {{taches_termines.length}}

                    </h4>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="3">
            <v-card>
                <v-card-subtitle class="text-center">
                    <v-icon color="warning">mdi-sync</v-icon> Tâches en cours
                </v-card-subtitle>
                <v-divider></v-divider>
                <v-card-text>
                    <h4 class="text-center">
                        {{taches_en_cours.length}}

                    </h4>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="3">
            <v-card>
                <v-card-subtitle class="text-center">
                    <v-icon color="error">mdi-pause-circle</v-icon> Tâches en attentes
                </v-card-subtitle>
                <v-divider></v-divider>
                <v-card-text>
                    <h4 class="text-center">
                        {{taches_en_attente.length}}

                    </h4>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="3">
            <v-card>
                <v-card-subtitle class="text-center">
                    <v-icon color="blue">mdi-calculator-variant</v-icon> Total tâches:
                </v-card-subtitle>
                <v-divider></v-divider>
                <v-card-text>
                    <h4 class="text-center">
                        {{taches.length}}

                    </h4>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row> -->
    <v-row class="mt-5">

        <v-col lg="3" md="6" sm="6" cols="12" class="mt-xs-4">
            <v-card dark elevation="0" color="success darken-1">

                <v-row justify="center">
                    <v-col class="curved mx-3">
                        <v-row>
                            <v-col>
                                <v-sheet class="rounded-circle text-center" color="success" :height="50" :width="50" style="margin-top: -5px; margin-left: -5px">
                                    <v-icon dark class="px-3 py-3">
                                        mdi-check-decagram
                                    </v-icon>
                                </v-sheet>
                            </v-col>
                            <v-col cols="8">
                                Tâches terminées

                            </v-col>
                        </v-row>

                    </v-col>
                </v-row>
                <v-card-text>
                    <h4 class="text-center white--text display-4">
                        {{taches_termines.length}}

                    </h4>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col lg="3" md="6" sm="6" cols="12" class="mt-xs-4">
            <v-card dark elevation="0" color="warning darken-1">
                <v-row justify="center">
                    <v-col class="curved mx-3">
                        <v-row>
                            <v-col>
                                <v-sheet class="rounded-circle text-center" color="warning" :height="50" :width="50" style="margin-top: -5px; ">
                                    <v-icon dark class="px-3 py-3">
                                        mdi-sync
                                    </v-icon>
                                </v-sheet>
                            </v-col>
                            <v-col cols="8">
                                Tâches en cours

                            </v-col>
                        </v-row>

                    </v-col>
                </v-row>
                <v-card-text>
                    <h4 class="text-center white--text display-4">
                        {{taches_en_cours.length}}

                    </h4>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col lg="3" md="6" sm="6" cols="12" class="mt-xs-4">
            <v-card dark elevation="0" color="error darken-1">
                <v-row justify="center">
                    <v-col class="curved mx-3">
                        <v-row>
                            <v-col>
                                <v-sheet class="rounded-circle text-center" color="error" :height="50" :width="50" style="margin-top: -5px; ">
                                    <v-icon dark class="px-3 py-3">
                                        mdi-pause-circle
                                    </v-icon>
                                </v-sheet>
                            </v-col>
                            <v-col cols="8">
                                Tâches en attente

                            </v-col>
                        </v-row>

                    </v-col>
                </v-row>
                <v-card-text>
                    <h4 class="text-center white--text display-4">
                        {{taches_en_attente.length}}

                    </h4>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col lg="3" md="6" sm="6" cols="12" class="mt-xs-4">
            <v-card dark elevation="0" color="primary  darken-1">
                <v-row justify="center">
                    <v-col class="curved mx-3 ">
                        <v-row>
                            <v-col>
                                <v-sheet class="rounded-circle text-center" color="primary" :height="50" :width="50" style="margin-top: -5px; ">
                                    <v-icon dark class="px-3 py-3">
                                        mdi-calculator-variant
                                    </v-icon>
                                </v-sheet>
                            </v-col>
                            <v-col cols="8">
                                Total Tâches

                            </v-col>
                        </v-row>

                    </v-col>
                </v-row>
                <v-card-text>
                    <h4 class="text-center white--text display-4">
                        {{taches.length}}

                    </h4>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <p class="grey--text py-1 my-0">Tâches</p>

            <v-card>
                <v-tabs v-model="tab">
                    <v-tabs-slider></v-tabs-slider>

                    <v-tab href="#terminée">
                        Terminées
                    </v-tab>

                    <v-tab href="#en-cours">
                        En cours
                    </v-tab>

                    <v-tab href="#en-attente">
                        En attente
                    </v-tab>

                </v-tabs>

                <v-tabs-items v-model="tab">
                    <v-tab-item value="terminée">
                        <v-expansion-panels accordion v-model="termines">
                            <v-expansion-panel v-for="tache in taches_termines" :key="tache.titre">
                                <v-expansion-panel-header>
                                    {{tache.titre}}
                                </v-expansion-panel-header>

                                <v-expansion-panel-content>
                                    <v-row>
                                        <template v-if="CurrentTaskImages.length">
                                            <v-col cols="3" class="mx-1 pa-0" v-for="img in CurrentTaskImages" :key="img.id">
                                                <v-img :src="img.image" @click.stop="dialog = true; currentImg=img.image"></v-img>
                                            </v-col>
                                        </template>
                                        <template v-else>
                                            <v-col>
                                                <p>Aucune image</p>
                                            </v-col>
                                        </template>
                                    </v-row>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>

                    </v-tab-item>
                    <v-tab-item value="en-cours">
                        <v-expansion-panels v-model="termines">
                            <v-expansion-panel v-for="tache in taches_en_cours" :key="tache.titre">
                                <v-expansion-panel-header>
                                    {{tache.titre}}
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-row>
                                        <template v-if="CurrentTaskImages.length">
                                            <v-col cols="3" class="mx-1 pa-0" v-for="img in CurrentTaskImages" :key="img.id">
                                                <v-img :src="img.image" @click.stop="dialog = true; currentImg=img.image"></v-img>
                                            </v-col>
                                        </template>
                                        <template v-else>
                                            <v-col>
                                                <p>Aucune image</p>
                                            </v-col>
                                        </template>
                                    </v-row>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>

                    </v-tab-item>
                    <v-tab-item value="en-attente">
                        <v-expansion-panels v-model="termines">
                            <v-expansion-panel v-for="tache in taches_en_attente" :key="tache.titre">
                                <v-expansion-panel-header>
                                    {{tache.titre}}
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-row>

                                        <template v-if="CurrentTaskImages.length">
                                            <v-col cols="3" class="mx-1 pa-0" v-for="img in CurrentTaskImages" :key="img.id">
                                                <v-img :src="img.image" @click.stop="dialog = true; currentImg=img.image"></v-img>
                                            </v-col>
                                        </template>
                                        <template v-else>
                                            <v-col>
                                                <p>Aucune image</p>
                                            </v-col>
                                        </template>

                                    </v-row>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>

                    </v-tab-item>
                </v-tabs-items>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import axios from 'axios'
export default {
    name: "ProjetDetail",
    data: () => ({
        termines: 0,
        projet: {},
        tab: 'terminée',
        images: [],
        dialog: false,
        currentImg: '',
        taches_termines: [],
        taches_en_cours: [],
        taches_en_attente: [],
        taches: [],

    }),
    computed: {

        CurrentTaskImages() {
            if (this.tab == "terminée") {
                return this.images.filter(img => img.tache.titre == this.taches_termines[this.termines].titre).filter(img => img.tache.status == 'terminée')
            } else if (this.tab == "en-cours") {
                return this.images.filter(img => img.tache.titre == this.taches_en_cours[this.termines].titre).filter(img => img.tache.status == 'en cours')
            } else {
                return this.images.filter(img => img.tache.titre == this.taches_en_attente[this.termines].titre).filter(img => img.tache.status == 'en attente')

            }
        }

    },
    methods: {
        getTasks() {

            axios.get(this.dataAPI + "taches/", {
                    headers: {
                        Authorization: "Bearer " + this.ug_c
                    }
                }).then(res => {
                    console.log('taches: \n', res.data)
                    this.taches = res.data.filter(t => t.projet.id == this.projet.id)
                    for (let tache of this.taches) {
                        if (tache.status == "terminée") {
                            this.taches_termines.push(tache)
                        } else if (tache.status == "en cours") {
                            this.taches_en_cours.push(tache)
                        } else if (tache.status == "en attente") {
                            this.taches_en_attente.push(tache)
                        }
                    }
                    console.log('taches du projet: \n', this.taches)
                })
                .catch(err => {
                    console.dir(err)
                })

        },
        getProject() {
            axios
                .get(this.dataAPI + "projets/" + `${this.$route.params.id}`, {
                    headers: {
                        Authorization: "Bearer " + this.ug_c
                    }
                })
                .then(res => {
                    this.projet = res.data
                    console.log(res.data)

                })
                .catch(err => {
                    console.dir(err)
                })
        },
        getImages() {
            axios
                .get(this.dataAPI + "images/", {
                    headers: {
                        Authorization: "Bearer " + this.ug_c
                    }
                })
                .then(res => {
                    this.images = res.data.filter(img => img.tache.projet.id == this.projet.id)
                    console.log("img: \n", this.images)
                })
                .catch(err => {
                    console.dir(err)
                })
        }
    },
    watch: {
        termines() {
            this.termines = this.termines || 0
        }
    },
    created() {
        this.getProject()
        setTimeout(() => {
            this.getImages()

        }, 100)

    },
    mounted() {

        this.getTasks()
    }
}
</script>

<style>
.curved {
    position: relative;
    background: #2c3e50 !important;
    height: 10vh;
    border-bottom-left-radius: 50% 20% !important;
    border-bottom-right-radius: 50% 20% !important;
}
</style>
