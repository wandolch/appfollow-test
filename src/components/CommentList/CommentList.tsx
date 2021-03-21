import React, { useMemo } from 'react'
import './style.css'
import Comment from '../../interfaces/Comment'
import CommentBox from '../CommentBox/CommentBox'

interface CommentListProps {
  comments: Comment[]
  highlightedAuthor?: string
  level?: number
}

const MAX_NESTING_LEVEL = 5

function CommentList({ comments, highlightedAuthor = '', level = 0 }: CommentListProps) {
  const isInnerComment = useMemo(() => level > 0 && level < MAX_NESTING_LEVEL, [level])

  if (!comments.length) {
    return null
  }
  return (
    <div className={isInnerComment ? 'comment-list--inner' : ''}>
      {comments.map((childComment: Comment) => {
        return (
          <CommentBox
            key={childComment.id}
            comment={childComment}
            level={level}
            isInnerComment={isInnerComment}
            highlightedAuthor={highlightedAuthor}
          />
        )
      })}
    </div>
  )
}

export default CommentList
