import React from 'react'
import './style.css'

interface AuthorListProps {
  authors: string[]
  onHighlightAuthor: (author: string) => void
}

function AuthorList({ authors, onHighlightAuthor }: AuthorListProps) {
  return (
    <ul className="author-list">
      {authors.map((author: string) => (
        <li key={author}>
          <div className="author-name" role="button" onClick={() => onHighlightAuthor(author)}>
            {author}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default AuthorList
