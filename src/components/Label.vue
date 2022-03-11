<template>
<v-alert dense prominent text :icon="icon" color="accent">
    <strong> {{label}}</strong>
</v-alert>
</template>

<script>
export default {
    name: "v-label",
    props: {
        label:  {
            type: String,
            required: true,
        },
        icon: {
            type: String,
            default: "mdi-image"
        }
    }
}
</script>


