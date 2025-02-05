import { getCategoryWiseProducts, getProductCategory, getProductsData } from '@/services/productsService';
import { defineStore } from 'pinia';

export const useProductStore = defineStore('products', {
    state: () => ({
        productList: [],
        categoryList: [],
        filteredList: [],
        category: 'all',
        currentProductData: []
    }),
    actions: {
        async fetchProductsData() {
            try{
                const response = await getProductsData();
                this.productList = response.data;
                this.filteredList = response.data;
                // this.categoryList = [...new Set(response.data.map((obj) => obj.category))]
            }catch(err){
                console.log(err)
            }
        },
        getFilteredData(){
            if (!this.category || this.category === 'all') {
                this.filteredList = this.productList; 
            } else {
                this.filteredList = this.productList.filter((obj) => obj.category === this.category);
            }
        },
        async fetchSingleProductData(payload){
            this.currentProductData = [];
            try{
                const response = await getProductsData(payload);
                this.currentProductData = await response.data;
            }catch(err){
                console.log("error", err)
            }
        },

        async fetchProductCategory(){
            try{
                const response = await getProductCategory();
                this.categoryList = response.data;
            }catch(err){
                console.log(err)
            }
        },

        async fetchCategoryWiseProducts(payload){
            console.log(payload)
            this.productList = [];
            try{
                const response = await getCategoryWiseProducts(payload);
                this.productList = response.data;
            }catch(err){
                console.log(err)
            }
        }
    }
})