import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ReservationForm } from './ReservationForm'

describe('ReservationForm', () => {
  it('renders the reservation heading', () => {
    render(<ReservationForm />)
    expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent('Reservation')
  })

  it('renders the Book A Table heading', () => {
    render(<ReservationForm />)
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Book A Table')
  })

  it('renders all form fields', () => {
    render(<ReservationForm />)
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email Address')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Phone Number')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Select Date')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Number of People')).toBeInTheDocument()
  })

  it('renders a Make Reservation submit button', () => {
    render(<ReservationForm />)
    expect(screen.getByRole('button', { name: 'Make Reservation' })).toBeInTheDocument()
  })

  it('shows confirmation message after submission', async () => {
    const user = userEvent.setup()
    render(<ReservationForm />)

    await user.type(screen.getByPlaceholderText('Your Name'), 'John')
    await user.type(screen.getByPlaceholderText('Email Address'), 'john@example.com')
    await user.type(screen.getByPlaceholderText('Phone Number'), '1234567890')
    await user.type(screen.getByPlaceholderText('Select Date'), '2026-12-25')
    await user.type(screen.getByPlaceholderText('Number of People'), '2')
    await user.click(screen.getByRole('button', { name: 'Make Reservation' }))

    expect(screen.getByText(/reservation request has been received/i)).toBeInTheDocument()
  })
})
