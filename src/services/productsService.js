import { apiClient } from "./axiosInstance"

export const getProductsData = () => {
    return apiClient.get('products');
}