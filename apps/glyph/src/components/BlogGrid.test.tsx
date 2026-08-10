import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { blogPosts } from '../data'
import { BlogGrid } from './BlogGrid'

describe('BlogGrid', () => {
  it('renders nine post cards in the grid', () => {
    const { container } = render(<BlogGrid />)

    expect(screen.getByRole('region', { name: 'Latest posts' })).toBeInTheDocument()
    expect(container.querySelectorAll('article')).toHaveLength(9)
  })

  it('shows category pill, date, comments, title, excerpt and Read More per card', () => {
    render(<BlogGrid />)

    const first = blogPosts[0]!
    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(9)

    const firstCard = within(cards[0]!)
    expect(firstCard.getByText(first.category)).toBeInTheDocument()
    expect(firstCard.getByText('March 14, 2018')).toBeInTheDocument()
    expect(firstCard.getByText('05')).toBeInTheDocument()
    expect(firstCard.getByRole('link', { name: first.title })).toBeInTheDocument()
    expect(firstCard.getByText(first.excerpt)).toBeInTheDocument()
    expect(firstCard.getByRole('link', { name: /Read More/ })).toBeInTheDocument()
  })

  it('pulls the text panel up over the image (overlap offset)', () => {
    const { container } = render(<BlogGrid />)

    const firstPanel = container.querySelector('article .relative')
    expect(firstPanel).toHaveClass('-mt-25')
    expect(firstPanel).toHaveClass('bg-white')
  })

  it('renders every post once with its own image', () => {
    const { container } = render(<BlogGrid />)

    expect(container.querySelectorAll('img')).toHaveLength(9)
    for (const post of blogPosts) {
      expect(screen.getAllByRole('link', { name: post.title })).toHaveLength(1)
    }
  })
})
