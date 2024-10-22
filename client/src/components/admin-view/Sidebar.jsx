import { LayoutDashboard, ShoppingBasket,BadgeCheck } from "lucide-react";


const adminSideBarMenu=[
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
        <>
        </>
    )
}

export default Sidebar;