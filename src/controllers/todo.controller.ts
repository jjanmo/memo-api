import { Router, Request, Response } from 'express'
import { todos } from '@models/dummy'

const router = Router()

/*
CRUD
*/

// read
router.get('/todoist', (req: Request, res: Response) => {
  res.send({
    data: {
      todos,
    },
  })
})

// create
router.post('/todoist/', (req: Request, res: Response) => {})

// update
router.put('/todoist/:id', (req: Request, res: Response) => {})

// update
router.patch('/todoist/:id', (req: Request, res: Response) => {})

// delete
router.delete('/todoist/:id', (req: Request, res: Response) => {})

export default router
