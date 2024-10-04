

export const registerFormdata=[
    {
        name:'name',
        label:'Name',
        type:'text',
        required:true,
        placeholder:'Enter your name',
        errorMessage:'Name is required',
        pattern:'^[A-Za-z0-9]{3,16}$',
       
    },
    {
        name:'email',
        label:'Email',
        type:'email',
        required:true,
        placeholder:'Enter your email',
        errorMessage:'Email is required',
        pattern:'^[A-Za-z0-9]{3,16}$',
    },
    {
        name:'password',
        label:'Password',
        type:'password',
        required:true,
        placeholder:'Enter your password',
        errorMessage:'Password is required',
        pattern:'^[A-Za-z0-9]{3,16}$',
    },
]


export const loginFormdata=[
   
    {
        name:'email',
        label:'Email',
        type:'email',
        required:true,
        placeholder:'Enter your email',
        errorMessage:'Email is required',
        pattern:'^[A-Za-z0-9]{3,16}$',
    },
    {
        name:'password',
        label:'Password',
        type:'password',
        required:true,
        placeholder:'Enter your password',
        errorMessage:'Password is required',
        pattern:'^[A-Za-z0-9]{3,16}$',
    },
]
