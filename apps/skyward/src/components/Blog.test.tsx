import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading and three blog cards with meta, title, excerpt, and read-more link', () => {
    render(<Blog />)

    expect(screen.getByRole('heading', { level: 2, name: 'Recent Blog' })).toBeInTheDocument()

    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(3)

    for (const card of cards) {
      expect(card.querySelector('img')).toHaveAttribute(
        'src',
        expect.stringContaining('picsum.photos/seed/skyward'),
      )
      expect(card.textContent).toMatch(/Aug \d{1,2}, 2019 · Admin/)
      expect(card.querySelector('h3')).toBeInTheDocument()
      expect(card.querySelector('p')).toBeInTheDocument()
      expect(card.querySelector('a')).toHaveTextContent('Read More')
    }

    expect(screen.getAllByRole('link', { name: 'Read More' })).toHaveLength(3)
  })
})
