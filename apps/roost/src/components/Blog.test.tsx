import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Blog } from './Blog'
import { BLOG_POSTS } from '../data'

describe('Blog', () => {
  it('renders the heading and the three post cards', () => {
    render(<Blog />)

    expect(screen.getByRole('heading', { name: 'Blog Posts' })).toBeInTheDocument()

    for (const post of BLOG_POSTS) {
      expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
      expect(screen.getAllByText(post.meta).length).toBeGreaterThanOrEqual(1)
      expect(screen.getByText(post.excerpt)).toBeInTheDocument()
    }
  })

  it('turns the title link brand green on hover', () => {
    render(<Blog />)

    const title = screen.getByRole('heading', { name: BLOG_POSTS[0]!.title }).querySelector('a')!
    expect(title.className).toMatch(/hover:text-brand/)
  })
})
