<script setup lang="ts">
    import SearchComponent from './form-inputs/SearchComponent.vue';

</script>

<template>
    <div class="border-b-1 border-gray-100">
        <div class="mx-auto container flex flex-row items-center justify-between py-[1.25rem] ">
            <img width="102" height="32" src="../assets/logo.svg" alt="kisag logo">

            <SearchComponent />

            <div class="flex">
                <button class="flex items-center">EN 
                    <svg class="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </button>

                <ul class="flex items-center ml-[1rem] space-x-4 ">
                    <button><img width="20" height="20" src="../assets/user-icon.svg" alt="whish list icon"></button>
                    <button><img width="20" height="20" src="../assets/like-product.svg" alt="whish list icon"></button>
                    <button><img width="20" height="20" src="../assets/cart-icon.svg" alt="whish list icon"></button>
                </ul>
            </div>
        </div>
    </div>
</template>