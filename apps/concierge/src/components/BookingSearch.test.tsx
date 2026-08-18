import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BookingSearch } from './BookingSearch'

describe('BookingSearch', () => {
  it('renders the booking widget with date fields, persons select, and CTA', () => {
    render(<BookingSearch />)

    const arrival = screen.getByLabelText('Date Arrival')
    expect(arrival).toHaveAttribute('type', 'date')
    expect(arrival).toHaveAttribute('required')
    const departure = screen.getByLabelText('Date Departure')
    expect(departure).toHaveAttribute('type', 'date')
    expect(departure).toHaveAttribute('required')

    const select = screen.getByLabelText('# of Person')
    expect(select.tagName).toBe('SELECT')
    expect(screen.getAllByRole('option').map((o) => o.textContent)).toEqual([
      '# of Person',
      '1',
      '2',
      '3',
      '4',
      '5+',
    ])

    expect(screen.getByRole('button', { name: 'Find now' })).toHaveAttribute('type', 'submit')
  })

  it('overlaps the hero with a negative top margin and soft shadow', () => {
    const { container } = render(<BookingSearch />)
    const form = container.querySelector('[data-booking-form]')!
    expect(form.className).toContain('-mt-[50px]')
    expect(form.className).toContain('bg-white')
    expect(form.className).toContain('shadow-[0_15px_30px_rgba(0,0,0,0.1)]')
  })

  it('shows a confirmation after submitting the form', () => {
    render(<BookingSearch />)
    expect(screen.queryByRole('status')).toBeNull()

    const form = document.querySelector('[data-booking-form]')!
    fireEvent.submit(form)

    expect(screen.getByRole('status')).toHaveTextContent(
      'Thanks — the concierge desk will confirm availability shortly.',
    )
  })
})
