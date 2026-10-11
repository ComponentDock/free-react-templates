import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the four-up service grid with zooming photo thumbs', () => {
    const { container } = render(<Services />)

    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe(
      'Other issues we can help you with',
    )

    const cards = container.querySelectorAll('article')
    expect(cards).toHaveLength(4)

    const titles = ['Rent a Car', 'Cruise Booking', 'To Do List', 'Food Features']
    cards.forEach((card, index) => {
      expect(card.querySelector('h4')?.textContent).toBe(titles[index])
      const image = card.querySelector('img')
      expect(image).toHaveAttribute('alt', titles[index])
      expect(image?.className).toContain('group-hover:scale-105')
    })
  })
})
