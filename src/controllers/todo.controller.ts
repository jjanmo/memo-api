import { Todo } from '@models/todo'
import { Router, Request, Response } from 'express'
import { todos } from '../models/dummy'

const router = Router()

router.get('/todoist', (req: Request, res: Response) => {
  try {
    const todoList: Todo[] = todos
    // db에 요청해서 todolist를 가져온다

    res.status(200).json({ todoList })
  } catch (e) {
    console.log(e)
  }
})

router.post('/todoist', (req: Request, res: Response) => {
  try {
    const todo = req.body
    // db에 해당 todo 내용을 가진 todo아이템을 생성한다.

    const newTodo = {
      ...todo,
      id: Date.now(),
    }
    todos.push(newTodo) // 더미데이터용

    res.status(201).json({
      newTodo,
    })
  } catch (e) {
    console.log(e)
  }
})

// update
router.patch('/todoist/:id', (req: Request, res: Response) => {
  try {
    const {
      params: { id },
      body,
    } = req
    // db에서 해당 todo을 업데이트 한다.

    const updatedTodoList = todos.map((todo) =>
      todo.id === Number(id) ? { ...todo, ...body } : todo
    )

    res.status(200).json({
      updatedTodoList,
    })
  } catch (e) {
    console.log(e)
  }
})

// delete
router.delete('/todoist/:id', (req: Request, res: Response) => {
  try {
    const {
      params: { id },
    } = req
    // db에서 해당 todo을 삭제한다.

    const deletedTodoList = todos.filter((todo) => todo.id !== Number(id))

    res.status(200).json({
      deletedTodoList,
    })
  } catch (e) {
    console.log(e)
  }
})

export default router
