import React, { useContext, useState } from 'react'
import {Form, Input, Button, Select, SelectItem} from "@heroui/react";
import { useForm } from 'react-hook-form';
import * as zod from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from '../services/Services';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
const schema=zod.object({
  email:zod.string().nonempty('Email Is Required').regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,'Email must be a valid one'),
  password:zod.string().nonempty('Password Is Required').regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,"Password should coinatins a capital and small letters, spceial character,numbers and no less than 8 characters"),
})
export default function Login() {
  const {isLoggedIn,setIsLoggedIn}=useContext(AuthContext);
  const [error,setError]=useState(false);
  const [success,setSuccess]=useState(false);
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate()
  const {handleSubmit,register,formState:{errors,touchedFields},reset } = useForm({
    defaultValues:{
      email:'',
      password:'',
    },
    resolver:zodResolver(schema),
    mode: 'onBlur'
  })
  async function sendData(userData){
  setLoading(true);
  try {
   const response= await signIn(userData);
   localStorage.setItem('token',response.token)
   setIsLoggedIn(response.token)
   setSuccess(response.message)
   setError(false);
   setLoading(false);
   navigate('/')
   reset();
   
  } catch (err) {
    setError(err.response.data.error);
    setSuccess(false);
    setLoading(false);
  }
  }
  return (
    <>
    <div>
       <h1 className='text-2xl text-gray-800 text-center font-medium mb-10'>Login</h1>
       <Form className='flex flex-col gap-4' onSubmit={handleSubmit(sendData)}> 
              <Input label="Email" type="email"  isInvalid={Boolean(errors.email&&touchedFields.email)} errorMessage={errors.email?.message} {...register('email')}   variant='bordered'/>
              <Input label="Password" type="password" isInvalid={Boolean(errors.password&&touchedFields.password)} errorMessage={errors.password?.message}  {...register('password')}  variant='bordered'/>
              <div className='flex w-full justify-between gap-x-3'>
              </div>
              <Button type='submit'isLoading={loading} disabled={loading} className='w-full'>Login</Button>
              {error&&<div className='text-red-600 text-center w-full text-xl'>{error}</div>}
              <div className='text-center'>You Don't Have Account? <Link to={'/register'} className='text-blue-500'>Sign Up</Link></div>
       </Form>
    </div>
    </>
  )
}
