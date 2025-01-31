<script setup>
    const props = defineProps({
        id: {
            type: Number,
            required: true
        }
    })
</script>
<template>
    <p>{{ id }}</p>
</template>