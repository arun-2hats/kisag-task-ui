<script setup>
    import { useCartStore } from '@/store.js/cart';
    import { storeToRefs } from 'pinia';
    import { ref } from 'vue';
    const cartStore = useCartStore();

    const cartModalVisiblity = ref(false);
    const { cart, cartItems } = storeToRefs(cartStore);
</script>

<template>
    <div class="w-5 h-5 relative">
        <button @click="cartModalVisiblity = !cartModalVisiblity">
            <img width="20" height="20" src="../assets/cart-icon.svg" alt="whish list icon">
        </button> 
        <!-- Badge for Icon -->
        <div v-if="!cartModalVisiblity && cart > 0" class="absolute -top-2 left-3 text-xs px-1 md:px-2 leading-[1.5] bg-red-500 text-white rounded-full">{{cart}}</div>
        
        <!-- Modal - Cart view -->
        <div v-if="cartModalVisiblity" class="w-78 absolute top-6 right-0 bg-white border-1 border-gray-100 shadow-md z-10 rounded-md">
            <div class="flex justify-between items-center border-b-1 border-gray-200 p-3 shadow-sm">
                <h5 class="font-bold leading-[1.5]">Cart</h5>
                <div class="text-xs px-2 leading-[1.5] bg-red-500 text-white rounded-full">{{cart}}</div>
            </div>

            <div class="flex flex-col px-3 w-full h-68 overflow-y-scroll">
                <div v-for="(product, index) in cartItems" :key="index" class="w-full flex items-center border-b-1 border-gray-200 py-1">
                    <img class="p-4" width="65" height="65" :src="product.image" alt="product image">
                    <div class="flex-1 w-[35%]">
                        <h6 class="leading-[1.5] text-sm truncate">{{product.title}}</h6>
                        <p class="leading-[1.5] font-bold ">${{product.price}}</p>
                    </div>
                    <p class="font-bold inline-flex items-center gap-1">
                        <span class="text-sm font-bold mb-1 ">x</span> {{ product.count }}
                    </p>  
                </div>
                  
            </div>
        </div>
    </div>
</template>