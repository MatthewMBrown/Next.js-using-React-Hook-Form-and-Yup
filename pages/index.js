import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import stylesForm from './index.module.css'
// import {Alert} from "@fullfacing/fng-web-design-system"


const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(), 
    email: yup.string().email().required(),
    age: yup.number().positive().integer().required(),
    password: yup.string().min(4).max(15).required() ,
})


export default function Home() {
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema),
});

const submitForm = (data) => {
    console.log(data)
}

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={stylesForm.App}>
      <div className = {stylesForm.Form}>
            <div className = {stylesForm.title}>Sign Up</div>
                <div className = {stylesForm.inputs}>
                    <form onSubmit = {handleSubmit(submitForm)}>

                        <input type = "text" name = "firstName" placeholder = "First Name"           
                        {...register('firstName',{ required: true })}
                        />
                        <p>{errors.firstName?.message}</p>

                        {/* <Alert>Test</Alert> */}
                        
                        <input type = "text" name = "lastName" placeholder = "Last Name"                      
                        {...register('lastName',{ required: true })}
                        />
                       <p>{errors.lastName?.message}</p>
          
                        <input type = "text" name = "email" placeholder = "Email" 
                        {...register('email',{ required: true })}/>
                        <p>{errors.email?.message}</p>
                        
                        <input type = "text" name = "age" placeholder = "Age" 
                         {...register('age',{ required: true })}/>
                        <p>{errors.age?.message}</p>
                       
                        <input type = "text" name = "password" placeholder = "Password" 
                         {...register('password',{ required: true })}/>
                        <p>{errors.password?.message}</p>
                        
                        <input type = "text" name = "confirmPassword" placeholder = "Confirm Password" 
                         {...register('confirmPassword',{ required: true })}/>
                        <p>{errors.confirmPassoword && "Password should match"}</p>  

                        <input type = "submit" id = "submit"/>
                    </form>    
                </div>   
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
