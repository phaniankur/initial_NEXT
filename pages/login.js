import React from "react";
import { useForm } from "react-hook-form";
const Login = () => {
    const {register, handleSubmit, formState: { errors }} = useForm()

    const onSubmit= (data) =>{
    console.log(data)
    }
    return ( 
        <div className='form-container'>
            <h2>Login</h2>
            <form  className="form" onSubmit={handleSubmit(onSubmit)}>
                
            <input type="email" placeholder="email" {...register("email")} />
            <input type="password" placeholder="password"  {...register("password", { required: true, maxLength: 20 })}/>
            {errors.password && <p>password invalid</p>}

            <input className="btn" type="submit" />
            </form>

        </div>

        
        );
    }
    
export default Login;