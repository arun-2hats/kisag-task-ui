<script setup>
    import { watch } from 'vue';
    import NavLinkItem from './NavLinkItem.vue';
    import { useProductStore } from '@/store.js/products';
    import { storeToRefs } from 'pinia';

    const productStore = useProductStore();
    const { categoryList } = storeToRefs(productStore);

    watch(() => {
        productStore.fetchProductCategory();
    })

</script>

<template>
    <div class="hidden md:block mx-auto container border-b-1 border-gray-100">
        <ul class="flex items-center justify-center h-14">
            <NavLinkItem v-for="(menuItem, index) in categoryList" :key="index" :category="menuItem"/>
        </ul>
    </div>
</template>