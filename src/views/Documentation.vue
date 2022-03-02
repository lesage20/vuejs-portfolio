<template>
  <v-cpontainer>
      {{docs}}
  </v-cpontainer>
</template>

<script>
import axios from "axios"
export default {
    name: "Documentation",
    data: ()=> ({
        docs: {}
    }),
    methods: {
        getDocs(){
            axios.get(this.docAPI)
            .then(res => {
                this.docs = res.data
            })
        }
    },
    created(){
        this.getDocs()
    }
}
</script>

<style>

</style>