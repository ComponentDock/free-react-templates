import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Booking } from '../components/Booking'
import { book, fullyBooked, slots } from '../content'

describe('Booking', () => {
  it('opens on the first service, day 14, no slot and a disabled confirm', () => {
    render(<Booking />)

    expect(screen.getByRole('radio', { name: /Cut and finish/ })).toBeChecked()
    expect(screen.getByRole('button', { name: '14' })).toHaveAttribute('aria-pressed', 'true')
    const summary = screen.getByTestId('booking-widget')
    expect(within(summary).getAllByText('Cut and finish')).toHaveLength(2)
    expect(within(summary).getByText('14 October 2026 — pick a time')).toBeInTheDocument()
    expect(within(summary).getByText('—')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: book.confirm })).toBeDisabled()
    expect(screen.getByRole('status')).toHaveTextContent(book.status.idle)
  })

  it('keeps the ten fully booked days out of the tab order', () => {
    render(<Booking />)
    for (const day of fullyBooked) {
      expect(screen.queryByRole('button', { name: String(day) })).not.toBeInTheDocument()
    }
    expect(screen.getAllByTitle('Fully booked')).toHaveLength(fullyBooked.length)
    expect(screen.getByRole('button', { name: '1' })).toBeInTheDocument()
  })

  it('fills the summary in and enables the confirm on the third choice', async () => {
    const user = userEvent.setup()
    render(<Booking />)

    await user.click(screen.getByRole('radio', { name: /Full colour/ }))
    await user.click(screen.getByRole('button', { name: '1' }))
    expect(screen.getByText('1 October 2026 — pick a time')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: book.confirm })).toBeDisabled()

    await user.click(screen.getByRole('button', { name: '09:00' }))
    expect(screen.getByText('1 October 2026, 09:00')).toBeInTheDocument()
    expect(screen.getAllByText('£128')).toHaveLength(2)
    expect(screen.getByRole('button', { name: book.confirm })).toBeEnabled()
    expect(screen.getByRole('status')).toHaveTextContent(book.status.held)
    expect(screen.getByRole('button', { name: '09:00' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: '10:30' })).toHaveAttribute('aria-pressed', 'false')
  })

  it('records the demo booking and forgets it when a choice changes', async () => {
    const user = userEvent.setup()
    render(<Booking />)

    await user.click(screen.getByRole('button', { name: '09:00' }))
    await user.click(screen.getByRole('button', { name: book.confirm }))
    expect(screen.getByRole('status')).toHaveTextContent(book.status.done)

    await user.click(screen.getByRole('button', { name: '10:30' }))
    expect(screen.getByRole('status')).toHaveTextContent(book.status.held)

    await user.click(screen.getByRole('button', { name: book.confirm }))
    await user.click(screen.getByRole('radio', { name: /Consultation/ }))
    expect(screen.getByRole('status')).toHaveTextContent(book.status.held)
    expect(screen.getAllByText('Free')).toHaveLength(2)

    await user.click(screen.getByRole('button', { name: book.confirm }))
    await user.click(screen.getByRole('button', { name: '3' }))
    expect(screen.getByRole('status')).toHaveTextContent(book.status.held)
  })

  it('marks the three booked slots disabled and the two scarce ones tinted', () => {
    render(<Booking />)
    const booked = slots.filter((slot) => slot.state === 'booked')
    for (const slot of booked) {
      expect(screen.getByRole('button', { name: slot.time })).toBeDisabled()
    }
    const scarce = slots.filter((slot) => slot.state === 'scarce')
    for (const slot of scarce) {
      const button = screen.getByRole('button', { name: slot.time })
      expect(button).toHaveAttribute('title', slot.title)
      expect(button.className).toContain('bg-accent-50')
    }
  })

  it('exposes the calendar as a labelled table with column headers', () => {
    render(<Booking />)
    const table = screen.getByRole('table', { name: book.calendarCaption })
    expect(within(table).getAllByRole('columnheader')).toHaveLength(7)
    expect(within(table).getByRole('columnheader', { name: 'Thursday' })).toBeInTheDocument()
  })
})
