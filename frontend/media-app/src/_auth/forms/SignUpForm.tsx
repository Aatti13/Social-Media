// IMPORTS

// 1. Pre-existing Libraries
import React, {useState} from 'react';
import * as z from 'zod';

// 2. ShadCN imports
import { EyeIcon, EyeOffIcon, Loader } from 'lucide-react';
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
import { Link } from 'react-router-dom';
import { createUser } from '@/lib/appwrite/api';


// Init Sign-Up Form Functional Compoennt
const SignUpForm: React.FC = ()=>{

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
  };
  const isLoading = false;
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
  async function onSubmit(values: z.infer<typeof SignUpVaidationSchema>) {
    const newUser = await createUser(values);
    console.log(`Account for ${newUser} has been created`);
    // console.log(newUser);
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
                className='shad-input w-[370px]' 
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
                <div className='relative'>
                  <Input type={showPassword ? 'text' : 'password'}
                  autoComplete='current-password' className='shad-input pr-40' placeholder="Enter Password" {...field} />
                  <div
                    onClick={togglePasswordVisibility}
                    className='absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer'>
                    {showPassword ? <EyeOffIcon />: <EyeIcon />}
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          className="flex items-center justify-center bg-gray-100 text-black hover:bg-gray-500 mt-10"
          disabled={isLoading}  // Optionally disable button while loading
        >
          {isLoading ? (
            <Loader className="animate-spin mr-2 " />  // Spinner
          ) : (
            ""
          )}
          {isLoading ? "Loading..." : "Create Account"}
        </Button>
        
        <p className='flex items-center justify-center text-small-regular mt-2 md:h-[14px]'>Already a User? 
          <Link to="/sign-in">
            <Button variant='link' className='text-gray-200 hover:text-gray-400'>Log In</Button>
          </Link>
        </p>
      </form>
    </Form>
  )
}

export default SignUpForm;