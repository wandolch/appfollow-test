export default interface Comment {
  id: number
  author: string
  message: string
  comments: Comment[]
}
