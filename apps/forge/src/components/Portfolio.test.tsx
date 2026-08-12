import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the section title and a 2x2 grid of work cards', () => {
    render(<Portfolio />)

    expect(screen.getByRole('heading', { level: 2, name: 'Latest Work' })).toBeInTheDocument()
    const cards = screen.getAllByRole('link', { name: /Work Name Here/ })
    expect(cards).toHaveLength(4)
    for (const card of cards) {
      expect(card.querySelector('img')).toHaveAttribute(
        'src',
        expect.stringContaining('picsum.photos/seed/forge-'),
      )
      expect(card).toHaveTextContent('Category Here')
    }
  })

  it('shows a More Portfolio button with a white outline', () => {
    render(<Portfolio />)
    const button = screen.getByRole('link', { name: 'More Portfolio' })
    expect(button).toHaveAttribute('href', '#portfolio')
    expect(button.className).toMatch(/border-white/)
  })
})
