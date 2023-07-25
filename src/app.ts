import express, { Application } from 'express'
import * as dotenv from 'dotenv'
import logger from 'morgan'
import memoRouter from './routes/memo'
import sequelize from './db'
import Memo from '@models/memo'

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
    this.app.use('/memos', memoRouter)
  }
  private setMiddleware() {
    this.app.use(logger('dev'))
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
  }

  private async connectDatabase() {
    return await sequelize.sync({ force: true })
  }

  public listen() {
    this.setMiddleware()
    this.setRouter()
    this.connectDatabase().then(() => {
      console.log('Database connection Succeeded 📂')

      this.app.listen(this.port, () => {
        console.log(`Server listening on http://localhost:${this.port} 🚀`)
      })
    })
  }
}

function init() {
  const app = new App()
  app.listen()
}

init()
