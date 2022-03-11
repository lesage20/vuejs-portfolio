<template>
  <v-container class="grey lighten-3">
    <v-dialog v-model="dialog" max-width="70vw">
      <v-img
        :src="currentImg"
        width="100%"
        height="500"
        alt=""
        @click.stop="dialog = false"
      />
    </v-dialog>
    <v-row>
      <v-col>
        <v-card dark elevation="0" class="primary darken-1 curved">
          <h1 class="text-center my-auto py-auto">
            {{ projet.nom }}
          </h1>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-if="images.length">
      <v-col cols="12">
        <v-label label="Apercu du chentier" />
        <slider-carouselle :items="images" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-label icon="mdi-chart-bar" label="Quelques chiffres utiles" />
      </v-col>

      <v-col lg="3" md="6" sm="6" cols="12" class="mt-xs-4">
        <v-card dark elevation="0" color="degrade1">
          <v-row justify="center">
            <v-col class="curved primary darken-1 mx-3">
              <v-row>
                <v-col>
                  <v-sheet
                    class="rounded-circle text-center"
                    color="degrade1"
                    :height="50"
                    :width="50"
                    style="margin-top: -5px; margin-left: -5px"
                  >
                    <v-icon dark class="px-3 py-3"> mdi-check-decagram </v-icon>
                  </v-sheet>
                </v-col>
                <v-col cols="8"> Tâches terminées </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-card-text>
            <h4 class="text-center white--text display-4">
              {{ taches_termines.length }}
            </h4>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg="3" md="6" sm="6" cols="12" class="mt-xs-4">
        <v-card dark elevation="0" color="degrade2">
          <v-row justify="center">
            <v-col class="curved primary darken-1 mx-3">
              <v-row>
                <v-col>
                  <v-sheet
                    class="rounded-circle text-center"
                    color="degrade2"
                    :height="50"
                    :width="50"
                    style="margin-top: -5px"
                  >
                    <v-icon dark class="px-3 py-3"> mdi-sync </v-icon>
                  </v-sheet>
                </v-col>
                <v-col cols="8"> Tâches en cours </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-card-text>
            <h4 class="text-center white--text display-4">
              {{ taches_en_cours.length }}
            </h4>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg="3" md="6" sm="6" cols="12" class="mt-xs-4">
        <v-card dark elevation="0" color="degrade3">
          <v-row justify="center">
            <v-col class="curved primary darken-1 mx-3">
              <v-row>
                <v-col>
                  <v-sheet
                    class="rounded-circle text-center"
                    color="degrade3"
                    :height="50"
                    :width="50"
                    style="margin-top: -5px"
                  >
                    <v-icon dark class="px-3 py-3"> mdi-pause-circle </v-icon>
                  </v-sheet>
                </v-col>
                <v-col cols="8"> Tâches en attente </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-card-text>
            <h4 class="text-center white--text display-4">
              {{ taches_en_attente.length }}
            </h4>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg="3" md="6" sm="6" cols="12" class="mt-xs-4">
        <v-card dark elevation="0" color="primary  darken-1">
          <v-row justify="center">
            <v-col class="curved primary darken-1 mx-3">
              <v-row>
                <v-col>
                  <v-sheet
                    class="rounded-circle text-center"
                    color="primary"
                    :height="50"
                    :width="50"
                    style="margin-top: -5px"
                  >
                    <v-icon dark class="px-3 py-3">
                      mdi-calculator-variant
                    </v-icon>
                  </v-sheet>
                </v-col>
                <v-col cols="8"> Total Tâches </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-card-text>
            <h4 class="text-center white--text display-4">
              {{ taches.length }}
            </h4>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-label
          icon="mdi-clipboard-list-outline"
          label="Liste de tâches selon le statut"
        />
      </v-col>
      <v-col class="my-0 py-0">
        <v-card>
          <v-tabs v-model="tab">
            <v-tabs-slider></v-tabs-slider>

            <v-tab class="white--text mr-3 degrade1" href="#terminée"> Terminées </v-tab>
            <v-tab class="white--text mr-3 degrade2" href="#en-cours"> En cours </v-tab>
            <v-tab class="white--text mr-3 degrade3" href="#en-attente"> En attente </v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item value="terminée">
              <v-expansion-panels accordion v-model="termines">
                <v-expansion-panel
                  v-for="tache in taches_termines"
                  :key="tache.titre"
                >
                  <v-expansion-panel-header>
                    {{ tache.titre }}
                  </v-expansion-panel-header>

                  <v-expansion-panel-content>
                    <v-row>
                      <template v-if="CurrentTaskImages.length">
                        <v-col
                          cols="3"
                          class="mx-1 pa-0"
                          v-for="img in CurrentTaskImages"
                          :key="img.id"
                        >
                          <v-img
                            :src="img.image"
                            @click.stop="
                              dialog = true;
                              currentImg = img.image;
                            "
                          ></v-img>
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
                <v-expansion-panel
                  v-for="tache in taches_en_cours"
                  :key="tache.titre"
                >
                  <v-expansion-panel-header>
                    {{ tache.titre }}
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-row>
                      <template v-if="CurrentTaskImages.length">
                        <v-col
                          cols="3"
                          class="mx-1 pa-0"
                          v-for="img in CurrentTaskImages"
                          :key="img.id"
                        >
                          <v-img
                            :src="img.image"
                            @click.stop="
                              dialog = true;
                              currentImg = img.image;
                            "
                          ></v-img>
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
                <v-expansion-panel
                  v-for="tache in taches_en_attente"
                  :key="tache.titre"
                >
                  <v-expansion-panel-header>
                    {{ tache.titre }}
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-row>
                      <template v-if="CurrentTaskImages.length">
                        <v-col
                          cols="3"
                          class="mx-1 pa-0"
                          v-for="img in CurrentTaskImages"
                          :key="img.id"
                        >
                          <v-img
                            :src="img.image"
                            @click.stop="
                              dialog = true;
                              currentImg = img.image;
                            "
                          ></v-img>
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
    <v-row class="mt-10">
      <v-col cols="12">
        <v-label icon="mdi-chart-gantt" label="Timeline exprimant l'avancée du projet" />
      </v-col>
      <v-col cols="12">
        <time-line :items="taches" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import SliderCarouselle from "../components/SliderCarouselle.vue";
import VLabel from "../components/Label.vue";
import TimeLine from "../components/TimeLine.vue";
export default {
  components: {
    SliderCarouselle,
    VLabel,
    TimeLine,
  },
  name: "ProjetDetail",
  data: () => ({
    termines: 0,
    projet: {},
    tab: "terminée",
    images: [],
    dialog: false,
    currentImg: "",
    taches_termines: [],
    taches_en_cours: [],
    taches_en_attente: [],
    taches: [],
  }),
  computed: {
    CurrentTaskImages() {
      if (this.tab == "terminée") {
        return this.images
          .filter(
            (img) =>
              img.tache.titre == this.taches_termines[this.termines].titre
          )
          .filter((img) => img.tache.status == "terminée");
      } else if (this.tab == "en-cours") {
        return this.images
          .filter(
            (img) =>
              img.tache.titre == this.taches_en_cours[this.termines].titre
          )
          .filter((img) => img.tache.status == "en cours");
      } else {
        return this.images
          .filter(
            (img) =>
              img.tache.titre == this.taches_en_attente[this.termines].titre
          )
          .filter((img) => img.tache.status == "en attente");
      }
    },
  },
  methods: {
    initializeData() {
      let urls = [
        this.dataAPI + "taches/",
        this.dataAPI + "projets/" + `${this.$route.params.id}`,
        this.dataAPI + "images/",
      ];

      Promise.all(
        urls.map((endpoint) =>
          axios.get(endpoint, {
            headers: {
              Authorization: "Bearer " + this.ug_c.token,
            },
          })
        )
      ).then(([{ data: taches }, { data: projet }, { data: images }]) => {
        this.projet = projet;
        this.images = images.filter(
          (img) => img.tache.projet.id == this.projet.id
        );
        this.taches = taches.filter((t) => t.projet.id == this.projet.id);
        for (let tache of this.taches) {
          if (tache.status == "terminée") {
            this.taches_termines.push(tache);
          } else if (tache.status == "en cours") {
            this.taches_en_cours.push(tache);
          } else if (tache.status == "en attente") {
            this.taches_en_attente.push(tache);
          }
        }
      });
    },
    getTasks() {
      axios
        .get(this.dataAPI + "taches/", {
          headers: {
            Authorization: "Bearer " + this.ug_c.token,
          },
        })
        .then((res) => {
          this.taches = res.data.filter((t) => t.projet.id == this.projet.id);
          for (let tache of this.taches) {
            if (tache.status == "terminée") {
              this.taches_termines.push(tache);
            } else if (tache.status == "en cours") {
              this.taches_en_cours.push(tache);
            } else if (tache.status == "en attente") {
              this.taches_en_attente.push(tache);
            }
          }
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    getProject() {
      axios
        .get(this.dataAPI + "projets/" + `${this.$route.params.id}`, {
          headers: {
            Authorization: "Bearer " + this.ug_c.token,
          },
        })
        .then((res) => {
          this.projet = res.data;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    getImages() {
      axios
        .get(this.dataAPI + "images/", {
          headers: {
            Authorization: "Bearer " + this.ug_c.token,
          },
        })
        .then((res) => {
          this.images = res.data.filter(
            (img) => img.tache.projet.id == this.projet.id
          );
        })
        .catch((err) => {
          console.dir(err);
        });
    },
  },
  watch: {
    termines() {
      this.termines = this.termines || 0;
    },
  },
  created() {
    this.initializeData();
  },
};
</script>

<style>
.curved {
  position: relative;
  background: #2c3e50;
  height: 10vh;
  border-bottom-left-radius: 50% 20% !important;
  border-bottom-right-radius: 50% 20% !important;
}
</style>
