import { Request, Response } from 'express'

const memos = [
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
