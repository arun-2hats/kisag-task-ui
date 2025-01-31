<script setup>
    import { ref } from 'vue';

    defineProps({
        data: Object,
        key: Number
    })

    const isSubMenuVisible = ref(false);
</script>

<template>
    <div class="">
        <li 
            class="relative z-9" 
            v-if="data.subMenu" 
            @mouseenter="isSubMenuVisible = !isSubMenuVisible" 
            @mouseleave="isSubMenuVisible = !isSubMenuVisible"
        >
            <a class="text-sm md:text-base font-extrabold hover:text-orange-600" href="#">{{data.displayName}}</a>
            <div 
                v-if="isSubMenuVisible" 
                class="absolute   bg-white border-1 border-gray-100 top-10 "
                :class="data.subMenu.type === 'img-list' ? 'rounded-xl p-10 -left-[13vw]' : 'rounded-md px-1 py-2 left-0'"
            >
                <div v-if="data.subMenu.type === 'list'" class="">
                    <ul class="">
                        <li class="text-sm md:text-base p-2" v-for="(item, index) in data?.subMenu?.items" :key="index"><a href="#">{{item.displayName}}</a></li>
                    </ul>
                </div>
                <div v-if="data.subMenu.type === 'img-list'" class="">
                    <ul class="w-[800px] grid grid-cols-5 gap-10">
                        <li class="text-sm md:text-base text-center" v-for="(item, index) in data?.subMenu?.items" :key="index">
                            <img class="min-w-[134px] max-h-[90px]" width="134" height="90" src="../assets/menu-img.png" alt="menu item image">
                            <a href="#" class="font-bold">{{item.displayName}}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
        <li v-else="data.subMenu"><a class="text-sm md:text-base font-extrabold hover:text-orange-600" href="#">{{data.displayName}}</a></li>
    </div>
</template>
