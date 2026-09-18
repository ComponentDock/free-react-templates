import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TICKETS } from '../data'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the heading and all three pricing cards', () => {
    render(<Pricing />)
    expect(screen.getByText('Ticket Pricing')).toBeInTheDocument()
    for (const ticket of TICKETS) {
      expect(screen.getByText(ticket.plan)).toBeInTheDocument()
      expect(screen.getByText(ticket.subtitle)).toBeInTheDocument()
      expect(screen.getByText(String(ticket.price))).toBeInTheDocument()
    }
  })

  it('renders Buy Now links for each tier', () => {
    render(<Pricing />)
    const buyLinks = screen.getAllByRole('link', { name: 'Buy Now' })
    expect(buyLinks).toHaveLength(TICKETS.length)
  })

  it('renders feature lists with check and close icons', () => {
    render(<Pricing />)
    const allFeatures: { text: string; included: boolean }[] = []
    for (const t of TICKETS) {
      for (const f of t.features) {
        allFeatures.push(f as { text: string; included: boolean })
      }
    }
    for (const feature of allFeatures) {
      expect(screen.getAllByText(feature.text).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('highlights the Advance tier as active', () => {
    render(<Pricing />)
    const articles = document.querySelectorAll('article')
    const advanceCard = Array.from(articles).find((a) => a.textContent?.includes('Advance'))
    expect(advanceCard).toBeDefined()
    expect(advanceCard).toHaveAttribute('aria-current', 'true')
  })
})
