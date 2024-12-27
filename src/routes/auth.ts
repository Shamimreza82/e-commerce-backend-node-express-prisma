import express from 'express'
import { AuthController} from '../controllers/auth.controller'
import validationSchema from '../middlewares/validationSchema'
import { AuthValidation } from '../schema/user.validation'


const router = express.Router()


router.post('/login', validationSchema(AuthValidation.loginValidationSchema), AuthController.login)
router.post('/signUp', validationSchema(AuthValidation.signUpValidationSchema), AuthController.singUp)

export const AuthRouter = router