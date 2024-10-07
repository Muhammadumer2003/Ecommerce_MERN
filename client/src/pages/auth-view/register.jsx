/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */

import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import {registerFormdata} from "../../config";
import { useToast } from "@/hooks/use-toast"


import Form from "../../components/common/form";

import { useDispatch } from "react-redux";
import { registerUserstart } from "../../store/auth-slice";

const Register = () => {
    let initialFormData={
        name:'',
        email:'',
        password:'',
    
      
     
    }
    const [formData, setFormData] = useState(initialFormData);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const {toast}=useToast();
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(formData);
        dispatch(registerUserstart(formData)).then(res=>{
                if(res?.payload?.success){
                    toast({
                        title:res?.payload?.message,
                        variant:"default"
                    })
                    

                    navigate("/auth/login");
                }
                else{
                    console.log(res?.payload?.message);
                    toast({
                        title:res?.payload?.message,
                        variant:"destructive"
                    })
                }

        });
    }

    return (
        <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
                Already have an account? <Link to="/auth/login">Login</Link>
            </h1>

            <div className="mt-10">
            <Form formControl={registerFormdata} formData={formData} setFormData={setFormData} buttonLabel="Register" onSubmit={handleSubmit} />

            </div>
           

            
        </div>
    )
}

export default Register;