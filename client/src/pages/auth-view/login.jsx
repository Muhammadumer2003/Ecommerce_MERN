/* eslint-disable react/jsx-no-undef */
import { Link } from "react-router-dom";
import { useState } from "react";
import {loginFormdata} from "../../config";

import Form from "../../components/common/form";
const Login = () => {
    let initialFormData={
        email:'',
        password:'',
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData);
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