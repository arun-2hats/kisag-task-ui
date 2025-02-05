<script setup>
    import ProductCard1 from '@/components/ProductCard.vue';
    import { useProductStore } from '@/store.js/products';
    import { storeToRefs } from 'pinia';
    import { watchEffect } from 'vue';
    import { useRoute } from 'vue-router';

    const productStore = useProductStore();
    const { productList } = storeToRefs(productStore);

    const route = useRoute()

    watchEffect(() => {
        productStore.fetchCategoryWiseProducts({category: route.params.category})
    }, {immediate: true})
</script>

<template>
    <div class="container mx-auto py-12">
        <div class="py-2 hover:underline">
            <RouterLink :to="{name: 'product-list'}"><span class="pi pi-arrow-left text-sm"></span> Back to Products</RouterLink>    
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            <ProductCard1 class="" v-for="(product, index) in productList" :key="index" :data="product" />
        </div>
    </div>
</template>