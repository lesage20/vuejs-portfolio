<template>
<v-container class="grey lighten-3">
    {{this.projet}}
</v-container>
</template>

<script>
import axios from 'axios'
export default {
    name: "ProjetDetail",
    data: () => ({
        projet: {}
    }),
    methods: {

        getProject() {
            axios
                .get(this.dataAPI + "projets/" + `${this.$route.params.id}`, {
                    headers: {
                        Authorization: "Bearer " + this.ug_c
                    }
                })
                .then(res => {
                    res.data.tache_array = []
                    res.data.taches.forEach(el => {
                        axios.get(el, {
                                headers: {
                                    Authorization: "Bearer " + this.ug_c
                                }
                            }).then(response => {
                                res.data.tache_array.push(response.data)

                                res.data.tache_accomp = res.data.tache_array.filter(tache => tache.status == "terminée")
                                res.data.progression = (res.data.tache_accomp.length / res.data.tache_array.length) * 100
                            })
                            .catch(error => {
                                console.dir(error)
                            })
                    })

                    this.projet = res.data
                    console.log(res.data)

                })
                .catch(err => {
                    if (err.response.status == "401") {
                        alert("Votre session a expiré. Veuillez vous reconnecter.")
                        this.$router.push({name: 'Auth'})
                    }
                    console.dir(err)
                })
        }
    },
    created() {
    //     this.$store.commit('resetUG_C')
    //     axios.post(this.authAPI + "logout/").then(()=>{console.log("loged out")})
        this.getProject()

    }
}
</script>

<style>

</style>
