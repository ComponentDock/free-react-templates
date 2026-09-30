import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the white heading and blurb on the orange band', () => {
    render(<Pricing />)
    const heading = screen.getByRole('heading', {
      level: 2,
      name: 'Affordable pricing plan',
    })
    expect(heading).toHaveClass('text-white')
    const section = heading.closest('section')
    expect(section?.querySelector('span.bg-brand')).toBeInTheDocument()
  })

  it('renders three plan cards with the pill name, price and features', () => {
    render(<Pricing />)
    expect(screen.getAllByText('Basic Plan')).toHaveLength(3)
    expect(screen.getAllByRole('heading', { level: 3, name: '$700' })).toHaveLength(3)
    expect(screen.getAllByText('Increase traffic 50%')).toHaveLength(3)
    expect(screen.getAllByText('24/7 support')).toHaveLength(3)
  })

  it('gives every card a Get Started Now button pointing at contact', () => {
    render(<Pricing />)
    const links = screen.getAllByRole('link', { name: 'Get Started Now' })
    expect(links).toHaveLength(3)
    for (const link of links) {
      expect(link).toHaveAttribute('href', '#contact')
      expect(link.className).toContain('bg-brand')
    }
  })

  it('highlights only the middle card with the active shadow', () => {
    render(<Pricing />)
    const prices = screen.getAllByRole('heading', { level: 3, name: '$700' })
    const cards = prices.map((price) => (price.closest('article')?.className ?? '').split(/\s+/))
    const activeShadow = 'shadow-[0px_15px_25px_rgba(168,96,0,0.1)]'
    expect(cards[0]).not.toContain(activeShadow)
    expect(cards[1]).toContain(activeShadow)
    expect(cards[2]).not.toContain(activeShadow)
  })
})
