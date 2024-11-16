

import express, { Request, Response } from "express"
const app = express()
app.use(express.json())
app.use(express.text())
app.get('/', (req: Request, res: Response) => {
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