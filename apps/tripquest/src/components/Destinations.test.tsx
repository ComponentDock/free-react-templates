import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Destinations } from './Destinations'

describe('Destinations', () => {
  it('renders the centered heading and the three hover-priced photo cards', () => {
    const { container } = render(<Destinations />)

    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Popular Destinations')

    const cards = container.querySelectorAll('article')
    expect(cards).toHaveLength(3)

    const names = ['Mountain River', 'Dream City', 'Cloud Mountain']
    const places = ['Paraguay', 'Paris', 'Sri Lanka']
    const prices = ['Book at $150', 'Book at $250', 'Book at $350']

    cards.forEach((card, index) => {
      expect(card.querySelector('img')).toHaveAttribute(
        'src',
        `https://picsum.photos/seed/tripquest-dest-${index + 1}/600/420`,
      )
      expect(card.textContent).toContain(names[index])
      expect(card.textContent).toContain(places[index])
      expect(card.textContent).toContain(prices[index])
      expect(card.querySelector('span')?.className).toContain('bg-brand')
    })

    expect(container.querySelectorAll('.overlay-navy')).toHaveLength(3)
  })
})
