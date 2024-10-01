import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
const Layyout=()=>{
    return(
        <div>
            <Header/>
            <Sidebar/>

            <div className="p-7">
                <Outlet/>
            </div>
        </div>
    )
}

export default Layyout;