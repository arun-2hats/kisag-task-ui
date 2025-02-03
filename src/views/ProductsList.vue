<script setup>
    import ProductCard1 from '@/components/ProductCard1.vue';
    import { useProductStore } from '@/store.js/products';
    import { storeToRefs } from 'pinia';
    import { onMounted, watch } from 'vue';

    const productStore = useProductStore();
    const { categoryList, productList, filteredList, category } = storeToRefs(productStore);

    watch(() => {
        if(productList.value.length === 0){
            productStore.fetchProductsData();
        }   
    })

    const onSearchHandler = () => {
        productStore.getFilteredData();
    };
</script>


<template>
    <div class="container mx-auto my-12">
        <!-- Fitler and Search -->
        <div class="flex flex-row justify-end w-full mb-2">
            <form class="flex space-x-2">
                <select 
                    value="all" 
                    @change="onSearchHandler" 
                    class="border-none outline-none flex flex-row bg-gray-100 rounded-full px-[.9rem]  py-[.8rem] space-x-2 w-[24rem]" 
                    v-model="category" 
                    type="text" 
                    aria-label="search item"  
                >
                    <option selected value="all">Select category</option>
                    <option v-for="category in categoryList"  :value="category">{{category}}</option>
                </select>
            </form>
        </div>

        <div class="flex flex-wrap">
            <ProductCard1 v-for="(product, index) in filteredList" :key="index" :data="product" />
        </div>
    </div>
</template>