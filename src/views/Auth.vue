<template>
<v-container class="grey lighten-2" :fill-height="!isMobile" fluid>
    <v-snackbar v-model="snackbar" botton :timeout="4000" class="white--text">
        {{ text }}
    </v-snackbar>
    
    <v-row justify="center" align="center" :class="isMobile ? 'mgt-middle' : ''">
        <v-col cols="12" sm="" md="6" class="mx-auto">
            <v-card elevation="12">
                <v-window :vertical="isMobile" v-model="step">
                    <v-window-item :value="1">
                        <v-row>

                            <v-col cols="12" md="10">
                                <v-card-text>
                                    <h3 class="text-center text-lg-h3   blue--text text--accent-3 text-uppercase">Connectez-vous</h3>
                                    <p class="text-center grey--text">
                                        Entrez vos informations d'identification pour acceder à votre compte
                                    </p>
                                    <v-form class="mx-4">
                                        <v-row dense>
                                            <v-col cols="12">
                                                <v-text-field v-model="username" color="blue accent-3" label="Nom d'utilisateur" prepend-icon="mdi-account" />
                                            </v-col>
                                            <v-col>
                                                <v-text-field v-model="password" color="blue accent-3" label="Mot de passe" prepend-icon="mdi-lock" type="password" @keyup.enter="login()" />
                                            </v-col>
                                        </v-row>
                                    </v-form>
                                    <div class="text-center my-3 px-3">
                                        <v-btn :loading="loading" :block="isMobile" large color="blue accent-3" @click="login()" dark>
                                            connexion
                                        </v-btn>

                                    </div>
                                    <p class="text-center   mb-0 ">
                                        <a href="#" class="grey--text text-accent-3">
                                            Mot de passe oublié ?
                                        </a>
                                    </p>
                                </v-card-text>

                            </v-col>
                            <v-col cols="12" md="2" class="blue accent-3 pa-0  " @click="step++; reset()">

                                <v-col :class="isMobile ? 'white--text py-2 px-0 text-center' :  'white--text text-center vertical'">

                                    <v-icon v-if="!isMobile" left color="white darken-4" class="px-0 ">
                                        mdi-chevron-left
                                    </v-icon>
                                    <v-icon v-if="isMobile" left color="white darken-4" class="px-0 ">
                                        mdi-chevron-up
                                    </v-icon>
                                    <div class="pb-4 px-1" style="font-size: 12px"> s'enregistrer <small class="pa-0 ma-0"> </small></div>

                                </v-col>

                            </v-col>
                        </v-row>
                    </v-window-item>
                    <v-window-item :value="2">
                        <v-row>
                            <v-col cols="12" md="2" class="blue accent-3 " @click="step--; reset()">

                                <v-col :class="isMobile ? 'white--text text-center' :  'white--text text-center vertical'">
                                    <v-icon v-if="!isMobile" left color="white darken-4" class="px-0 ">
                                        mdi-chevron-right
                                    </v-icon>
                                    <v-icon v-if="isMobile" left color="white darken-4" class="px-0 ">
                                        mdi-chevron-down
                                    </v-icon>
                                    <div class="" style="font-size: 11px">se connecter</div>
                                </v-col>

                            </v-col>
                            <v-col cols="12" md="10">
                                <v-card-text>
                                    <h3 class="text-center text-lg-h3  blue--text text--accent-3 text-uppercase">créer votre compte</h3>
                                    <p class="text-center grey--text">
                                        Entrez les informations demandées pour créer votre compte
                                    </p>
                                    <v-form dense class="mx-4">
                                        <v-row dense>
                                            <v-col cols="12">
                                                <v-text-field v-model="username" color="blue accent-3" hint="ne peut contenir que des lettres, des nombres ou les caractères « @ », « . », « + », « - » et « _ »." label="Nom d'utilisateur" prepend-icon="mdi-account" />
                                            </v-col>
                                            <v-col cols="12">
                                                <v-text-field v-model="email" color="blue accent-3" type="email" label="Email" prepend-icon="mdi-email" />
                                            </v-col>
                                            <v-col cols="12">
                                                <v-text-field v-model="password" color="blue accent-3" hint="doit êtres un mot de passe valide et contenir au moins 8 caractères " label="Mot de passe" prepend-icon="mdi-lock" type="password" />
                                            </v-col>

                                            <v-col>
                                                <v-text-field v-model="passwordConfirm" hint="Le même mot de passe saisi dans le champs précédent." color="blue accent-3" label="Confirmer mot de passe" prepend-icon="mdi-lock" type="password" />
                                            </v-col>
                                        </v-row>
                                    </v-form>
                                    <div class="text-center my-3 px-3">
                                        <v-btn :loading="loading" @click="register" :block="isMobile" large color="blue accent-3" dark>
                                            créer mon compte
                                        </v-btn>

                                    </div>

                                </v-card-text>

                            </v-col>
                        </v-row>
                    </v-window-item>
                </v-window>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import axios from 'axios'
export default {
    name: "Login",
    data: () => ({
        step: 1,
        text: "",
        snackbar: false,
        loading: false,
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
    }),
    computed: {
        isMobile() {
            if (window.screen.width < 940) {
                return true
            }
            return false
        }
    },
    methods: {
        login() {
            this.loading = true

            axios
                .post(this.authAPI + "login/", {
                    username: this.username,
                    password: this.password
                })
                .then(res => {
                    this.loading = false
                    this.text = "Vous êtes connectés avec succès"
                    this.snackbar = true
                    this.user = res.data.user
                    this.$store.commit("saveUG_C", res.data.token)
                    console.log(this.$store.state.ug_c)

                    this.reset()
                    console.log(res.data)
                    this.$router.push({
                        name: 'Home'
                    })

                })
                .catch(err => {
                    if ("password" in err.response.data) {
                        this.text = "Tous les champs sont obligatoire"
                    } else {
                        this.text = err.response.data['non_field_errors'][0]
                    }
                    this.snackbar = true
                    this.loading = false

                })

        },
        register() {
            this.loading = true
            if (!this.username || !this.email || !this.password || !this.passwordConfirm) {

                this.text = "Tous les champs sont obligatoires"
                this.loading = false
                this.snackbar = true
                return
            }
            axios
                .post(this.authAPI + "registration/", {
                    username: this.username,
                    email: this.email,
                    password1: this.password,
                    password2: this.passwordConfirm,
                })
                .then(res => {
                    this.loading = false
                    this.text = "Vous êtes connectés avec succès"
                    this.snackbar = true
                    this.user = res.data
                    console.log(res.data)
                    this.reset()
                })
                .catch(err => {
                    let errors = err.response.data
                    if ("username" in errors) {
                        this.text = errors["username"][0]
                    } else if ("email" in errors) {
                        this.text = errors["email"][0]
                    } else if ("password1" in errors) {
                        this.text = errors["password1"][0]
                    } else if ("password2" in errors) {
                        this.text = errors["password2"][0]
                    } else {
                        if (errors['non_field_errors'][0] == "The two password fields didn't match.") {
                            this.text = "Les mots de passes doivent être identique"
                        }

                        this.text = errors['non_field_errors'][0]
                    }

                    this.loading = false
                    this.snackbar = true

                })

        },
        reset() {
            this.username = this.email = this.password = this.passwordConfirm = ''
            this.loading = false
        }
    }
}
</script>

<style>
.vertical {
    position: relative;
    top: calc(50% - 20px);
    left: calc(0%) !important;
}

.mgt-middle {
    margin-top: calc(50% - 100px) !important;
}
</style>
