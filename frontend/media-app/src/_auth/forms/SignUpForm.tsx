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


  function onSubmit(values: z.infer<typeof SignUpVaidationSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <div className='sm:w-420 flex-center flex-col'>
        <img src="" alt="logo" />
        <h2 className='h3-bold md:h2-bold pt-5 sm:pt-12'>Join in on the Fun!</h2>

        <p className='text-light-3 small-medium md:base-regular'>Enter your details to create your account</p>
      </div><br/>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3 mt-4">

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input 
                autoComplete='name' 
                className='shad-input' 
                type='text'
                placeholder="Enter Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input autoComplete='current-password' className='shad-input' type='text' placeholder="Enter Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" variant="ghost">Submit</Button>
      </form>
    </Form>
  )
}

export default SignUpForm;