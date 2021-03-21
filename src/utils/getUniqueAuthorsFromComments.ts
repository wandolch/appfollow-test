import Comment from '../interfaces/Comment'

export const getUniqueAuthorsFromComments = (comments: Comment[]): string[] => {
  const authors: string[] = []
  comments.forEach((comment: Comment) => {
    authors.push(comment.author, ...getUniqueAuthorsFromComments(comment.comments))
  })
  return [...new Set(authors)]
}
