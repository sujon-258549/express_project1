

import express, { NextFunction, Request, Response } from "express"
const app = express()
app.use(express.json())
app.use(express.text())


// Create Router 
const userRouter = express.Router()
const userPostData = express.Router()

// most use router
app.use('/user/v1/create-user', userRouter)
app.use('/user/v1/create-post', userPostData)


// app.use('/user/v1/create-user', userRouter)
userRouter.get('', (req: Request, res: Response) => {
    const data = req.body;
    console.log(data);
    res.json({
        success: true,
        messsage: 'user create is success',
        data: data
    })
})

// app.use('/user/v1/create-post', userPostData)
userPostData.post('', (req:Request, res:Response)=>{
    const result = req.body;
    res.json({
        success:true,
        message:"Post Create is success",
        data:result
    })
})



//  madel wore use 
const varifay = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.url, req.method, req.body, req.params, req.query);
    next()
}




app.get('/', varifay, (req: Request, res: Response) => {
    console.log(req.params)
    console.log(req.query.email)
    res.send('Hello World Sujon mia sujon!')
})

app.post('/', (req: Request, res: Response) => {
    res.json({
        message: "This is successfuly insert data"
    })
})

export default app;