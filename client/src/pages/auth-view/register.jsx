/* eslint-disable react/jsx-no-undef */

import { Link } from "react-router-dom";
import { useState } from "react";
import registerFormdata from "../../config";
import Form from "../../components/common/form";
const Register = () => {
    let initialFormData={
        name:'',
        email:'',
        password:'',
    
      
     
    }
    const [formData, setFormData] = useState(initialFormData);
    const handleSubmit=()=>{
        console.log(formData);
    }
    return(
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