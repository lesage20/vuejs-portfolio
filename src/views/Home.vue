<template>
  <v-container>
    <v-dialog scrollable v-model="dialog" width="500">
      <v-card class="info lighten-3">
        <v-card-title class="secondary white--text title">
          Liste des clients
        </v-card-title>
        <v-card-text class="pa-5">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
            deserunt dolorem voluptatum quos autem neque incidunt expedita rem
            ducimus, aperiam accusamus similique quis, ab dolore laboriosam,
            doloribus aliquam praesentium cupiditate. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Autem fuga animi asperiores nisi
            praesentium. Quae mollitia optio minima aliquid maiores, cupiditate
            temporibus recusandae cumque vero ipsam fugiat aut, molestiae natus.
          </p>
          <!-- <v-list>
            <v-list-item v-for="i in listProjets" :key="i.nom">
              <span>Nom du projet: </span> {{ i.nom }}
            </v-list-item>
          </v-list> -->
        </v-card-text>

        <v-card-actions>
          <v-text> </v-text>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> Fermer </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-row class="my-4" justify="space-around">
      <v-col
        v-for="i in Dash_items_row_1"
        :key="i.titre"
        md="6"
        lg="4"
        sm="12"
        cols="12"
      >
        <v-responsive aspect-ratio="4/3">
          <v-card class="info lighten-2 px-1 text-center py-10">
            <v-img aspect-ratio="1.77" class="mx-auto" :src="i.image"></v-img>
            <v-card-text class="title font-weight-bold pt-8">
              <v-btn
                v-if="i.titre === 'Mes clients'"
                @click="dialog = true"
                flat
                class="secondary"
              >
                {{ i.titre }}
              </v-btn>
              <v-btn v-else flat class="secondary">
                {{ i.titre }}
              </v-btn>
            </v-card-text>
          </v-card>
        </v-responsive>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" md="9">
        <v-row justify="space-around" class="text--center">
          <v-col
            v-for="i in Dash_items_row_2"
            :key="i.titre"
            cols="12"
            lg="4"
            md="6"
          >
            <v-responsive aspect-ratio="1.66">
              <v-card flat class="info lighten-2 px-1 pt-5 text-center">
                <v-img
                  :max-height="90"
                  :max-width="100"
                  class="mx-auto"
                  :src="i.image"
                ></v-img>
                <v-card-text class="secondary--text">
                  <v-avatar class="mb-1" color="info lighten-3" size="36">
                    <span class="text-h6">{{ i.effectif }}</span>
                  </v-avatar>
                  <br />
                  <span> {{ i.titre }}</span>
                </v-card-text>
              </v-card>
            </v-responsive>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="3">
        <v-card class="accent"> <v-card-text>hjgdgd</v-card-text></v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
//import axios from "axios";
export default {
  name: "DashBoard",
  components: {},
  data: () => ({
    dialog: false,
    projets: [],
    Dash_items_row_1: [
      {
        titre: "Mes clients",
        image: "/images/undraw_meeting_re_i53h.svg",
      },
      {
        titre: "Mes projets",
        image: "/images/undraw_growth_analytics_re_pyxf.svg",
      },

      {
        titre: "Mes informations",
        image: "/images/undraw_profile_re_4a55.svg",
      },
    ],
    Dash_items_row_2: [
      {
        titre: "Projets terminés",
        image: "/images/undraw_check_boxes_re_v40f.svg",
        effectif: "2",
      },
      {
        titre: "Projets en cours",
        image: "/images/undraw_problem_solving_re_4gq3.svg",
        effectif: "3",
      },
      {
        titre: "Projets en attente",
        image: "/images/undraw_to_do_list_re_9nt7.svg",
        effectif: "4",
      },
      {
        titre: "xxxxx",
        image: "/images/undraw_checklist__re_2w7v.svg",
        effectif: "xx",
      },
      {
        titre: "xxxxx",
        image: "/images/undraw_checklist__re_2w7v.svg",
        effectif: "xx",
      },
      {
        titre: "xxxxx",
        image: "/images/undraw_checklist__re_2w7v.svg",
        effectif: "xx",
      },
    ],
  }),
  methods: {},
};
</script>
