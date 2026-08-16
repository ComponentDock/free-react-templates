import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'
import { services } from '../data'

describe('Services', () => {
  it('shows the centered heading and four hover-fill cards', () => {
    render(<Services />)

    expect(screen.getByText(services.kicker)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: services.heading })).toBeInTheDocument()

    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(4)
    expect(screen.getAllByRole('heading', { level: 3, name: services.cardTitle })).toHaveLength(4)
    expect(screen.getAllByText(services.cardCopy)).toHaveLength(4)
    // Every card carries the navy hover-fill overlay + a pink icon circle.
    for (const card of cards) {
      expect(card.querySelector('[class*="bg-navy"]')).toBeInTheDocument()
      expect(card.querySelector('svg')).toBeInTheDocument()
    }
  })
})
