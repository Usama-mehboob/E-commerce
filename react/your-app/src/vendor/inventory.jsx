 
import axios from "axios";
import { useEffect, useState } from "react";

function Product({item, updateProductList}){
    // console.log(item)
   const deleteProduct = async () =>{
    const {data} = await axios.delete("http://localhost:3001/user/deleteUser", {
        params:{
            userId: item.userId,
        },
    })
    if(data.error || !data.response){
        return alert(" Unable to delete products")
    }
    return updateProductList();
   }
    
   const editProduct = async () =>{
    const {data} = await axios.put("http://localhost:3001/user/updateUser", {
        params:{
            userId: item.userId,
            userName: item.userName,
        },
    })
    console.log("data", data)
    if(data.error || !data.response){
        return alert(" Unable to Edit products")
    }
    return updateProductList();
   }
    return(
        <>
        <div className="w-1/4 h-2/6 p-2">
            <div className="w-full h-full bg-gray-300 shadow-lg p-2">
                <div className="w-full h-2/6">
                <p className="text-gray-900 font-normal text-md">{item.userName}</p>
                <p className="text-gray-900 font-normal text-md">{item.Role.rolename}   </p>
                <p className="text-gray-900 font-normal text-md">{item.Address.addressNo}</p>
                </div>
                <div className="w-full flex justify-end gap-2 self-end items-end">
                    <button className="bg-blue-300" 
                    onClick={()=>{
                       void editProduct()
                    }}>Edit</button>
                    <button className="bg-blue-300" 
                     onClick={()=>{void deleteProduct()}}
                    >Delete</button>
                </div>
            </div>
        </div>
        </>
    )
}

function Inventory(){
    const [products, setProducts] = useState([])
    const getAllProducts = async ()=>{
        // const url = " http://localhost:3001/user/getUser";
        // const {data: Products} = await axios.get( url, {
        //     withCredentials: true
        // });


        const {data: Products} = await axios.get( "http://localhost:3001/user/getUser")     
        // console.log(Products)
               
        setProducts(Products.response)
    };
    useEffect(()=>{
        void getAllProducts();
    }, [])
    return(
        <>
        <div className=" flex w-full h-full bg-gray-300 p-4 flex-col">
        <p className="text-gray-900 text-2xl font-semibold">Inventory</p>
           <div className="w-full h-full bg-gray-300 p-4 flex flex-wrap">
                {products != null ? (
                    <>
                    {products.map((item, index) =>{
                        return <Product item = {item} key={index} updateProductList = {getAllProducts}/>
                    })}
                    </>
                ) : (
                    <>
                    <p> NO Products is available </p>
                    </>
                )}
           </div>
        </div>
        </>
    )   
}

export default Inventory;