import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HeroGrid } from './HeroGrid'
import { heroCards } from '../data'

describe('HeroGrid', () => {
  it('renders four hero cards with uppercase headlines and meta rows', () => {
    render(<HeroGrid />)
    expect(screen.getByRole('region', { name: 'Top stories' })).toBeInTheDocument()
    const cards = screen.getAllByRole('link')
    expect(cards).toHaveLength(heroCards.length)
    for (const card of heroCards) {
      const link = screen.getByRole('link', { name: new RegExp(card.title) })
      expect(link.querySelector('h3')).toHaveClass('uppercase')
      expect(link.textContent).toContain(card.meta.date)
      expect(link.textContent).toContain(card.meta.views)
    }
  })

  it('stacks the two tall cards on the left column and the wide cards on the right', () => {
    const { container } = render(<HeroGrid />)
    const columns = container.querySelectorAll('.md\\:col-span-3, .md\\:col-span-2')
    expect(columns).toHaveLength(2)
  })

  it('applies a dark gradient overlay to each card', () => {
    const { container } = render(<HeroGrid />)
    expect(container.querySelectorAll('.bg-gradient-to-t')).toHaveLength(heroCards.length)
  })
})
