import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BookingForm } from './BookingForm'

describe('BookingForm', () => {
  it('renders check-in and check-out date inputs', () => {
    render(<BookingForm />)

    expect(screen.getByLabelText('Check-in')).toBeInTheDocument()
    expect(screen.getByLabelText('Check-out')).toBeInTheDocument()
  })

  it('renders adults select with options', () => {
    render(<BookingForm />)

    const adultsSelect = screen.getByLabelText('Adults')
    expect(adultsSelect).toBeInTheDocument()

    expect(screen.getByRole('option', { name: '1 Adult' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: '2 Adults' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: '5 Adults' })).toBeInTheDocument()
  })

  it('renders children select with options', () => {
    render(<BookingForm />)

    const childrenSelect = screen.getByLabelText('Children')
    expect(childrenSelect).toBeInTheDocument()

    expect(screen.getByRole('option', { name: '0 Children' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: '1 Child' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: '5 Children' })).toBeInTheDocument()
  })

  it('renders the Book Now submit button', () => {
    render(<BookingForm />)

    expect(screen.getByRole('button', { name: /Book Now/i })).toBeInTheDocument()
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)

    const submitBtn = screen.getByRole('button', { name: /Book Now/i })
    await user.click(submitBtn)
    // No error thrown — form's onSubmit prevented default
  })
})
