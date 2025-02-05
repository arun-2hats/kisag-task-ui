import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useCartStore = defineStore('cart', () => {
    const cart = ref(0);
    const cartItems = reactive([]);
    const addToCart = (data) => {
        const isProductExist = cartItems.find((obj) => obj.id === data.id);
        if(isProductExist){
            isProductExist.count++;
        }else{
            cartItems.push({...data, count: 1})
        }
        cart.value++
    }

    return { cart, addToCart, cartItems }
})