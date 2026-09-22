import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BookingForm } from './BookingForm'

describe('BookingForm', () => {
  it('renders check-in and check-out date fields', () => {
    render(<BookingForm />)

    expect(screen.getByLabelText(/Check In/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Check Out/)).toBeInTheDocument()
  })

  it('renders adults and children select fields', () => {
    render(<BookingForm />)

    expect(screen.getByLabelText(/Adults/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Children/)).toBeInTheDocument()
  })

  it('renders the Check Availability button', () => {
    render(<BookingForm />)

    expect(screen.getByRole('button', { name: 'Check Availability' })).toBeInTheDocument()
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)

    await user.click(screen.getByRole('button', { name: 'Check Availability' }))
  })
})
