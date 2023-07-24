import express, { Request, Response, NextFunction, Application } from 'express'
import * as dotenv from 'dotenv'
import memoRouter from '@controllers/memos'

dotenv.config()

class App {
  public app: Application
  private port: number

  constructor() {
    const app = express()
    this.app = app
    this.port = Number(process.env.PORT) || 1234
  }

  private setRouter() {
    this.app.use(memoRouter)
  }
  private setMiddleware() {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
  }

  public listen() {
    this.setMiddleware()
    this.setRouter()

    this.app.listen(this.port, () => {
      console.log(`Server listening on http://localhost:${this.port}`)
    })
  }
}

function init() {
  const app = new App()
  app.listen()
}

init()
