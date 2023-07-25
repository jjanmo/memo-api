import { Request, Response } from 'express'
import { v4 as uuidv4 } from 'uuid'
import dayjs from 'dayjs'

let memos = [
  {
    id: 'a34e8a22-4d07-407e-941e-f6d79cdbf6c8',
    created: '2023-07-20',
    updated: '2023-07-20',
    title: 'Hello World',
    content: 'Voluptatem deleniti molestiae et ab dolor ipsum.',
    author: 'jjanmo',
  },
  {
    id: 'eb1725a5-6f99-4c05-8d80-842d0182a694',
    created: '2023-07-21',
    updated: '2023-07-21',
    title: 'modi quo modi ✅',
    content: 'Voluptatem deleniti molestiae et ab dolor ipsum.',
    author: 'michael',
  },
  {
    id: 'f6986d79-2b79-4f83-b325-ae6c6220e36b',
    created: '2023-07-24',
    updated: '2023-07-24',
    title: 'Beatae distinctio sit soluta 🔥🔥',
    content: 'Voluptatem deleniti molestiae et ab dolor ipsum.',
    author: 'nico',
  },
]

export const getMemos = (req: Request, res: Response) => {
  res.json(memos)
}

export const getMemo = (req: Request, res: Response) => {
  const id = req.params.id

  const finded = memos.filter((memo) => memo.id === id)
  res.json(finded)
}

export const createMemo = (req: Request, res: Response) => {
  const { title, content, author } = req.body
  console.log(req.body)

  const newMemo = {
    id: uuidv4(),
    created: dayjs().format('YYYY-MM-DD'),
    updated: dayjs().format('YYYY-MM-DD'),
    title,
    content,
    author, // TODO : 현재 로그인한 유저 이름으로 수정 필요
  }

  // TODO : db memo에 넣기
  memos.push(newMemo)
  res.json(memos)
}

export const deleteMemo = (req: Request, res: Response) => {
  const id = req.params.id

  // TODO : db에 접근해서 삭제해야함
  const deleted = memos.filter((memo) => memo.id !== id)
  memos = deleted

  res.json(memos)
}

export const updateMemo = (req: Request, res: Response) => {
  const {
    body: { title, content },
    params: { id },
  } = req

  const updated = memos.map((memo) =>
    memo.id === id
      ? {
          ...memo,
          title,
          content,
          updated: dayjs().format('YYYY-MM-DD'),
        }
      : memo
  )
  memos = updated

  res.json(memos)
}
