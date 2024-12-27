import { NextFunction, Request, Response } from "express"

export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {

    res.json({
        success: false, 
        message: err.message || "some this wants wong's",
        error: err
    })
}