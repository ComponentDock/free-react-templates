import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BLOG_POSTS } from '../data'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading and all blog posts', () => {
    render(<Blog />)
    expect(screen.getByText('Latest News')).toBeInTheDocument()
    for (const post of BLOG_POSTS) {
      expect(screen.getByText(post.title)).toBeInTheDocument()
      expect(screen.getByText(post.date)).toBeInTheDocument()
      expect(screen.getByText(`${post.comments} Comments`)).toBeInTheDocument()
    }
  })

  it('each blog title links to the blog section', () => {
    render(<Blog />)
    const blogLinks = screen.getAllByRole('link', {
      name: /Top UX Trends|How to Build|The Future of AI/,
    })
    expect(blogLinks).toHaveLength(BLOG_POSTS.length)
  })
})
