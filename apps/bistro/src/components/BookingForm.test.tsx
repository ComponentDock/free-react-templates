import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BookingForm } from './BookingForm'

describe('BookingForm', () => {
  it('renders the section with kicker, heading and all booking fields', () => {
    render(<BookingForm />)

    expect(screen.getByText('About Our Restaurant')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Book A Table' })).toBeInTheDocument()

    expect(screen.getByLabelText('Your name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByLabelText('Date')).toBeInTheDocument()
    expect(screen.getByLabelText('Time')).toBeInTheDocument()
    expect(screen.getByLabelText('Persons')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Book Now' })).toBeInTheDocument()
  })

  it('shows inline validation errors on an empty submit', () => {
    render(<BookingForm />)

    fireEvent.click(screen.getByRole('button', { name: 'Book Now' }))

    expect(screen.getByText('Name is required')).toBeInTheDocument()
    expect(screen.getByText('Email is required')).toBeInTheDocument()
    expect(screen.getByText('Date is required')).toBeInTheDocument()
    expect(screen.getByText('Time is required')).toBeInTheDocument()
    expect(screen.getByLabelText('Your name')).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByLabelText('Date')).toHaveAttribute('aria-invalid', 'true')
  })

  it('validates the email format', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)

    await user.type(screen.getByLabelText('Email address'), 'not-an-email')
    fireEvent.click(screen.getByRole('button', { name: 'Book Now' }))

    expect(screen.getByText('Enter a valid email')).toBeInTheDocument()
  })

  it('accepts a valid booking and swaps to a success message', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)

    await user.type(screen.getByLabelText('Your name'), 'Ada Lovelace')
    await user.type(screen.getByLabelText('Email address'), 'ada@example.com')
    fireEvent.change(screen.getByLabelText('Date'), { target: { value: '2026-08-12' } })
    fireEvent.change(screen.getByLabelText('Time'), { target: { value: '19:30' } })
    await user.selectOptions(screen.getByLabelText('Persons'), '4')

    fireEvent.click(screen.getByRole('button', { name: 'Book Now' }))

    expect(screen.getByRole('status')).toHaveTextContent('Your table request has been received')
    // The form (and its inputs) unmount once the success message shows.
    expect(screen.queryByLabelText('Your name')).not.toBeInTheDocument()
  })

  it('offers 1–4 person options', () => {
    render(<BookingForm />)

    const select = screen.getByLabelText('Persons')
    expect(select.querySelectorAll('option')).toHaveLength(4)
    expect(screen.getByRole('option', { name: '1 Person' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: '4 Persons' })).toBeInTheDocument()
  })
})
