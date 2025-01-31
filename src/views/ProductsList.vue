<script setup>
    import ProductCard1 from '@/components/ProductCard1.vue';
import { getProductsData } from '@/services/productsService';
    import axios from 'axios';
    import { onMounted, ref } from 'vue';

    const products = ref(null);

    onMounted(() => {
        // console.log("component mounted");
        // axios.get('https://fakestoreapi.com/products').then((resposne) => {
        //     console.log("printing repsonse", resposne);
        //     products.value = resposne.data;
        // }).catch((err) => {
        //     console.log("error", err)
        // })
        getProductsData().then( response => {
            products.value = response.data;
        }).catch( err => {
            console.log("error", err)
        })
    })

</script>

<template>
    <div class="container mx-auto">
        <div class="flex flex-wrap justify-around">
            <ProductCard1 v-for="(product, index) in products" :key="index" :data="product" />
        </div>
    </div>
</template>