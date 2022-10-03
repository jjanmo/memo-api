import express, { Request, Response, NextFunction } from 'express'
import * as dotenv from 'dotenv'
dotenv.config()

const app = express()
const port = process.env.PORT

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
})
