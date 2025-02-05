<script setup lang="ts">
    import { useProductStore } from '@/store.js/products';
import ProductCard1 from './ProductCard.vue';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

    const productStore = useProductStore();
    const { categoryList, filteredList, category, productList } = storeToRefs(productStore);

    onMounted(() => {
        productStore.fetchProductsData();
    })

    const bestSellerData = [
        {
            'id': 2312,
            'name': 'Fondue set Promo',
            'art-no': 'Artikle.-Nr: 2342',
            'desc': 'Perfect fondue fun for meat, fish and vegetable lovers. sdsdfsdfsdfsdfs',
            'price': 'CHF 250'
        },
        {
            'id': 3453,
            'name': 'Fondue set Promo',
            'art-no': 'Artikle.-Nr: 2342',
            'desc': 'Perfect fondue fun for meat, fish and vegetable lovers. sdsdfsdfsdfsdfs',
            'price': 'CHF 250'
        },
        {
            'id': 6476,
            'name': 'Fondue set Promo',
            'art-no': 'Artikle.-Nr: 2342',
            'desc': 'Perfect fondue fun for meat, fish and vegetable lovers. sdsdfsdfsdfsdfs',
            'price': 'CHF 250'
        },
        {
            'id': 2346,
            'name': 'Fondue set Promo',
            'art-no': 'Artikle.-Nr: 2342',
            'desc': 'Perfect fondue fun for meat, fish and vegetable lovers. sdsdfsdfsdfsdfs',
            'price': 'CHF 250'
        },
        {
            'id': 2346,
            'name': 'Fondue set Promo',
            'art-no': 'Artikle.-Nr: 2342',
            'desc': 'Perfect fondue fun for meat, fish and vegetable lovers. sdsdfsdfsdfsdfs',
            'price': 'CHF 250'
        },
        {
            'id': 2346,
            'name': 'Fondue set Promo',
            'art-no': 'Artikle.-Nr: 2342',
            'desc': 'Perfect fondue fun for meat, fish and vegetable lovers. sdsdfsdfsdfsdfs',
            'price': 'CHF 250'
        },
        
    ]

</script>

<template>
    <div class="container mx-auto">
        <div class="py-12 md:py-24 px-4 md:px-0">
            <div class="head flex justify-between mb-14">
                <h3 class="text-[1.5rem] md:text-4xl font-bold">Bestseller</h3>

                <div class="hidden md:flex space-x-4 items-center">
                    <!-- <a class="font-black" href="#">See all</a> -->
                    <router-link :to="{name: 'product-list'}" class="font-bold">See all</router-link>
                    <div class="navs flex space-x-4">
                        <div id="prev" class="w-11 h-11 bg-[#8d8d8d] rounded-full"></div>
                        <div id="next" class="w-11 h-11 bg-[#8d8d8d] rounded-full"></div>
                    </div>
                </div>
            </div>
            <div class="flex overflow-x-scroll">
                <ProductCard1 :border="'right'" v-for="(product, index) in productList.slice(0, 7)" :key="index" :data="product" />
            </div>
        </div>
    </div>
</template>

<style scoped>
    ::-webkit-scrollbar{
        display: none;
    }
</style>