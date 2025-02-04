<script setup>
    defineProps({
        data: {
            type: Object,
            required: true
        }
    })
</script>

<template>
    <RouterLink :to="{name: 'product-view', params: {id: data.id}}">
        <div class="relative px-5 w-75 flex flex-col items-center border-r-1 border-gray-300 cursor-pointer">
            <div class="absolute top-0 right-0 p-4">
                <img src="../assets/like-product.svg" alt="">   
            </div>
            <div class="p-7">
                <img class="w-[203px] h-[203px] " src="../assets/product-01.png" alt="product image">
            </div>
            
            <!-- product card title and data -->
            <div class="w-full">
                <h5 class="text-base font-bold leading-[1.5]">{{data.name}}</h5>
                <p class="text-xs text-gray-500 mb-1">{{data['art-no']}}</p>
                <p class="text-xs truncate mb-3">{{data.desc}}</p>
                <div class="flex justify-between items-center ">
                    <p class="font-bold ">{{data.price}}</p>
                    <button class="px-6 py-2 font-bold bg-[#f05252] hover:bg-black hover:text-white text-white rounded-full ">Add to cart  </button>
                </div>
            </div>
        </div>   
    </RouterLink>
</template>