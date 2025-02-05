<script setup>
    import ProductCard1 from '@/components/ProductCard.vue';
    import { useProductStore } from '@/store.js/products';
    import { storeToRefs } from 'pinia';
    import { onMounted } from 'vue';

    const productStore = useProductStore();
    const { categoryList, filteredList, category } = storeToRefs(productStore);

    onMounted(() => {
        productStore.fetchProductsData();
    })

    const onSearchHandler = () => {
        productStore.getFilteredData();
    };
</script>


<template>
    <div class="container mx-auto my-12">
        <!-- Fitler and Search -->
        <div class="flex flex-col items-center justify-center">
            <div class="flex flex-row justify-center xl:justify-end w-full mb-2">
                <form class="flex space-x-2">
                    <select 
                        value="all" 
                        @change="onSearchHandler" 
                        class=" border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5  border-none outline-none flex-row bg-gray-100 px-[.9rem]  py-[.8rem] space-x-2 w-[24rem] " 
                        v-model="category" 
                        type="text" 
                        aria-label="search item"  
                    >
                        <option selected value="all">Select category</option>
                        <option v-for="category in categoryList"  :value="category">{{category}}</option>
                    </select>
                </form>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
                <ProductCard1 class="" v-for="(product, index) in filteredList" :key="index" :data="product" />
            </div>
        </div>
    </div>
</template>