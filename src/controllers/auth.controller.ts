import { Request, Response } from "express";
import bcrypt from 'bcrypt'
import catchAsync from "../utils/catchAsync";
import { prismaClient } from "../app";
import jwt from 'jsonwebtoken'
import { envFile } from "../config/secrets";



export const singUp = catchAsync(async (req: Request, res: Response) =>{
    
    const {email, password, name} = req.body
    let user = await prismaClient.user.findFirst({where: {email}})
    
    if(user) {
        throw new Error('User Already Exist')
    }
        user = await prismaClient.user.create({
            data: {
                name, 
                email, 
                password: bcrypt.hashSync(password, 10)
            }
        })

    res.json({
        success: true,
        message: 'user Register successfully', 
        data: user
    })
})


export const login = catchAsync(async (req: Request, res: Response) =>{
    
    const {email, password} = req.body
    let user = await prismaClient.user.findFirst({where: {email}})
    
    if(!user) {
        throw new Error('User doseNot Exist')
    }

    const comparePassword = bcrypt.compare(password, user.password)

    if(!comparePassword) {
        throw new Error('Password dose not match please provide valid password')
    }

    const jwtPayload = {
        userId: user?.id,
        email,
        password, 
    }

    const token = jwt.sign(jwtPayload, envFile.jwt_secret as string)
    


    res.json({
        success: true,
        message: 'user login successfully', 
        token: token
    })
})




export const AuthController = {
    login,
    singUp
}