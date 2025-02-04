<script setup>
    import { useCartStore } from '@/store.js/cart';

    defineProps({
        data: {
            type: Object,
            required: true
        }
    })

    const cartStore = useCartStore();
</script>

<template>
    <div class="relative p-5 w-full md:w-75 flex flex-col items-center justify-between border-1 border-gray-300 cursor-pointer">
        <div class="w-full flex flex-col items-center">
            <div class="absolute top-0 right-0 p-4">
                <img src="../assets/like-product.svg" alt="">   
            </div>
            <div class="p-7">
                <img class="w-[203px] h-[203px] " :src="data.image" alt="product image">
            </div>
            
            <!-- product card title and data -->
            <div class="w-full">
                <h5 class="text-base font-bold leading-[1.5]">{{data.title}}</h5>
                <p class="text-xs text-gray-500 mb-1">sdsdfs</p>
                <p class="text-xs truncate mb-3">{{data.description}}</p>
            </div>
        </div>
        

        <div class="flex justify-between items-center w-full ">
            <p class="font-bold ">${{data.price}}</p>
            <button @click="cartStore.addToCart(data)" class="px-6 py-2 font-bold bg-[#f05252] text-white rounded-full cursor-pointer ">Add to cart  </button>
        </div>
    </div>   
</template>