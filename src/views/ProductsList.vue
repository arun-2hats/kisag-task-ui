<script setup>
    import ProductCard1 from '@/components/ProductCard1.vue';
    import { getProductsData } from '@/services/productsService';
    import { onMounted, reactive, ref } from 'vue';

    const products = ref(null);
    const filteredProducts = ref(null);
    const productCategories = ref(null);
    const cat = ref(null);
    
    onMounted(() => {
        getProductsData().then( response => {
            products.value = response.data;
            filteredProducts.value = response.data
            productCategories.value = [...new Set(response.data.map((obj) => obj.category))]
        }).catch( err => {
            console.log("error", err)
        })
    })

    const onSearchHandler = () => {
        if (!cat.value || cat.value === 'all') {
            filteredProducts.value = products.value; 
        } else {
            filteredProducts.value = products.value.filter((obj) => obj.category === cat.value);
        }
    };

</script>


<template>
    <div class="container mx-auto my-12">
        <!-- Fitler and Search -->
        <div class="flex flex-row justify-end w-full mb-2">
            <form class="flex space-x-2">
                <select value="all" @change="onSearchHandler" class="border-none outline-none flex flex-row bg-gray-100 rounded-full px-[.9rem]  py-[.8rem] space-x-2 w-[24rem]" v-model="cat" type="text" aria-label="search item"  >
                    <option selected value="all">Select category</option>
                    <option v-for="category in productCategories"  :value="category">{{category}}</option>
                </select>
            </form>
        </div>

        <div class="flex flex-wrap">
            <ProductCard1 rd1 v-for="(product, index) in filteredProducts" :key="index" :data="product" />
        </div>
    </div>
</template>