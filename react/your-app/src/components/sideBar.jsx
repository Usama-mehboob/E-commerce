import Product from "../vendor/add-products";
import Analytics from "../vendor/analytics";
import Inventory from "../vendor/inventory";
import Order from "../vendor/order";



function SideBar ({changeOption}) {
    return (
        <>
            <div className="w-19rem h-full bg-pink-400 items-center flex flex-col " >
               
               <p className="text-2xl font-semibold flex justify-start p-4 m-4">
                    SideBar
                </p>
                <hr />
                <p className="text-2xl w-full flex justify-start cursor-pointer p-2" 
                onClick={() =>{
                    changeOption("analytics")
                }}>
                Home
                </p>
                <p className="text-2xl w-full flex justify-start cursor-pointer  p-2" 
                 onClick={() =>{
                    changeOption("Product")
                }}>
                Add Products
                </p>
                <p className="text-2xl w-full flex justify-start cursor-pointer  p-2" 
                 onClick={() =>{
                    changeOption("Inventory")
                }}>
                Inventory Management
                </p>
                <p className="text-2xl w-full flex justify-start cursor-pointer  p-2" 
                 onClick={() =>{
                    changeOption("Order")
                }}>
                Order Management
                </p>
  
            </div>
        </>     
    )
}

export default SideBar;