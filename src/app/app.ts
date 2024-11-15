

import express,{Request, Response} from "express"
const app = express()
const port = 3000
app.use(express.json())
app.use(express.text())
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World Sujon mia sujon!')
})

app.post('/', (req: Request, res: Response) => {
    console.log(req.body)
    res.json({
        message:"This is successfuly insert data"
    })
})

export default app;