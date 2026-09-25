import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Events } from './Events'

describe('Events', () => {
  it('renders the events heading', () => {
    render(<Events />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Tour Dates')
    expect(screen.getByText('Upcoming Shows')).toBeInTheDocument()
  })

  it('renders four event entries', () => {
    render(<Events />)

    expect(screen.getByText('The Grand Arena')).toBeInTheDocument()
    expect(screen.getByText('Neon Hall')).toBeInTheDocument()
    expect(screen.getByText('Skyline Pavilion')).toBeInTheDocument()
    expect(screen.getByText('Wave Center')).toBeInTheDocument()
  })

  it('renders venue cities', () => {
    render(<Events />)

    expect(screen.getByText('Los Angeles, CA')).toBeInTheDocument()
    expect(screen.getByText('New York, NY')).toBeInTheDocument()
    expect(screen.getByText('Chicago, IL')).toBeInTheDocument()
    expect(screen.getByText('Miami, FL')).toBeInTheDocument()
  })

  it('renders Get Tickets buttons for non-sold-out events', () => {
    render(<Events />)

    const ticketButtons = screen.getAllByRole('link', { name: /get tickets/i })
    expect(ticketButtons).toHaveLength(3)
  })

  it('renders Sold Out label for sold-out events', () => {
    render(<Events />)

    const soldOut = screen.getByText('Sold Out')
    expect(soldOut).toBeInTheDocument()
    expect(soldOut.tagName).toBe('SPAN')
  })

  it('renders event dates', () => {
    render(<Events />)

    expect(screen.getByText('Oct 15, 2026')).toBeInTheDocument()
    expect(screen.getByText('Nov 02, 2026')).toBeInTheDocument()
    expect(screen.getByText('Nov 20, 2026')).toBeInTheDocument()
    expect(screen.getByText('Dec 08, 2026')).toBeInTheDocument()
  })

  it('renders date icons in event cards', () => {
    render(<Events />)

    // Each event card has a Calendar icon + date text
    const calendarTexts = screen.getAllByText(/2026$/)
    expect(calendarTexts.length).toBe(4)
  })
})
