import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'
import { trendingPosts, featuredPosts, categoryBlocks, popularPosts } from './data'

describe('App', () => {
  it('composes every section in the expected order with landmarks', () => {
    render(<App />)

    expect(document.title).toBe('Newsprint — Magazine Template')
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: 'Trending' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Most Popular Posts' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Subscribe to newsletter' })).toBeInTheDocument()

    // Trending slider shows its first slide by default
    expect(screen.getByText(trendingPosts[0]!.excerpt)).toBeInTheDocument()
    for (const post of featuredPosts) {
      expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
    }
    // Popular slider shows its first page (2 of 4 rows)
    for (const post of popularPosts.slice(0, 2)) {
      expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
    }
    for (const block of categoryBlocks) {
      expect(screen.getByRole('heading', { name: block.heading })).toBeInTheDocument()
    }
  })

  it('places sections inside main and the footer in the contentinfo landmark', () => {
    const { container } = render(<App />)

    const main = screen.getByRole('main')
    expect(main.querySelector('section')).not.toBeNull()
    expect(container.querySelector('footer')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toContainElement(
      screen.getByRole('heading', { name: 'Newsprint Magazine' }),
    )
  })
})
