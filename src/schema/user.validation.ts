import { z } from "zod";


const signUpValidationSchema = z.object({
    name: z.string({ required_error: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
  });

const loginValidationSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
  });


  export const AuthValidation = {
    signUpValidationSchema, 
    loginValidationSchema
  }