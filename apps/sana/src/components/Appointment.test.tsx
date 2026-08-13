import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Appointment } from './Appointment'

describe('Appointment', () => {
  it('shows the service hours list', () => {
    render(<Appointment />)
    expect(screen.getByRole('heading', { name: 'Servicing Hours' })).toBeInTheDocument()
    for (const day of ['Monday-Friday', 'Saturday', 'Sunday']) {
      expect(screen.getByText(day)).toBeInTheDocument()
    }
    expect(screen.getAllByText('08.00 am - 10.00 pm').length).toBe(3)
  })

  it('shows the booking form with all fields', () => {
    render(<Appointment />)
    expect(screen.getByRole('heading', { name: 'Book an Appointment' })).toBeInTheDocument()
    expect(screen.getByLabelText('Disease Type')).toBeInTheDocument()
    expect(screen.getByLabelText('Patient Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone')).toBeInTheDocument()
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument()
    expect(screen.getByLabelText('Date of Birth')).toBeInTheDocument()
    expect(screen.getByLabelText('Appointment Date')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /confirm booking/i })).toBeInTheDocument()
  })

  it('validates required fields and shows a confirmation on success', async () => {
    const user = userEvent.setup()
    render(<Appointment />)
    await user.click(screen.getByRole('button', { name: /confirm booking/i }))
    expect(screen.getByText(/patient name is required/i)).toBeInTheDocument()
    await user.type(screen.getByLabelText('Patient Name'), 'Jane Doe')
    await user.type(screen.getByLabelText('Email Address'), 'jane@example.com')
    await user.click(screen.getByRole('button', { name: /confirm booking/i }))
    expect(screen.getByRole('status')).toHaveTextContent(/confirmed/i)
  })
})
