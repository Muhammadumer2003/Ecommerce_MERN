import { LayoutDashboard, ShoppingBasket , Grid2x2Plus,BadgeCheck, ChartNoAxesCombined } from "lucide-react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";

// eslint-disable-next-line react-refresh/only-export-components
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
        icon:<Grid2x2Plus />
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

];

 // eslint-disable-next-line react/prop-types
 const MenuItems=({setOpen})=>{
   const navigate = useNavigate();
    return (<nav className="mt-8 flex-col flex gap-2">
   {adminSideBarMenu.map((e)=>

      (
      <div onClick={()=>{
         navigate(e.path);
         setOpen ? !setOpen : null
      }} 
      className="flex cursor-pointer text-xl items-center gap-2 rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground" 
      key={e.id}>
         {e.icon}
         <span>{e.label}</span>
         </div>
      ))}

      </nav>

)};

// eslint-disable-next-line react/prop-types
const Sidebar=({open,setOpen})=>{

   const navigate = useNavigate();
    
    return(
        <Fragment>
          <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-64">
          <div className="flex flex-col h-full">
            <SheetHeader className="border-b">
              <SheetTitle 
               onClick={()=>{
                  navigate("/admin/dashboard")}} className="flex gap-2 mt-5 mb-5">
                <ChartNoAxesCombined size={30} />
                <h1 className="text-2xl font-extrabold">Admin Panel</h1>
              </SheetTitle>
            </SheetHeader>
            <MenuItems setOpen={setOpen} />
          </div>
        </SheetContent>
      </Sheet>
         <aside className="hidden w-64 flex-col border-r bg-background p-6 lg:flex">

            <div onClick={()=>{
               navigate("/admin/dashboard")


            }} 
            className="flex cursor-pointer items-center gap-2">
            <ChartNoAxesCombined size={30} />
            <h1 className="text-2xl font-extrabold">Admin Panel</h1>
            </div>
            <MenuItems />

         </aside>
        </Fragment>
    )
}

export default Sidebar;