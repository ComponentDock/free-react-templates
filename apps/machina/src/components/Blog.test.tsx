import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'
import { BLOG_INTRO, BLOG_POSTS, BLOG_TITLE } from '../data'

describe('Blog', () => {
  it('renders the heading, intro, and two blog cards', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(BLOG_TITLE)
    expect(screen.getByText(BLOG_INTRO)).toBeInTheDocument()
    // Both demo posts share the "22 Apr 2020" date
    expect(screen.getAllByText(BLOG_POSTS[0]!.date)).toHaveLength(BLOG_POSTS.length)
    BLOG_POSTS.forEach((post) => {
      expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
      expect(screen.getByText(post.excerpt)).toBeInTheDocument()
    })
    expect(screen.getAllByRole('link', { name: /read more/i })).toHaveLength(BLOG_POSTS.length)
  })
})
