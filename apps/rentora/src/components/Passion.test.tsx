import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Passion } from './Passion'
import { PASSION } from '../data'

describe('Passion', () => {
  it('shows the white section title with a gold underline', () => {
    render(<Passion />)

    const heading = screen.getByRole('heading', { level: 2, name: PASSION.heading })
    expect(heading).toBeInTheDocument()
    expect(heading.querySelector('span')).toHaveClass('bg-brand')
  })

  it('shows four icon cards with title, blurb, and Read More', () => {
    render(<Passion />)

    for (const card of PASSION.cards) {
      expect(screen.getByRole('heading', { level: 3, name: card.title })).toBeInTheDocument()
      expect(screen.getByText(card.blurb)).toBeInTheDocument()
    }

    const readMores = screen.getAllByRole('link', { name: PASSION.ctaLabel })
    expect(readMores).toHaveLength(PASSION.cards.length)
  })

  it('flips cards to white with navy text on hover', () => {
    const { container } = render(<Passion />)
    const firstCard = container.querySelector('article')!
    expect(firstCard.className).toMatch(/hover:bg-white/)
    expect(firstCard.querySelector('h3')!.className).toMatch(/group-hover:text-ink/)
    expect(firstCard.querySelector('p')!.className).toMatch(/group-hover:text-muted/)
  })
})
