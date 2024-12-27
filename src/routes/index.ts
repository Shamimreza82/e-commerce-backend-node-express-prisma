import express from 'express'
import { AuthRouter } from './auth'


const router = express.Router()


router.use('/auth', AuthRouter)

export const RootRouter = router