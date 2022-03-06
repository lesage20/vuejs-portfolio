<template>
  <div class="catalogue">
    <SliderCarouselle />

    <v-alert dense class="mt-5" text icon="mdi-account-group" color="success">
      <strong>Ressources employées</strong>
    </v-alert>
    <v-row class="mb-5 lg-px-5">
      <v-col
        lg="6"
        md="6"
        cols="12"
        v-for="detail in ressources"
        :key="detail.nom"
      >
        <v-card elevation="2" class="rounded-lg">
          <v-card-text class="d-flex justify-space-between align-center">
            <div class="">
              <strong> {{ detail.nom }} </strong> <br />
              <small>{{ detail.valeur }}</small>
            </div>
            <v-avatar v-if="detail.index == 2" size="100">
              <v-img :src="detail.logo"></v-img>
            </v-avatar>
            <v-avatar v-else class="secondary" size="100">
              <span
                v-if="detail.index == 1"
                class="white--text font-weight-medium"
                >{{ detail.pourcentage }}% <br />
                consommé</span
              >
              <span
                v-if="detail.index == 3"
                class="white--text font-weight-medium"
                >effectif <br />
                {{ detail.effectif }}</span
              >
            </v-avatar>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-alert
      text
      class="text-center mt-3 title"
      icon="mdi-format-list-checks"
      prominent
      color="primary lighten-3"
    >
      Cahier de charges et avancée du projet
    </v-alert>

    <TimeLine />
  </div>
</template>
<script>
import SliderCarouselle from "@/components/SliderCarouselle.vue";
import TimeLine from "@/components/TimeLine.vue";
export default {
  name: "Home",
  components: { SliderCarouselle, TimeLine },
  data: () => ({
    ressources: [
      { index: 1, nom: "Budget", valeur: "200 300 FCFA", pourcentage: "20" },
      {
        index: 2,
        nom: "Chef de Projet",
        valeur: "Koffi-BAT",
        logo: "/images/Logo IEA-02.png",
      },
      { index: 3, nom: "Maitre d'oeuvre", valeur: "Bnet", effectif: "600" },
    ],
  }),
};
</script>
