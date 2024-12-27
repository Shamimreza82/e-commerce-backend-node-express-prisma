import express, {  Application, Request, Response } from 'express'

const app: Application = express()
app.use(express.json())




app.get('/', (req: Request, res: Response) =>{
    res.send({message: "working"})
})


app.listen(3000, () =>{
    console.log(`app is listen op port 3000`);
})

