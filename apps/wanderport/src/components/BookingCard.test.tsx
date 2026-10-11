import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { BookingCard } from './BookingCard'

const TABS = [
  ['flights', 'flights', 'Book Your Flights'],
  ['hotels', 'hotels', 'Book Your Hotels'],
  ['flights-hotels', 'flights+hotels', 'Book Your Flights & Hotels'],
  ['holidays', 'Holidays', 'Book Your Holidays'],
] as const

describe('BookingCard', () => {
  it('overlaps the hero and opens on the flights panel', () => {
    render(<BookingCard />)

    expect(document.getElementById('booking')).not.toBeNull()
    const tablist = screen.getByRole('tablist', { name: 'Booking type' })
    expect(tablist).toBeInTheDocument()

    expect(screen.getByRole('tab', { name: 'flights' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tab', { name: 'hotels' })).toHaveAttribute('aria-selected', 'false')

    const panel = screen.getByRole('tabpanel')
    expect(panel).toHaveAttribute('id', 'booking-panel-flights')
    expect(panel).toHaveAttribute('aria-labelledby', 'booking-tab-flights')
    expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent('Book Your Flights')
  })

  it('renders the six sharp-edged fields of the enquiry form', () => {
    render(<BookingCard />)

    for (const label of ['From', 'To', 'Start', 'Return', 'Adults', 'Child']) {
      const field = screen.getByPlaceholderText(label)
      expect(field).toHaveAttribute('name', label.toLowerCase())
      expect(field.className).toContain('rounded-none')
      expect(field.className).toContain('mb-[30px]')
    }

    const form = screen.getByRole('form', { name: 'Book Your Flights' })
    expect(fireEvent.submit(form)).toBe(false)

    const submit = screen.getByRole('button', { name: /Send Message/ })
    expect(submit).toHaveAttribute('type', 'submit')
    expect(submit.className).toContain('brand-gradient')
  })

  it('swaps the panel for every tab', () => {
    render(<BookingCard />)

    for (const [id, label, title] of TABS) {
      const tab = screen.getByRole('tab', { name: label })
      fireEvent.click(tab)

      expect(tab).toHaveAttribute('aria-selected', 'true')
      const panel = screen.getByRole('tabpanel')
      expect(panel).toHaveAttribute('id', `booking-panel-${id}`)
      expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent(title)
      expect(screen.getByPlaceholderText('From')).toHaveAttribute('id', `${id}-from`)
    }
  })
})
