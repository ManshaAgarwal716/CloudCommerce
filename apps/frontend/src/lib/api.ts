import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ||
    "http://localhost:8000",
});

export const getProducts = () => api.get('/products/');
export const getProduct = (id: number) => api.get(`/products/${id}`);
export const createProduct = (product: any) => api.post('/products/', product);
export const updateProduct = (id: number, product: any) => api.put(`/products/${id}`, product);
export const deleteProduct = (id: number) => api.delete(`/products/${id}`);