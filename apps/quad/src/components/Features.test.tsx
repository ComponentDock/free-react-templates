import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('shows the Awesome Feature section title with a blurb', () => {
    render(<Features />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/Awesome Feature/)
    expect(heading).toHaveClass('text-primary')
    expect(screen.getByText(/Replenish man have thing gathering lights/)).toBeInTheDocument()
  })

  it('renders the three feature cards with icon, title and description on the card background', () => {
    const { container } = render(<Features />)

    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(3)
    expect(
      cards.map((card) => within(card).getByRole('heading', { level: 3 }).textContent),
    ).toEqual(['Scholarship Facility', 'Sell Online Course', 'Global Certification'])

    expect(container.querySelector('svg.lucide-graduation-cap')).toBeInTheDocument()
    expect(container.querySelector('svg.lucide-book-open')).toBeInTheDocument()
    expect(container.querySelector('svg.lucide-award')).toBeInTheDocument()

    const first = cards[0]!
    expect(first.className).toMatch(/bg-card/)
    expect(first.className).toMatch(/hover:shadow-\[0_10px_30px_rgba\(0,35,71,0\.1\)\]/)
    expect(within(first).getByText(/One make creepeth/)).toBeInTheDocument()
  })
})
