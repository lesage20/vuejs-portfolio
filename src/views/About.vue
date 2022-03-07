<template>
<v-container>
    <v-row>
        <v-col>
            <v-card>
                <v-card-text>
                    <h4 class="text-center text-h5 mb-4">
                        Voici les deux comptes utilisables que j'ai inseré dans la base de données:
                    </h4>
                    <v-row justify="center">
                        <v-col>
                            <v-card class="text-center" outlined>
                                <v-card-subtitle>
                                    Compte
                                </v-card-subtitle>
                                <v-divider></v-divider>
                                <v-card-text>

                                    Nom d'utilisateur: <code>francki</code> <br>
                                    Mot de passe: <code>franckshalom</code> <br>
                                    Groupe d'utilisateur: <code>client</code>

                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col>
                            <v-card class="text-center" outlined>
                                <v-card-subtitle>
                                    Compte
                                </v-card-subtitle>
                                <v-divider></v-divider>

                                <v-card-text>

                                    Nom d'utilisateur: <code>lesage</code> <br>
                                    Mot de passe: <code>pa$word</code> <br>
                                    Groupe : <code>admin</code>

                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>

                </v-card-text>

            </v-card>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <v-card>
                <v-card-title>
                    Info {{ug_c.user.username}} (statut: {{ug_c.user.groups[0].name}})
                </v-card-title>
                <v-card-subtitle>
                    Cette section te montre les permissions en fonction du type d'utilisateur connecté.
                    Connecte toi avec les differents type de compte pour voir la différence
                </v-card-subtitle>
                <v-card-text>
                    <v-row>
                        <template v-for="perm in ug_c.user.groups[0].permissions">
                            <v-col :cols="ug_c.user.groups[0].permissions.length > 3 ? '3':'' " :key="perm.codename">
                                <v-card class="text-center" outlined>
                                    <v-card-subtitle>
                                        Permission
                                    </v-card-subtitle>
                                    <v-divider></v-divider>

                                    <v-card-text>

                                        Nom : <code>{{perm.name}}</code> <br>
                                        Code: <code>{{perm.codename}}</code> <br>

                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </template>

                    </v-row>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>
