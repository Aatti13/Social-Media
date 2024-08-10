// IMPORTS

// 1. Pre-existing Libraries
import React from 'react';
import * as z from 'zod';

// 2. ShadCN imports
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";

// 3. User-defined inputs
import { SignUpVaidationSchema } from '@/lib/validation';


// Init Sign-Up Form Functional Compoennt
const SignUpForm: React.FC = ()=>{

  const isLoading = true;
  // Use-Form Hook to implement Sign-up schema
  /* SCHEMA:
    1. Name
    2. Username
    3. Email-ID
    4. Password
  */
  const form = useForm<z.infer<typeof SignUpVaidationSchema>>({
    resolver: zodResolver(SignUpVaidationSchema),
    defaultValues: {
      name: '',
      username: '',
      email: '',
      password: '',
    },
  })

  // Submission function Handler
  function onSubmit(values: z.infer<typeof SignUpVaidationSchema>) {
    console.log(values)
  }


  return (
    <Form {...form}>
      {/* Head Banner + Logo */}
      <div className='sm:w-420 flex-center flex-col'>
        <img src="" alt="logo" />
        <h2 className='h3-bold md:h2-bold pt-5 sm:pt-12'>Join in on the Fun!</h2>
        {/* Sub Text */}
        <p className='text-light-3 small-medium md:base-regular'>Enter your details to create your account</p>
      </div><br/>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3 mt-4">

        {/* Name Input Element */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input 
                autoComplete='name' 
                className='shad-input w-[330px]' 
                type='text'
                placeholder="Enter Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Username Input Element */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input 
                autoComplete='username' className='shad-input' 
                type='text' 
                placeholder="Enter Username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email-ID Input Element */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input autoComplete='email' className='shad-input' type='text' placeholder="Enter Email ID" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password Input Element */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input autoComplete='current-password' className='shad-input' type='password' placeholder="Enter Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {/* Submit Button --> ShadCN Component */}
        <Button type="submit"
        className='bg-gray-100 text-black hover:bg-gray-500 mt-10'>
          {isLoading?(
            <div className="flex-center">
              Loading..
            </div>
          ):"Create Account"
        }</Button>
      </form>
    </Form>
  )
}

export default SignUpForm;