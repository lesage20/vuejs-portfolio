<template>
  <v-container>
    <v-row justify="space-around">
      <v-col
        v-for="i in team"
        :key="i.nom"
        sm="12"
        md="5"
        class="pa-0"
        cols="12"
      >
        <v-card max-width="344">
            <v-img class="mx-auto" :max-width="100" :max-height="100" :src="i.photo"></v-img>
<br/>
          <v-card-title class="title accent--text">
            {{ i.nom }}</v-card-title
          >
          <v-card-subtitle class="accent--text">{{ i.role }}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "NotreAbout",
  data: () => ({
    team: [
      {
        nom: "Franck Schalôm",
        photo: "/images/undraw_male_avatar_323b.svg",
        role: "Dev Web Front-end",
      },
      {
        nom: "Le Sage",
        photo: "/images/undraw_female_avatar_w3jk.svg",
        role: "Dev Back-end",
      },
    ],
  }),
};
</script>
