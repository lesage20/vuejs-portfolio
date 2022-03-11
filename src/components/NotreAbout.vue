<template>
  <v-container>
    <v-label class="text-md-h4" icon="mdi-account-group" label="Notre équipe" />
    <v-row justify="space-around">
      <v-col
        v-for="i in team"
        class="my-6"
        :key="i.nom"
        cols="12"
        md="9"
        sm="12"
      >
        <v-row align-content="center">
          <v-col cols="12" md="3" sm="12">
            <v-avatar size="150">
              <img :src="i.photo" />
            </v-avatar>
          </v-col>
          <v-col cols="12" md="9" sm="12">
            <v-card flat>
              <v-card-title class="accent--text text-md-h4">
                {{ i.nom }}
              </v-card-title>
              <v-card-subtitle class="accent--text">
                {{ i.role }}
              </v-card-subtitle>
              <v-card-text class="text-justify">{{ i.bio }} </v-card-text>
              <v-card-actions>
                <v-row align="center" class="container">
                  <v-col v-for="i in teamLinks" :key="i.nom">
                    <v-avatar color="accent">
                      <v-icon dark>{{ i.icon }}</v-icon>
                    </v-avatar>
                  </v-col>
                </v-row>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import VLabel from "../components/Label.vue";

export default {
  components: { VLabel },
  name: "NotreAbout",
  data: () => ({
    team: [
      {
        nom: "Franck Schalôm",
        photo: "/images/undraw_male_avatar_323b.svg",
        role: "Dev Web Front-end",
        bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut earum error tenetur distinctio, beatae quia doloribus quisquam dol",
      },
      {
        nom: "Le Sage",
        photo: "/images/undraw_female_avatar_w3jk.svg",
        role: "Dev Back-end",
        bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut earum error tenetur distinctio, beatae quia doloribus quisquam dol",
      },
    ],
    teamLinks: [
      {
        chemin: "",
        icon: "mdi-phone",
      },
      {
        chemin: "",
        icon: "mdi-linkedin",
      },
      {
        chemin: "",
        icon: "mdi-twitter",
      },
      {
        chemin: "",
        icon: "mdi-whatsapp",
      },
    ],
  }),
};
</script>
