import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders three ordered cards: charcoal, amber, white', () => {
    render(<Services />)
    expect(screen.getByText('What We Do')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Services' })).toBeInTheDocument()
    const cards = screen.getAllByRole('listitem')
    expect(cards).toHaveLength(3)
    expect(cards[0]!.className).toContain('bg-ink')
    expect(cards[1]!.className).toContain('bg-brand')
    expect(cards[2]!.className).toContain('bg-white')
    expect(cards.map((card) => card.querySelector('h3')?.textContent)).toEqual([
      'Construction services',
      'Infrastructure services',
      'Architecture services',
    ])
  })

  it('gives every card a focusable learn-more chip', () => {
    render(<Services />)
    const chips = screen.getAllByRole('link', { name: 'Learn more' })
    expect(chips).toHaveLength(3)
    expect(chips[2]!.className).toContain('text-deep-amber')
  })
})
