import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BOOKING } from '../content'
import { BookingForm, validateBooking } from './BookingForm'

describe('validateBooking', () => {
  it('accepts a full set of answers', () => {
    expect(validateBooking('Ada Lovelace', '555 140 1400', BOOKING.problemOptions[0])).toEqual({})
  })

  it('rejects every empty field', () => {
    const errors = validateBooking('', '', '')
    expect(errors.name).toBe(BOOKING.nameError)
    expect(errors.phone).toBe(BOOKING.phoneError)
    expect(errors.problem).toBe(BOOKING.problemError)
  })

  it('rejects a one-letter name and a short phone number', () => {
    const errors = validateBooking('A', '12-34', BOOKING.problemOptions[1])
    expect(errors.name).toBe(BOOKING.nameError)
    expect(errors.phone).toBe(BOOKING.phoneError)
    expect(errors.problem).toBeUndefined()
  })
})

describe('BookingForm', () => {
  it('renders the three fields with the six problem options', () => {
    render(<BookingForm />)
    expect(screen.getByRole('heading', { level: 2, name: BOOKING.heading })).toBeInTheDocument()
    expect(screen.getByText(BOOKING.blurb)).toBeInTheDocument()
    expect(screen.getByLabelText(BOOKING.nameLabel)).toBeInTheDocument()
    expect(screen.getByLabelText(BOOKING.phoneLabel)).toBeInTheDocument()
    const select = screen.getByLabelText(BOOKING.problemLabel)
    expect(select.querySelectorAll('option')).toHaveLength(BOOKING.problemOptions.length + 1)
    expect(screen.getByRole('button', { name: BOOKING.submit })).toBeInTheDocument()
    expect(screen.getByText(BOOKING.note)).toBeInTheDocument()
  })

  it('marks every field invalid on an empty submit and does not navigate', () => {
    render(<BookingForm />)
    const form = document.querySelector('form') as HTMLFormElement
    fireEvent.submit(form)
    expect(screen.getByLabelText(BOOKING.nameLabel)).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByLabelText(BOOKING.phoneLabel)).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByLabelText(BOOKING.problemLabel)).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getAllByRole('alert')).toHaveLength(3)
    expect(screen.queryByRole('status')).toBeNull()
  })

  it('confirms in place, clears the fields and never reloads the page', () => {
    render(<BookingForm />)
    fireEvent.change(screen.getByLabelText(BOOKING.nameLabel), { target: { value: 'Ada Lovelace' } })
    fireEvent.change(screen.getByLabelText(BOOKING.phoneLabel), {
      target: { value: '(555) 140-1400' },
    })
    fireEvent.change(screen.getByLabelText(BOOKING.problemLabel), {
      target: { value: BOOKING.problemOptions[3] },
    })

    const form = document.querySelector('form') as HTMLFormElement
    fireEvent.submit(form)

    expect(screen.getByRole('status')).toHaveTextContent(BOOKING.success)
    expect(screen.queryByLabelText(BOOKING.nameLabel)).toBeNull()
  })
})
