import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { journeyLabel, journeyTitle, trips } from '../data'
import { Journey } from './Journey'

describe('Journey', () => {
  it('renders six pricing cards with sand price pills and titles', () => {
    const { container } = render(<Journey />)

    expect(screen.getAllByText(journeyLabel).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('heading', { level: 3, name: journeyTitle })).toBeInTheDocument()

    const cards = container.querySelectorAll('article')
    expect(cards).toHaveLength(trips.length)
    expect(container.querySelectorAll('img')).toHaveLength(trips.length)
    for (const trip of trips) {
      expect(screen.getByText(trip.price)).toBeInTheDocument()
      expect(screen.getByRole('heading', { level: 3, name: trip.title })).toBeInTheDocument()
    }
  })

  it('applies the hover zoom-out transition to card images', () => {
    const { container } = render(<Journey />)
    const image = container.querySelector('img')
    expect(image).toHaveClass('scale-[1.05]', 'group-hover:scale-100')
  })
})
