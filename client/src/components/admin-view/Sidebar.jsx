import { LayoutDashboard, ShoppingBasket,BadgeCheck, ChartNoAxesCombined } from "lucide-react";
import { Fragment } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const adminSideBarMenu=[
    {
        id: "dashboard",
        label:"Dashboard",
        path:"/admin/Dashboard",
        icon:<LayoutDashboard />


     },
     {
        id:"features",
        label:"features",
        path:"/admin/features",
        icon:<ShoppingBasket />
     },

     {
        id:"products",
        label:"Products",
        path:"/admin/products",
        icon:<ShoppingBasket />
     },
     {
        id:"orders",
        label:"Orders",
        path:"/admin/orders",
        icon:<BadgeCheck />
     }

]

const Sidebar=()=>{
    
    return(
        <Fragment>
         <aside className="hidden w-64 flex-col border-r bg-background p-6 lg:flex">

            <div className="flex cursor-pointer items-center gap-2">
            <ChartNoAxesCombined size={30} />
            <h1 className="text-2xl font-extrabold">Admin Panel</h1>
            </div>

         </aside>
        </Fragment>
    )
}

export default Sidebar;