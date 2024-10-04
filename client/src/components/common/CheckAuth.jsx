/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";



const CheckAuth = ({isAuthenticated, user, children}) => {

    const location = useLocation();

    if(!isAuthenticated && !(location.pathname.includes('login')|| location.pathname.includes('register'))){
        return <Navigate to="/auth/login" />
    }

    if(isAuthenticated  && (location.pathname.includes('login') || location.pathname.includes('register'))){
       if(user?.role==='admin'){
        console.log('admin')
        return <Navigate to="/admin/dashboard" />
       }
       else{
        return <Navigate to="/shopping/home" />
       }
    }
    

    if(isAuthenticated && user?.role==='admin' && !(location.pathname.includes('admin'))){
        return <Navigate to="/admin/dashboard" />
    }

    if(isAuthenticated && user?.role==='user' && !(location.pathname.includes('shopping'))){
        return <Navigate to="/shopping/home" />
    }




    return<>
    {children}
    </>
}

export default CheckAuth;