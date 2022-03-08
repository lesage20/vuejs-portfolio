<template>
  <v-container class="grey lighten-3" :fill-height="loading">
    <v-row justify="center" align="center" class="py-auto my-auto">
      <v-col md="12" lg="8" cols="12">
        <v-text-field
          prepend-inner-icon="mdi-magnify"
          solo
          v-model="search"
          @keyup="filtrer"
          placeholder="Chercher un projet"
          rounded
        ></v-text-field>
      </v-col>
      <v-col md="12" lg="12" cols="12">
        <v-card color="grey lighten-3 " flat v-if="!loading">
          <v-card-subtitle class="mx-lg-16 mt-2">
            Liste de projets
          </v-card-subtitle>
          <v-card-text>
            <template v-if="!search">
              <v-row
                justify="space-around"
                class="px-lg-16 flex-wrap"
                v-if="projets.length"
              >
                <v-col
                  md="6"
                  cols="12"
                  v-for="(projet, i) in displayedProjects"
                  :key="i"
                >
                  <v-card>
                    <v-card-title>
                      <v-row justify="space-between" class="px-4">
                        <h5>{{ projet.nom }}</h5>
                        <h6>
                          {{ projet.taches.length }} Tâche{{
                            projet.tache_array.length > 1 ? "s" : ""
                          }}
                        </h6>
                      </v-row>
                    </v-card-title>

                    <v-card-text>
                      <v-list three-line>
                        <template v-for="item in projet.tache_array">
                          <v-list-item :key="item.titre">
                            <v-list-item-content>
                              <v-list-item-title
                                v-html="item.titre"
                              ></v-list-item-title>
                              <v-row justify="space-between">
                                <v-col>
                                  <small>
                                    Du
                                    {{
                                      new Date(
                                        item.date_debut
                                      ).toLocaleDateString()
                                    }}
                                    Au
                                    {{
                                      new Date(
                                        item.date_fin
                                      ).toLocaleDateString()
                                    }}
                                  </small>
                                </v-col>
                                <v-col>
                                  <v-row justify="end" class="mr-1">
                                    <v-chip
                                      small
                                      class="mt-lg-2 mt-3"
                                      :color="chipColor(item.status)"
                                    >
                                      {{ item.status }}
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
                          <h4 class="d-flex success--text">
                            {{ Math.floor(projet.progression) }}% Terminée
                          </h4>
                          <h4 class="d-flex warning--text">
                            {{
                              Math.floor(projet.buffer - projet.progression)
                            }}% En cours
                          </h4>
                          <h4 class="d-flex">
                            {{ Math.floor(100 - projet.buffer) }}% En attente
                          </h4>
                        </v-row>
                        <v-progress-linear
                          striped
                          stream
                          :buffer-value="projet.buffer"
                          rounded
                          color="success"
                          background-color="warning lighten-3"
                          strip
                          :value="projet.progression"
                        ></v-progress-linear>
                      </div>
                    </v-card-text>
                    <v-divider class="mb-4"></v-divider>
                    <v-card-actions>
                      <v-row justify="end" class="mx-auto">
                        <v-btn
                          class="mb-2"
                          link
                          :to="'/projets/' + projet.id + '/'"
                          color="primary"
                          text
                        >
                          Voir
                        </v-btn>
                      </v-row>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
              <v-row justify="end" class="fill-height" v-else>
                <v-col class="mx-lg-16 text-center">
                  <v-alert
                    border="left"
                    class="py-2"
                    colored-border
                    color="error"
                    elevation="2"
                  >
                    Aucun projet.<v-btn color="success" text elevation="0">
                      <v-icon> mdi-plus </v-icon> Ajoutez en
                    </v-btn>
                  </v-alert>
                </v-col>
              </v-row>
              <v-row justify="end mx-lg-16" v-if="page > 0">
                <template>
                  <div class="text-center">
                    <!-- coucou {{ displayedProjects }} -->
                    <v-pagination v-model="page" :length="pages"></v-pagination>
                  </div>
                </template>
              </v-row>
            </template>
            <template v-else>
              <v-row
                justify="space-around"
                class="px-lg-16 flex-wrap"
                v-if="projets.length"
              >
                <v-col
                  md="6"
                  cols="12"
                  v-for="(projet, i) in projetsListFilter"
                  :key="i"
                >
                  <v-card>
                    <v-card-title>
                      <v-row justify="space-between" class="px-4">
                        <h5>{{ projet.nom }}</h5>
                        <h6>
                          {{ projet.taches.length }} Tâche{{
                            projet.tache_array.length > 1 ? "s" : ""
                          }}
                        </h6>
                      </v-row>
                    </v-card-title>

                    <v-card-text>
                      <v-list three-line>
                        <template v-for="item in projet.tache_array">
                          <v-list-item :key="item.titre">
                            <v-list-item-content>
                              <v-list-item-title
                                v-html="item.titre"
                              ></v-list-item-title>
                              <v-row justify="space-between">
                                <v-col>
                                  <small>
                                    Du
                                    {{
                                      new Date(
                                        item.date_debut
                                      ).toLocaleDateString()
                                    }}
                                    Au
                                    {{
                                      new Date(
                                        item.date_fin
                                      ).toLocaleDateString()
                                    }}
                                  </small>
                                </v-col>
                                <v-col>
                                  <v-row justify="end" class="mr-1">
                                    <v-chip
                                      small
                                      class="mt-lg-2 mt-3"
                                      :color="chipColor(item.status)"
                                    >
                                      {{ item.status }}
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
                          <h4 class="d-flex success--text">
                            {{ Math.floor(projet.progression) }}% Terminée
                          </h4>
                          <h4 class="d-flex warning--text">
                            {{
                              Math.floor(projet.buffer - projet.progression)
                            }}% En cours
                          </h4>
                          <h4 class="d-flex">
                            {{ Math.floor(100 - projet.buffer) }}% En attente
                          </h4>
                        </v-row>
                        <v-progress-linear
                          striped
                          stream
                          :buffer-value="projet.buffer"
                          rounded
                          color="success"
                          background-color="warning lighten-3"
                          strip
                          :value="projet.progression"
                        ></v-progress-linear>
                      </div>
                    </v-card-text>
                    <v-divider class="mb-4"></v-divider>
                    <v-card-actions>
                      <v-row justify="end" class="mx-auto">
                        <v-btn
                          class="mb-2"
                          link
                          :to="'/projets/' + projet.id + '/'"
                          color="primary"
                          text
                        >
                          Voir
                        </v-btn>
                      </v-row>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
              <v-row justify="end" class="fill-height" v-else>
                <v-col class="mx-lg-16 text-center">
                  <v-alert
                    border="left"
                    class="py-2"
                    colored-border
                    color="error"
                    elevation="2"
                  >
                    Aucun projet.<v-btn color="success" text elevation="0">
                      <v-icon> mdi-plus </v-icon> Ajoutez en
                    </v-btn>
                  </v-alert>
                </v-col>
              </v-row>
              <v-row justify="end mx-lg-16" v-if="page > 0">
                <template>
                  <div class="text-center">
                    <!-- coucou {{ displayedProjects }} -->
                    <v-pagination v-model="page" :length="pages"></v-pagination>
                  </div>
                </template>
              </v-row>
            </template>
          </v-card-text>
        </v-card>
      </v-col>

      <template>
        <v-row justify="center">
          <v-dialog v-model="dataDialog" max-width="290">
            <v-card>
              <v-card-subtitle class="text-h6 my-0 py-0">
                Info
              </v-card-subtitle>
              <v-divider class="mt-0"></v-divider>
              <v-card-text class="text-center mt-4">
                <v-progress-circular
                  color="primary"
                  v-if="loading"
                  indeterminate
                ></v-progress-circular>
                <v-icon color="error" v-else> mdi-alert-decagram</v-icon>
                <br />
                {{ text }}
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-row>
      </template>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "Dashboard",
  data: () => ({
    search: "",
    projets: [],
    taches: [],
    page: 1,
    perPage: 2,
    loading: true,
    text: "Recuperation des données Veuillez patienter",
    dataDialog: true,
    projetsListFilter: [],
  }),
  computed: {
    displayedProjects() {
      let projets = [...this.projets];
      const start = this.perPage * this.page - this.perPage;
      return projets.splice(start, start + this.perPage);
    },
    pages() {
      return Math.ceil(this.projets.length / this.perPage);
    },
  },
  watch: {
    search() {
      this.filtrer();
    },
  },
  methods: {
    filtrer() {
      this.projetsListFilter = this.projets.filter((p) => {
        console.log(this.p.nom.includes(this.search));
        p.nom.includes(this.search);
      });
    },
    chipColor(status) {
      if (status == "en attente") return "error";
      if (status == "en cours") return "warning";
      if (status == "terminée") return "success";
    },
    getTasks() {
      axios
        .get(this.dataAPI + "taches/", {
          headers: {
            Authorization: "Bearer " + this.ug_c.token,
          },
        })
        .then((res) => {
          this.taches = res.data;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    initializeData() {
      this.loading = true;
      this.dataDialog = true;
      let urls = [this.dataAPI + "taches/", this.dataAPI + "projets/"];
      Promise.all(
        urls.map((endpoint) =>
          axios.get(endpoint, {
            headers: {
              Authorization: "Bearer " + this.ug_c.token,
            },
          })
        )
      ).then(([{ data: taches }, { data: projets }]) => {
        this.taches = taches;
        projets.forEach((element) => {
          element.tache_array = this.taches.filter(
            (t) => t.projet.id == element.id
          );
          element.tache_accomp = element.tache_array.filter(
            (tache) => tache.status == "terminée"
          );
          element.tache_en_cours = element.tache_array.filter(
            (tache) => tache.status == "en cours"
          );
          element.progression =
            ((element.tache_accomp.length || 0) / element.tache_array.length) *
            100;
          element.buffer =
            element.progression +
            ((element.tache_en_cours.length || 0) /
              element.tache_array.length) *
              100;
          if (element.tache_array.length > 3) {
            element.tache_array = element.tache_array.splice(0, 3);
          }
        });
        this.projets = projets;
        this.dataDialog = false;
        this.loading = false;
      });
    },
  },
  created() {
    this.initializeData();
  },
};
</script>
