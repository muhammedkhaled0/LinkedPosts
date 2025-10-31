import React, { useState } from 'react'
import {Form, Input, Button, Select, SelectItem} from "@heroui/react";
import { useForm } from 'react-hook-form';
import * as zod from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
import { signUp } from '../services/Services';
import { Link, useNavigate } from 'react-router-dom';
const schema=zod.object({
  name:zod.string().nonempty('Name Is Required').min(4,'Name must be at least 4 characters').max(20,'Name must not exceed 20'),
  email:zod.string().nonempty('Email Is Required').regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,'Email must be a valid one'),
  password:zod.string().nonempty('Password Is Required').regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,"Password should coinatins a capital and small letters, spceial character,numbers and no less than 8 characters"),
  rePassword:zod.string().nonempty('Password Is Required'),
  dateOfBirth:zod.coerce.date('Date is required').refine((dateOfBirth)=>new Date().getFullYear()-dateOfBirth.getFullYear()>=18,'Age less than 18'),
  gender:zod.string().nonempty('Gender Is Required'),
}).refine((data)=>data.password==data.rePassword,{path:['rePassword'],message:'RePassword must equal a Password'})
export default function Register() {
  const [error,setError]=useState(false);
  const [success,setSuccess]=useState(false);
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate()
  const {handleSubmit,register,formState:{errors,touchedFields},reset } = useForm({
    defaultValues:{
      name:'',
      email:'',
      password:'',
      repassword:'',
      dateOfBirth:'',
      geneder:'',
    },
    resolver:zodResolver(schema),
    mode: 'onBlur'
  })
  async function sendData(userData){
  setLoading(true);
  try {
   const response= await signUp(userData);
   console.log(response);
   setSuccess(response.message)
   setError(false);
   setLoading(false);
   navigate('/login')
   reset();
   
  } catch (err) {
    setError(err.response.data.error);
    setSuccess(false);
    console.log(error);
    setLoading(false);
  }
  }
  return (
    <>
    <div>
       <h1 className='text-2xl text-gray-800 text-center font-medium mb-10'>Register Now</h1>
       <Form className='flex flex-col gap-4' onSubmit={handleSubmit(sendData)}> 
              <Input label="Name" type="text" isInvalid={Boolean(errors.name&&touchedFields.name)} errorMessage={errors.name?.message} {...register('name')}  variant='bordered'/>
              <Input label="Email" type="email"  isInvalid={Boolean(errors.email&&touchedFields.email)} errorMessage={errors.email?.message} {...register('email')}   variant='bordered'/>
              <Input label="Password" type="password" isInvalid={Boolean(errors.password&&touchedFields.password)} errorMessage={errors.password?.message}  {...register('password')}  variant='bordered'/>
              <Input label="RePassword" type="password"  isInvalid={Boolean(errors.rePassword&&touchedFields.rePassword)} errorMessage={errors.rePassword?.message} {...register('rePassword')}  variant='bordered'/>
              <div className='flex w-full justify-between gap-x-3'>
              <Input label="Date" type="date"  isInvalid={Boolean(errors.dateOfBirth&&touchedFields.dateOfBirth)} errorMessage={errors.dateOfBirth?.message}{...register('dateOfBirth')} variant='bordered'/>
              <Select label="Select Your Gender"  isInvalid={Boolean(errors.gender&&touchedFields.gender)} errorMessage={errors.gender?.message} placeholder="Select Your Gender" {...register('gender')} variant='bordered'>
                  <SelectItem key="male">Male</SelectItem>
                  <SelectItem key="female">Female</SelectItem>
              </Select>
              </div>
              <Button type='submit'isLoading={loading} disabled={loading} className='w-full'>Register</Button>
              {error&&<div className='text-red-600 text-center w-full text-xl'>{error}</div>}
              <div className='text-center'>Already Have Email? <Link to={'/login'} className='text-blue-500'>Sign In</Link></div>
       </Form>
    </div>
    </>
  )
}
