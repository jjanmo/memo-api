import { Sequelize } from 'sequelize'
import { config } from 'dotenv'

config()

const storage = process.env.NODE_ENV === 'production' ? 'data/prod.db' : 'data/dev.db'

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage,
})

export default sequelize
