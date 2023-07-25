export interface Memo {
  id: string
  created: string
  updated: string
  title: string
  content: string
  author: string
}

import { DataTypes } from 'sequelize'
import sequelize from '../db'

const Memo = sequelize.define('Memo', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

export default Memo
