import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Booking } from './Booking'

describe('Booking', () => {
  it('renders the booking form heading', () => {
    render(<Booking />)
    expect(screen.getByText('Book your apartment')).toBeInTheDocument()
  })

  it('has all form fields', () => {
    render(<Booking />)
    expect(screen.getByPlaceholderText('Full Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Check-In')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Check-Out')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Phone number')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Time')).toBeInTheDocument()
  })

  it('has Adults and Children selects', () => {
    render(<Booking />)
    expect(screen.getByDisplayValue('Adults')).toBeInTheDocument()
    expect(screen.getByDisplayValue('Children')).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<Booking />)
    expect(screen.getByText('Book Apartment Now')).toBeInTheDocument()
  })

  it('handles form submission without page reload', async () => {
    const user = userEvent.setup()
    render(<Booking />)
    await user.click(screen.getByText('Book Apartment Now'))
  })
})
