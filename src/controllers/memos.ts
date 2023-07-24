import { Router, Request, Response } from 'express'

const router = Router()

// CRUD
// C : 메모 생성
// R : 전체 메모 읽기
// R-id : 특정 메모 읽기
// U : 메모 업데이트
// D : 메모 삭제

// router.get('/memos', (req: Request, res: Response) => {
//   try {
//   } catch (e) {
//     console.log(e)
//   }
// })

// router.post('/todoist', (req: Request, res: Response) => {
//   try {
//     const todo = req.body
//     // db에 해당 todo 내용을 가진 todo아이템을 생성한다.

//     const newTodo = {
//       ...todo,
//       id: Date.now(),
//     }
//     todos.push(newTodo) // 더미데이터용

//     res.status(201).json({
//       newTodo,
//     })
//   } catch (e) {
//     console.log(e)
//   }
// })

// // update
// router.patch('/todoist/:id', (req: Request, res: Response) => {
//   try {
//     const {
//       params: { id },
//       body,
//     } = req
//     // db에서 해당 todo을 업데이트 한다.

//     const updatedTodoList = todos.map((todo) =>
//       todo.id === Number(id) ? { ...todo, ...body } : todo
//     )

//     res.status(200).json({
//       updatedTodoList,
//     })
//   } catch (e) {
//     console.log(e)
//   }
// })

// // delete
// router.delete('/todoist/:id', (req: Request, res: Response) => {
//   try {
//     const {
//       params: { id },
//     } = req
//     // db에서 해당 todo을 삭제한다.

//     const deletedTodoList = todos.filter((todo) => todo.id !== Number(id))

//     res.status(200).json({
//       deletedTodoList,
//     })
//   } catch (e) {
//     console.log(e)
//   }
// })

export default router
