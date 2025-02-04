import { apiClient } from "./axiosInstance"

export const getProductsData = (payload) => {
    return apiClient.get(`https://fakestoreapi.com/products${payload ? '/' + payload : ''}`);
}