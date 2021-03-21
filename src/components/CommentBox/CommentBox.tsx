import React, { useMemo } from 'react'
import './style.css'
import Comment from '../../interfaces/Comment'
import CommentList from '../CommentList/CommentList'

interface CommentBoxProps {
  comment: Comment
  highlightedAuthor: string
  level: number
  isInnerComment: boolean
}

function CommentBox({ comment, highlightedAuthor, level, isInnerComment }: CommentBoxProps) {
  const isHighlighted = useMemo(() => highlightedAuthor === comment.author, [
    comment.author,
    highlightedAuthor,
  ])

  return (
    <div className={`comment-box ${isInnerComment ? 'comment-box__inner' : ''}`}>
      <div className="comment-box__author">{comment.author}</div>
      <div
        className={`comment-box__message ${
          isHighlighted ? 'comment-box__message--highlighted' : ''
        }`}
      >
        {comment.message}
      </div>
      <CommentList
        comments={comment.comments}
        level={++level}
        highlightedAuthor={highlightedAuthor}
      />
    </div>
  )
}

export default CommentBox
