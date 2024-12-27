import { AnyZodObject } from "zod";
import catchAsync from "../utils/catchAsync";

const validationSchema = (schema: AnyZodObject) => {
   return catchAsync((req, res, next) => {
        req.body = schema.parse(req.body)
        next()
   })   
}


export default validationSchema