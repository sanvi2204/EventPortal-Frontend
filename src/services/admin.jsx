import { DeleteUserByID, getAllUsers,DeleteProductByID,ProductData,addProduct } from "./api"



const getAllUsersData = async () => {
    const res = await getAllUsers()
    return res?.data;

}
const deleteUser = async (uid) => {
    console.log(uid)
    const res = await DeleteUserByID(uid);
    return res?.data;
}

const deleteproduct = async (uid) => {
    console.log(uid)
    const res = await DeleteProductByID(uid);
    return res?.data;
}

const getProductData = async () => {
    const res = await ProductData()
    return res?.data;
}

const PostProduct = async(product)=>{
    const res = await addProduct(product);
    return res?.data;
}

export const Admin = { getAllUsersData, deleteUser,deleteproduct,getProductData,PostProduct }