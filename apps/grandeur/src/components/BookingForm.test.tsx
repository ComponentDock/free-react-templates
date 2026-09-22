import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { BookingForm } from './BookingForm'

describe('BookingForm', () => {
  it('renders check-in and check-out date inputs', () => {
    render(<BookingForm />)
    expect(screen.getByLabelText('Check-in date')).toBeDefined()
    expect(screen.getByLabelText('Check-out date')).toBeDefined()
  })

  it('renders total guests input', () => {
    render(<BookingForm />)
    expect(screen.getByLabelText('Total guests')).toBeDefined()
  })

  it('renders Check Availability button', () => {
    render(<BookingForm />)
    expect(screen.getByRole('button', { name: /check availability/i })).toBeDefined()
  })

  it('renders the coupon code link', () => {
    render(<BookingForm />)
    expect(screen.getByText('Got a Coupon Code?')).toBeDefined()
  })

  it('renders date labels', () => {
    render(<BookingForm />)
    expect(screen.getByText('Check-in')).toBeDefined()
    expect(screen.getByText('Check-out')).toBeDefined()
    expect(screen.getByText('Total Guests')).toBeDefined()
  })

  it('submits the form without errors', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)
    const submitBtn = screen.getByRole('button', { name: /check availability/i })
    await user.click(submitBtn)
    // No error thrown — form onSubmit prevented default
  })
})
