import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PostMeta } from './PostMeta'
import { authorAvatar, authorName, commentCount, postDate } from '../data'

describe('PostMeta', () => {
  it('renders the avatar, author, date and comment count', () => {
    const { container } = render(<PostMeta />)
    expect(container.querySelector('img')).toHaveAttribute('src', authorAvatar)
    expect(screen.getByText(authorName)).toBeInTheDocument()
    expect(screen.getByText(postDate)).toBeInTheDocument()
    expect(screen.getByText(String(commentCount))).toBeInTheDocument()
  })

  it('accepts a className override', () => {
    render(<PostMeta className="text-white" />)
    expect(screen.getByText(authorName).closest('div')).toHaveClass('text-white')
  })
})
