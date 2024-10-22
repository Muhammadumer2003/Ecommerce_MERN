import { useDispatch } from "react-redux";
import { Button } from "../ui/button";
import { AlignRight, LogOut } from "lucide-react";
import { logoutUserstart } from "@/store/auth-slice";



// eslint-disable-next-line react/prop-types
const Header=({setOpen})=>{
    const dispatch=useDispatch();
    const handleLogout=()=>{
        dispatch(logoutUserstart())

        console.log("click");
    }
        return(
       <header className="flex items-center justify-between px-4 py-3 bg-background border-b">
        <Button onClick={() => setOpen(true)} className="lg:hidden sm:block">
        <AlignRight />
        <span className="sr-only">Toggle Menu</span>
        </Button>
        


        <div className="flex flex-1 justify-end">
        <Button
          onClick={handleLogout}
          className="inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium shadow"
        >
          <LogOut />
          Logout
        </Button>
      </div>

       </header>
    )
}

export default Header;