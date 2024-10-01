import { Outlet } from "react-router-dom";

const Layout = () => {
    return(
        <div className=" min-h-screen w-full bg-red-900 flex">

            <div className="w-[50%] bg-green-900 h-screen flex justify-center items-center">

                <div>
                    <h1 className="text-4xl font-bold text-center text-white">Welcome to the Ecommerce.pk</h1>
                </div>


            </div>

            <div className="w-[50%]  h-screen flex justify-center items-center">
            <Outlet/>

            </div>

           


            
        </div>
    )
}

export default Layout;