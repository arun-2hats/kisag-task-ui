<script setup>

    defineProps({
        category: String,
        key: Number
    })

</script>

<template>
    <div class="">
        <li class="mx-5 py-4">
            <RouterLink 
                active-class="text-red-500" :to="{name: 'products', params: { category }}" 
                class="text-sm md:text-base font-bold hover:text-red-400" 
                href="#"
            >
                {{category}}
            </RouterLink>
        </li>
    </div>
</template>
