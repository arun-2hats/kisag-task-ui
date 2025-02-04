<script setup>
    import { useCartStore } from '@/store.js/cart';
    import { useProductStore } from '@/store.js/products';
    import { storeToRefs } from 'pinia';
    import { watch } from 'vue';
    import { useRoute } from 'vue-router';
    
    const productStore = useProductStore();
    const { currentProductData } = storeToRefs(productStore);

    const router = useRoute();
    const cartStore = useCartStore();
    

    watch(() => router?.params?.id,
    (id) => {
        productStore.fetchSingleProductData(id);
    },{ immediate: true });
</script>

<template>
    <div class="px-4">
        <div class="container mx-auto">
            <div class="py-10 flex flex-col md:flex-row items-center md:items-start justify-center space-y-5 md:space-x-6">
                <img width="350" height="350" :src="currentProductData.image" alt="product image">
                <div class="flex flex-col">
                    <h6 class="font-bold text-2xl mb-2">{{ currentProductData?.title }}</h6>
                    <p class="mb-4">{{ currentProductData.description }}</p>
                    <p class="text-xl font-bold mb-2">${{ currentProductData.price }}</p>
                    <div class="flex space-x-2">
                        <button class="cursor-pointer px-6 py-2 font-bold bg-[#f05252] hover:bg-black hover:text-white text-white rounded-full ">Buy Now  </button>
                        <button @click="cartStore.addToCart(currentProductData)" class="cursor-pointer px-6 py-2 font-bold border-1 border-black hover:bg-black hover:text-white text-black rounded-full ">Add to cart  </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>