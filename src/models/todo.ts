import { model, Schema } from 'mongoose'

export type Status = 'active' | 'completed'
export type Priority = 'high' | 'middle' | 'low' | 'normal'

export interface Todo {
  contents: string
  status: Status
  priority: Priority
}

const todoSchema: Schema = new Schema(
  {
    contents: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    priority: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

export default model<Todo>('Todo', todoSchema)
