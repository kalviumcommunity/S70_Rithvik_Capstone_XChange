import axios from "axios";
const api = axios.create({ baseURL: "http://localhost:5000/api" });

export const updateListing = (id, data) => api.put(`/listings/${id}`, data);
export const deleteListing = (id) => api.delete(`/listings/${id}`);


export default api;
