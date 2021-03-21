import React, { useCallback, useMemo, useState } from 'react'
import './style.css'
import CommentList from '../CommentList/CommentList'
import { COMMENTS_DATA } from '../../constants/commentsData'
import { getUniqueAuthorsFromComments } from '../../utils/getUniqueAuthorsFromComments'
import AuthorList from '../AuthorList/AuthorList'
import Comment from '../../interfaces/Comment'

function App() {
  const [comments] = useState<Comment[]>(COMMENTS_DATA)
  const [highlightedAuthor, setHighlightedAuthor] = useState<string>('')
  const uniqueAuthors = useMemo(() => getUniqueAuthorsFromComments(comments), [comments])
  const handleHighlightAuthor = useCallback((author: string) => {
    setHighlightedAuthor(author)
  }, [])
  return (
    <div className="app">
      <h3 className="app-title">Comments:</h3>
      <CommentList comments={comments} highlightedAuthor={highlightedAuthor} />
      <h3 className="app-title">Users who commented:</h3>
      <AuthorList authors={uniqueAuthors} onHighlightAuthor={handleHighlightAuthor} />
    </div>
  )
}

export default App
