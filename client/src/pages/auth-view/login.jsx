/* eslint-disable react/jsx-no-undef */
import { Link } from "react-router-dom";
import { useState } from "react";
import {loginFormdata} from "../../config";
import { useToast } from "@/hooks/use-toast"

import Form from "../../components/common/form";
import { useDispatch } from "react-redux";
import { loginUserstart } from "../../store/auth-slice/index.js";

const Login = () => {
    let initialFormData={
        email:'',
        password:'',
    }
    const dispatch=useDispatch();
    const {toast}=useToast();
   
    const handleSubmit=(event)=>{
      event.preventDefault();
      console.log(formData);
      dispatch(loginUserstart(formData)).then(res=>{
              if(res?.payload?.success){
                console.log(res?.payload?.message);
               
                  toast({
                      title:res?.payload?.message,
                      variant:"default"
                  })
                  

                  
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

    const [formData, setFormData] = useState(initialFormData);
    return(
        <div className="mx-auto w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Sign in to your account
          </h1>
          <p className="mt-2">
            Donot have an account
            <Link
              className="font-medium ml-2 text-primary hover:underline"
              to="/auth/register"
            >
              Register
            </Link>
          </p>
        </div>
        <Form
          formControl={loginFormdata}
          buttonText={"Sign In"}
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmit}
        />
      </div>
    )
}

export default Login;