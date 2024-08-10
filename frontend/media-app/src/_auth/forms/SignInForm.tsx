// IMPORTS

// 1. Pre-existing Libraries
import React from 'react';
import * as z from 'zod';

// 2. ShadCN imports
import { Loader } from 'lucide-react';
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
import { SignInAuthSchema } from '@/lib/validation';
import { Link } from 'react-router-dom';


const SignInForm: React.FC = ()=>{

  const form = useForm<z.infer<typeof SignInAuthSchema>>({
    resolver: zodResolver(SignInAuthSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  function onSubmit(values: z.infer<typeof SignInAuthSchema>) {
    console.log(values)
  }

  const isLoading = false;

  return (
    <Form {...form}>
      {/* Head Banner + Logo */}
      <div className='sm:w-420 flex-center flex-col'>
        <img src="" alt="logo" />
        <h2 className='h3-bold md:h2-bold pt-5 sm:pt-12'>Welcome Back!</h2>
        {/* Sub Text */}
        <p className='text-light-3 small-medium md:base-regular'>Enter your details to Log-in to your account</p>
      </div><br/>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3 mt-4">

        {/* Email-ID Input Element */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input autoComplete='email' className='shad-input w-[330px]' type='text' placeholder="Enter Email ID" {...field} />
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
        
        <Button 
          className="flex items-center justify-center bg-gray-100 text-black hover:bg-gray-500 mt-4"
          disabled={isLoading}  // Optionally disable button while loading
        >
          {isLoading ? (
            <Loader className="animate-spin mr-2 " />  // Spinner
          ) : (
            ""
          )}
          {isLoading ? "Loading..." : "Sign In"}
        </Button>
        
        <p className='flex items-center justify-center text-small-regular mt-3 md:h-[14px]'>New to Lambda? 
          <Link to="/sign-up">
            <Button variant='link' className='text-gray-200 hover:text-gray-400'>Sign-Up</Button>
          </Link>
        </p>
      </form>
    </Form>
  )
}

export default SignInForm;