import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BlogFeed } from './BlogFeed'
import { blogPosts } from '../data'

describe('BlogFeed', () => {
  it('renders one post card per blog post', () => {
    render(<BlogFeed />)
    expect(screen.getAllByRole('article')).toHaveLength(blogPosts.length)
    for (const post of blogPosts) {
      expect(screen.getByRole('heading', { level: 2, name: post.title })).toBeInTheDocument()
    }
  })

  it('alternates the card layout for every other post', () => {
    const { container } = render(<BlogFeed />)
    const articles = container.querySelectorAll('article')
    const imageWrapper = (index: number) => articles[index]!.querySelector('img')?.parentElement
    expect(imageWrapper(0)?.className).not.toContain('md:order-2')
    expect(imageWrapper(1)?.className).toContain('md:order-2')
    expect(imageWrapper(2)?.className).not.toContain('md:order-2')
    expect(imageWrapper(3)?.className).toContain('md:order-2')
  })
})
