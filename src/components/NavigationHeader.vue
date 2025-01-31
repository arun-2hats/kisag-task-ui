<script setup>
import NavLinkItem from './NavLinkItem.vue';

    const menuItems = [
        {
            id: 0,
            displayName: "New",
            subMenu: false
        },
        {
            id: 1,
            displayName: "Whippers",
            subMenu: {
                type: 'list',
                items: [
                    {
                        id: 0,
                        displayName: 'Cream Whippeprs',
                    },
                    {
                        id: 1,
                        displayName: 'Whipper Charges',
                    },
                    {
                        id: 2,
                        displayName: 'Soda Makers',
                    },
                    {
                        id: 3,
                        displayName: 'ISI Nitro',
                    },
                    {
                        id: 4,
                        displayName: 'Accessories/Spare Parts',
                    }
                ]
            }
        },
        {
            id: 2,
            displayName: 'Cooking at Table',
            subMenu: {
                type: 'img-list',
                items: [
                    {
                        id: 0,
                        displayName: 'Longfire',
                    },
                    {
                        id: 1,
                        displayName: 'Powerfire',
                    },
                    {
                        id: 2,
                        displayName: 'Foundue Set',
                    },
                    {
                        id: 3,
                        displayName: 'Rechauds',
                    },
                    {
                        id: 4,
                        displayName: 'Caquelons',
                    },
                    {
                        id: 4,
                        displayName: 'Raclette',
                    },
                    {
                        id: 4,
                        displayName: 'Powerfire',
                    }

                ]
            }
        },
        {
            id: 3,
            displayName: 'In the  Kitchen',
            subMenu: false
        },
        {
            id: 4,
            displayName: 'Gastro',
            subMenu: false
        },
        {
            id: 5,
            displayName: 'Recipes',
            subMenu: false
        },
        {
            id: 6,
            displayName: 'About Us',
            subMenu: false
        }
    ]
</script>

<template>
    <div class="hidden md:block mx-auto container border-b-1 border-gray-100">
        <ul class="flex items-center space-x-11 justify-center p-4">
            <NavLinkItem v-for="(menuItem, index) in menuItems" :key="index" :data="menuItem"/>
        </ul>
    </div>
</template>