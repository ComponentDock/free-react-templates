import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BlogSection } from './BlogSection'
import { BLOG_POSTS } from '../data'

describe('BlogSection', () => {
  it('renders the heading and three blog cards with date blocks and meta', () => {
    const { container } = render(<BlogSection />)

    expect(screen.getByRole('heading', { name: 'Our Blog' })).toBeInTheDocument()
    for (const post of BLOG_POSTS) {
      expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
      expect(screen.getByText(post.day)).toBeInTheDocument()
      expect(screen.getByText(`${post.month} ${post.year}`)).toBeInTheDocument()
      expect(screen.getByText(post.text)).toBeInTheDocument()
    }
    const readMores = screen.getAllByRole('link', { name: 'Read More' })
    expect(readMores).toHaveLength(BLOG_POSTS.length)
    expect(container.querySelectorAll('img')).toHaveLength(BLOG_POSTS.length)
  })
})
