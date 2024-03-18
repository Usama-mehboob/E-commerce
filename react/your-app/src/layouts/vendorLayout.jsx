import { useState } from "react";
import Navbar from "../components/navbar";
import SideBar from "../components/sideBar";
import Home from "../vendor";

function VendorLayout (){
    const [options, setOptions] = useState("analytics");
    const changeOption = (newoption) =>{
        setOptions(newoption)
    }
    return(
        <>
            <div className=" flex w-screen h-screen flex-col  ">
                <Navbar/>
                 <div className="flex w-full h-full ">
                <SideBar changeOption={changeOption}/>
                <Home option={options}/>
                </div>
            </div>
        </>
    )
}

export  default VendorLayout;