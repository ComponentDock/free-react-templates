import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TICKETS } from '../data'
import { TicketPricing } from './TicketPricing'

describe('TicketPricing', () => {
  it('renders three ticket cards with gradient plan labels, prices and notes', () => {
    render(<TicketPricing />)
    expect(screen.getByText('Choose a Ticket')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: 'Ticket Pricing' })).toBeInTheDocument()
    for (const ticket of TICKETS) {
      const card = screen.getByText(ticket.plan).closest('article')!
      expect(within(card).getByRole('heading', { level: 2 })).toHaveTextContent(
        String(ticket.price),
      )
      expect(within(card).getByText(ticket.priceNote)).toBeInTheDocument()
      expect(within(card).getByRole('link', { name: /Get Tickets/i })).toBeInTheDocument()
      for (const feature of ticket.features) {
        expect(within(card).getByText(feature)).toBeInTheDocument()
      }
    }
  })

  it('highlights the Full Pass card as the active plan', () => {
    render(<TicketPricing />)
    const activeCard = screen.getByText('Full Pass').closest('article')!
    expect(activeCard).toHaveAttribute('aria-current', 'true')
    expect(activeCard.className).toContain('shadow-')
    const dayPassCard = screen.getByText('1 Day Pass').closest('article')!
    expect(dayPassCard).not.toHaveAttribute('aria-current')
  })
})
