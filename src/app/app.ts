

import express, { NextFunction, Request, Response } from "express"
const app = express()
app.use(express.json())
app.use(express.text())


//  madel wore use 
const varifay = (req:Request, res:Response, next:NextFunction)=>{
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