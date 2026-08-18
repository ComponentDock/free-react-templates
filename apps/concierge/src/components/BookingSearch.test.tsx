import { fireEvent, render, screen } from '@testing-library/react'
import { BookingSearch } from './BookingSearch'
import { BOOKING } from '../data'
import { describe, expect, it, vi } from 'vitest'

describe('BookingSearch', () => {
  it('renders the two date fields, persons select, and search button', () => {
    render(<BookingSearch />)
    expect(screen.getByLabelText(BOOKING.arrivalLabel)).toHaveAttribute('type', 'date')
    expect(screen.getByLabelText(BOOKING.departureLabel)).toHaveAttribute('type', 'date')
    const select = screen.getByLabelText(BOOKING.personsLabel)
    expect(select.tagName).toBe('SELECT')
    for (const option of BOOKING.persons) {
      expect(select).toHaveTextContent(option)
    }
    expect(screen.getByRole('button', { name: BOOKING.submitLabel })).toBeInTheDocument()
  })

  it('overlaps the hero with a white card (negative top margin)', () => {
    render(<BookingSearch />)
    const form = document.querySelector('form')
    expect(form?.className).toContain('-mt-12')
    expect(form?.className).toContain('bg-white')
  })

  it('does not navigate/reload on submit', () => {
    render(<BookingSearch />)
    const form = document.querySelector('form')!
    const submit = vi.fn((e: Event) => e.preventDefault())
    form.addEventListener('submit', submit)
    fireEvent.click(screen.getByRole('button', { name: BOOKING.submitLabel }))
    expect(submit).toHaveBeenCalled()
  })
})
