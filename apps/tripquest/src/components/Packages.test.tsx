import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Packages } from './Packages'

describe('Packages', () => {
  it('renders three price cards with destination rows and light price pills', () => {
    const { container } = render(<Packages />)

    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe(
      'We Provide Affordable Prices',
    )
    expect(container.querySelector('img')).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/tripquest-price-bg/1920/1080',
    )

    const cards = container.querySelectorAll('article')
    expect(cards).toHaveLength(3)

    const titles = ['Cheap Packages', 'Luxury Packages', 'Camping Packages']
    cards.forEach((card, index) => {
      expect(card.querySelector('h4')?.textContent).toBe(titles[index])
      const rows = card.querySelectorAll('li')
      expect(rows).toHaveLength(6)
      expect(card.textContent).toContain('Thailand')
      expect(card.textContent).not.toContain('Thiland')
      const pill = rows[0]?.querySelector('a')
      expect(pill).toHaveTextContent('$1500')
      expect(pill?.className).toContain('bg-panel')
    })
  })
})
