import express from "express"
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World Sujon mia sujon!')
})


export default app;