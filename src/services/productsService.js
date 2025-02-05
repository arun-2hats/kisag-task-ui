import { apiClient } from "./axiosInstance"

// Get all products
export const getProductsData = (payload) => {
    return apiClient.get(`https://fakestoreapi.com/products${payload ? '/' + payload : ''}`);
}

// Get all categories
export const getProductCategory = () => {
    return apiClient.get(`https://fakestoreapi.com/products/categories`);
}

// Get products in a specific category
export const getCategoryWiseProducts = (payload) => {
    return apiClient.get(`https://fakestoreapi.com/products/category${payload ? '/'+payload.category : ''}`);
}
