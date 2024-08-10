// IMPORTS
import * as z from 'zod';

// Sign-Up Validation schema

/* SL.NO   HEADING            TYPE 
    1.       Name       Name of the User
    2.    User-Name     Public Username
    3.    Email-ID      Email for registering
    4.    Password      Password for access
*/

export const SignUpVaidationSchema = z.object({
  // 1. Name
  name: z.string().min(1,{
    message: "Cannot leave name field empty",
  }),
  
  // 2. Username
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  
  // 3. Email
  email: z.string().email(),
  
  // 4. Password
  password: z.string().min(8, {
    message: "Password must be minimum 8 characters long.",
  })
})

export const SignInAuthSchema = z.object({
  // 1. Email
  email: z.string().email(),
  
  // 2. Password
  password: z.string().min(8, {
    message: "Invalid Password",
  })
})