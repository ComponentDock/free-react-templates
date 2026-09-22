import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { BookingForm } from './BookingForm'

describe('BookingForm', () => {
  it('renders check-in and check-out date inputs', () => {
    render(<BookingForm />)
    expect(screen.getByLabelText('Check-in Date')).toBeDefined()
    expect(screen.getByLabelText('Check-out Date')).toBeDefined()
  })

  it('renders room type dropdown', () => {
    render(<BookingForm />)
    expect(screen.getByLabelText('Room type')).toBeDefined()
  })

  it('renders adult count dropdown', () => {
    render(<BookingForm />)
    expect(screen.getByLabelText('Number of adults')).toBeDefined()
  })

  it('renders Check Availability button', () => {
    render(<BookingForm />)
    expect(screen.getByRole('button', { name: /check availability/i })).toBeDefined()
  })

  it('renders the Best Price Guaranteed text', () => {
    render(<BookingForm />)
    expect(screen.getByText('Best Price Guaranteed!')).toBeDefined()
  })

  it('renders date labels', () => {
    render(<BookingForm />)
    expect(screen.getByText('Check-in Date')).toBeDefined()
    expect(screen.getByText('Check-out Date')).toBeDefined()
  })

  it('submits the form without errors', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)
    const submitBtn = screen.getByRole('button', { name: /check availability/i })
    await user.click(submitBtn)
  })
})
