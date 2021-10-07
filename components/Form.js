import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(), 
    email: yup.string().email().required(),
    age: yup.number().positive().integer().required(),
    password: yup.string().min(4).max(15).required() ,
    confirmPassoword: yup.string().oneOf([yup.ref("password"), null])
})

export default function Form(){
    const {register, handleSubmit, errors} = useForm({
        resolver: yupResolver(schema),
    });

    const submitForm = (data) => {
        console.log(data)
    }
    
    return(
        <div className = "Form">
            <div className = "title">Sign Up</div>
                <div className = "inputs">
                    <form onSubmit = {handleSubmit(submitForm)}>
                        <input type = "text" name = "firstName" placeholder = "First Name" ref ={register} />
                        {/* <p>{errors.firstName?.message}</p> */}
                        <input type = "text" name = "lastName" placeholder = "Last Name" ref ={register} />
                        {/* <p>{errors.lastName?.message}</p> */}
                        <input type = "text" name = "email" placeholder = "Email" ref ={register} />
                        {/* <p>{errors.email?.message}</p> */}
                        <input type = "text" name = "age" placeholder = "Age" ref ={register} />
                        {/* <p>{errors.age?.message}</p> */}
                        <input type = "text" name = "password" placeholder = "Password" ref ={register} />
                        {/* <p>{errors.password?.message}</p> */}
                        <input type = "text" name = "confirmPassword" placeholder = "Confirm Password" ref ={register}/>
                        {/* <p>{errors.confirmPassoword && "Password should match"}</p> */}


                        <input type = "submit" id = "submit"/>

                    </form>    
                </div>   
        </div>
    )    
}
