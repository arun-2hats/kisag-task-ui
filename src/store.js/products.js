import { getProductsData } from '@/services/productsService';
import { defineStore } from 'pinia';

export const useProductStore = defineStore('products', {
    state: () => ({
        productList: [],
        categoryList: [],
        filteredList: [],
        category: 'all'
    }),
    actions: {
        fetchProductsData() {
            getProductsData().then( response => {
                this.productList = response.data;
                this.filteredList = response.data
                this.categoryList = [...new Set(response.data.map((obj) => obj.category))]
            }).catch( err => {
                console.log("error", err)
            })
        },
        getFilteredData(){
            if (!this.category || this.category === 'all') {
                this.filteredList = this.productList; 
            } else {
                this.filteredList = this.productList.filter((obj) => obj.category === this.category);
            }
        }
    }
})