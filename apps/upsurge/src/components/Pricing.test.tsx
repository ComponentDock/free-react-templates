import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('shows three plan cards with price, features, and Get Plan buttons', () => {
    render(<Pricing />)

    for (const name of ['Basic Plan', 'STAR Plan', 'VIP Plan']) {
      const card = screen.getByRole('heading', { level: 3, name: name }).closest('article')!
      expect(card).toHaveTextContent('$9/Month')
      expect(card).toHaveTextContent('1GB storage')
      expect(card).toHaveTextContent('24/7 technical support')
      expect(card.querySelector('a')).toHaveAttribute('href', '#contact')
    }

    expect(screen.getAllByRole('link', { name: 'Get Plan' })).toHaveLength(3)
  })

  it('highlights the middle STAR Plan with the gold treatment', () => {
    const { container } = render(<Pricing />)

    const cards = container.querySelectorAll('article')
    expect(cards).toHaveLength(3)
    const star = cards[1]!
    expect(star.className).toContain('ring-primary-600')
    expect(star.querySelector('div')!.className).toContain('bg-primary-600')
  })
})
