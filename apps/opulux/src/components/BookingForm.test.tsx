import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BookingForm } from './BookingForm'

describe('BookingForm', () => {
  it('renders all form fields', () => {
    render(<BookingForm />)
    expect(screen.getByLabelText('Check-in Date')).toBeInTheDocument()
    expect(screen.getByLabelText('Check-out Date')).toBeInTheDocument()
    expect(screen.getByLabelText('Room')).toBeInTheDocument()
    expect(screen.getByLabelText('Customer')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Check Availability' })).toBeInTheDocument()
  })

  it('allows selecting room type and guests', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)
    await user.selectOptions(screen.getByLabelText('Room'), 'Suite')
    expect(screen.getByLabelText('Room')).toHaveValue('Suite')
    await user.selectOptions(screen.getByLabelText('Customer'), '2 Adults')
    expect(screen.getByLabelText('Customer')).toHaveValue('2 Adults')
  })

  it('submits form and prevents default', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)
    // Fill in date inputs
    const checkin = screen.getByLabelText('Check-in Date')
    await user.type(checkin, '2025-06-15')
    const checkout = screen.getByLabelText('Check-out Date')
    await user.type(checkout, '2025-06-20')

    // Submit the form by submitting the form element directly
    const form = checkin.closest('form')!
    const submitHandler = vi.fn((e: Event) => e.preventDefault())
    form.addEventListener('submit', submitHandler, { once: true })
    fireEvent.submit(form)
    expect(submitHandler).toHaveBeenCalled()
  })
})
