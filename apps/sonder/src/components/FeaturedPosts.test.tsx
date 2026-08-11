import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FeaturedPosts } from './FeaturedPosts'
import { featuredPosts } from '../data'

describe('FeaturedPosts', () => {
  it('renders the large featured post with pill, serif title, author and date', () => {
    render(<FeaturedPosts />)
    const big = featuredPosts[0]!
    const heading = screen.getByRole('heading', { level: 2, name: big.title })
    const card = heading.closest('article')!
    expect(within(card).getByText(big.category)).toBeInTheDocument()
    expect(within(card).getByText(big.author)).toBeInTheDocument()
    expect(within(card).getByText(big.date)).toBeInTheDocument()
  })

  it('renders the two smaller posts stacked on the right', () => {
    render(<FeaturedPosts />)
    for (const post of featuredPosts.slice(1)) {
      expect(
        screen.getByRole('heading', { level: 3, name: post.title }),
      ).toBeInTheDocument()
      expect(screen.getByText(post.category)).toBeInTheDocument()
      expect(screen.getByText(post.date)).toBeInTheDocument()
    }
  })

  it('uses seeded placeholder images for every featured card', () => {
    const { container } = render(<FeaturedPosts />)
    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(3)
    for (const post of featuredPosts) {
      expect(
        Array.from(images).some((image) =>
          image.getAttribute('src')?.includes(`/seed/${post.seed}/`),
        ),
      ).toBe(true)
    }
  })
})
