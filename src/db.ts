import { Database } from 'sqlite3'
import path from 'path'

const dbFilePath = path.resolve(__dirname, '../data/dev.db')
const db = new Database(':memory', (err) => {
  if (err) return console.error(err)

  console.log(`Successful connection to the database 🗂️`)
})
