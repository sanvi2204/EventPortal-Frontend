import axios from 'axios';


const baseURL = 'http://localhost:7777/api';
const axiosInstance = axios.create({
    baseURL,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
const SignUp = (name, email, phone, address, password) => axios.post(`${baseURL}/auth/register`, { name, email, phone, address, password });
const WebData = () => axiosInstance.get('/web/site');
const UserData = (email) => axiosInstance.get(`/users/email/${email}`);
const UpdateUserByID = (id, data) => axiosInstance.put(`/users/update/${id}`, data);
const DeleteUserByID = (id) => axiosInstance.delete(`/users/delete/${id}`);
const Booking = (eventName,eventDate,eventLocation,eventRequirements,desiredServices,message) => axios.post(`${baseURL}/bookings/submit`,{eventName,eventDate,eventLocation,eventRequirements,desiredServices,message});
const ProductData = () => axiosInstance.get(`/users/getproduct`);
const DeleteProductByID = (id)=> axiosInstance.delete(`users/deleteproduct/${id}`)
const addProduct = (product) => axiosInstance.post(`users/addproducts`,product);

const SignIn = (email, password) => axios.post(`${baseURL}/auth/login`, { email, password });


const getAllUsers = () => axiosInstance.get('/users/all')

export { axiosInstance, SignUp, WebData, UserData, UpdateUserByID, getAllUsers, DeleteUserByID,SignIn,Booking,ProductData,DeleteProductByID ,addProduct }
