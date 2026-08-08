import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Reservation } from './Reservation'

describe('Reservation', () => {
  it('shows the heading, sub-paragraph and all form fields', () => {
    render(<Reservation />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Make a Reservation' }),
    ).toBeInTheDocument()

    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Date')).toBeInTheDocument()
    expect(screen.getByLabelText('Time')).toBeInTheDocument()
    expect(screen.getByLabelText('Guests')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone')).toBeInTheDocument()
    expect(screen.getByLabelText('Notes')).toBeInTheDocument()

    expect(screen.getByRole('button', { name: 'Request Reservation' })).toBeInTheDocument()
  })

  it('shows validation errors for an invalid submission', async () => {
    const user = userEvent.setup()
    render(<Reservation />)

    await user.click(screen.getByRole('button', { name: 'Request Reservation' }))

    expect(screen.getByText('Please enter your name')).toBeInTheDocument()
    expect(screen.getByText('Please enter a valid email')).toBeInTheDocument()
    expect(screen.getByText('Please choose a date')).toBeInTheDocument()
    expect(screen.getByText('Please choose a time')).toBeInTheDocument()
    expect(screen.getByText('Please choose the number of guests')).toBeInTheDocument()
    expect(screen.getByText('Please enter a valid phone number')).toBeInTheDocument()
  })

  it('clears a field error once the field is fixed', async () => {
    const user = userEvent.setup()
    render(<Reservation />)

    await user.click(screen.getByRole('button', { name: 'Request Reservation' }))
    expect(screen.getByText('Please enter your name')).toBeInTheDocument()

    await user.type(screen.getByLabelText('Name'), 'Ada Lovelace')
    expect(screen.queryByText('Please enter your name')).not.toBeInTheDocument()
  })

  it('shows a confirmation after a valid submission and resets the form', async () => {
    const user = userEvent.setup()
    render(<Reservation />)

    await user.type(screen.getByLabelText('Name'), 'Ada Lovelace')
    await user.type(screen.getByLabelText('Email'), 'ada@example.com')
    await user.type(screen.getByLabelText('Date'), '2026-09-15')
    await user.selectOptions(screen.getByLabelText('Time'), '7:00 PM')
    await user.selectOptions(screen.getByLabelText('Guests'), '2')
    await user.type(screen.getByLabelText('Phone'), '555-0100')
    await user.type(screen.getByLabelText('Notes'), 'Window seat please')
    await user.click(screen.getByRole('button', { name: 'Request Reservation' }))

    expect(screen.getByRole('status')).toHaveTextContent(
      'Thank you, Ada Lovelace. Your reservation request has been received',
    )
    expect(screen.queryByLabelText('Name')).not.toBeInTheDocument()
  })
})
