import Product from "./add-products";
import Analytics from "./analytics";
import Inventory from "./inventory";
import Order from "./order";


function Home({option }){
    
    return(
        <>
        <div className=" flex w-4/5 h-full ">
           {option == "analytics" &&  <Analytics  />}
           {option == "Inventory" &&  <Inventory  />}
           {option == "Order" &&  <Order />}
           {option == "Product" &&  <Product   />}
           
        </div>
        </>
    )
}

export default Home;