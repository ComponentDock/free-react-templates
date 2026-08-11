import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BlogGrid } from './BlogGrid'
import { blogPosts, readMoreLabel } from '../data'

describe('BlogGrid', () => {
  it('renders the eight post cards from the data', () => {
    render(<BlogGrid />)
    expect(screen.getAllByRole('article')).toHaveLength(blogPosts.length)
  })

  it('renders each card with image, serif title link, meta, excerpt, read-more and category', () => {
    render(<BlogGrid />)
    for (const post of blogPosts) {
      const article = screen
        .getAllByRole('article')
        .find(
          (node) => within(node as HTMLElement).queryByText(post.excerpt) !== null,
        ) as HTMLElement

      const image = within(article).getByRole('img', { name: post.title })
      expect(image).toHaveAttribute('src', `https://picsum.photos/seed/${post.seed}/800/600`)

      const titleLink = within(article).getByRole('heading', { level: 3 })
      expect(titleLink).toHaveClass('font-serif')
      expect(within(titleLink).getByRole('link', { name: post.title })).toBeInTheDocument()

      expect(within(article).getByText(post.date)).toBeInTheDocument()
      expect(within(article).getByText(post.comments)).toBeInTheDocument()
      expect(within(article).getByText(post.excerpt)).toBeInTheDocument()

      const readMore = within(article).getByRole('link', { name: readMoreLabel })
      expect(readMore).toHaveClass('text-ink')

      expect(within(article).getByText(post.category)).toBeInTheDocument()
    }
  })

  it('renders a read-more link for every card', () => {
    render(<BlogGrid />)
    expect(screen.getAllByRole('link', { name: readMoreLabel })).toHaveLength(blogPosts.length)
  })

  it('styles the cards with the light background and hover shadow', () => {
    render(<BlogGrid />)
    const card = screen.getAllByRole('article')[0]!
    expect(card).toHaveClass('bg-mist', 'hover:bg-white')
    expect(card.className).toContain('hover:shadow-[0_20px_30px_rgba(0,35,71,0.1)]')
  })
})
