import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'
import { BLOG } from '../data'

describe('Blog', () => {
  it('renders the heading, subtext and three cards with titles and Learn More links', () => {
    const { container } = render(<Blog />)
    expect(screen.getByRole('region', { name: 'Latest news' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: BLOG.heading })).toBeInTheDocument()
    expect(screen.getByText(BLOG.subtext)).toBeInTheDocument()

    const cards = container.querySelectorAll('article')
    expect(cards).toHaveLength(BLOG.posts.length)

    for (const post of BLOG.posts) {
      expect(screen.getByRole('heading', { level: 3, name: post.title })).toBeInTheDocument()
      expect(screen.getByText(post.text)).toBeInTheDocument()
    }
    // Three photos + three Learn More links.
    expect(container.querySelectorAll('img')).toHaveLength(BLOG.posts.length)
    expect(screen.getAllByRole('link', { name: 'Learn More' })).toHaveLength(BLOG.posts.length)
  })
})
