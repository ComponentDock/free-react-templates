import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Sponsors } from './Sponsors'

describe('Sponsors', () => {
  it('renders the heading and four sponsor cards with Learn More links', () => {
    render(<Sponsors />)

    expect(screen.getByText('Sponsors')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Proudly Supported By' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/these amazing companies make the show possible/i)).toBeInTheDocument()

    const cards = screen.getAllByTestId('sponsor-card')
    expect(cards).toHaveLength(4)
    expect(cards[0]!.textContent).toContain('LinearB')
    expect(cards[1]!.textContent).toContain('Notion')
    expect(cards[2]!.textContent).toContain('Vercel')
    expect(cards[3]!.textContent).toContain('Lemon.io')
    for (const card of cards) {
      expect(within(card).getByRole('link', { name: 'Learn More' })).toBeInTheDocument()
    }
  })

  it('renders the sponsorship CTA', () => {
    render(<Sponsors />)

    expect(screen.getByText('Want to sponsor the show?')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get in touch' })).toBeInTheDocument()
  })
})
