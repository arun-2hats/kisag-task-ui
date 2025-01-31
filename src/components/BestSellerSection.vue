<script setup lang="ts">
    import ProductCard from './ProductCard.vue';

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
        <div class="py-24 ">
            <div class="head flex justify-between mb-14">
                <h3 class="text-4xl font-extrabold">Bestseller</h3>

                <div class="flex space-x-4 items-center">
                    <!-- <a class="font-black" href="#">See all</a> -->
                     <RouterLink :to="'product-list'" class="font-black">See all</RouterLink>
                    <div class="navs flex space-x-4">
                        <div id="prev" class="w-11 h-11 bg-[#8d8d8d] rounded-full"></div>
                        <div id="next" class="w-11 h-11 bg-[#8d8d8d] rounded-full"></div>
                    </div>
                </div>
            </div>
            <div class="flex overflow-x-scroll">
                <ProductCard v-for="(bestSeller, index) in bestSellerData" :key="index" :data="bestSeller" />
            </div>
        </div>
    </div>
</template>

<style scoped>
    ::-webkit-scrollbar{
        display: none;
    }
</style>