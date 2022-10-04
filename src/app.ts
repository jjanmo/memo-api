import express, { Request, Response, NextFunction, Application } from 'express'
import * as dotenv from 'dotenv'
import todoRouter from './controllers/todo.controller'

dotenv.config()

class App {
  public app: Application
  private port: number

  constructor() {
    const app = express()
    this.app = app
    this.port = Number(process.env.PORT) || 9331
  }

  private setRouter() {
    this.app.use(todoRouter)
  }
  private setMiddleware() {}

  public listen() {
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
