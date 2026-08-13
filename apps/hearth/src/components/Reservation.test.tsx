import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Reservation } from './Reservation'

describe('Reservation', () => {
  it('renders the heading pair and the six booking fields', () => {
    render(<Reservation />)

    expect(screen.getByText('Book a Table')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Make Reservation')

    expect(screen.getByRole('textbox', { name: 'Name' })).toHaveAttribute(
      'placeholder',
      'Your Name',
    )
    expect(screen.getByRole('textbox', { name: 'Email' })).toHaveAttribute(
      'placeholder',
      'Your Email',
    )
    expect(screen.getByRole('textbox', { name: 'Phone' })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'Date' })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'Time' })).toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: 'Person' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Make a Reservation' })).toBeInTheDocument()
  })

  it('shows per-field errors when submitting an empty form', async () => {
    const user = userEvent.setup()
    render(<Reservation />)

    await user.click(screen.getByRole('button', { name: 'Make a Reservation' }))

    expect(screen.getByText('Name is required')).toBeInTheDocument()
    expect(screen.getByText('Email is required')).toBeInTheDocument()
    expect(screen.getByText('Phone is required')).toBeInTheDocument()
    expect(screen.getByText('Date is required')).toBeInTheDocument()
    expect(screen.getByText('Time is required')).toBeInTheDocument()
    expect(screen.queryByText(/Thank you/)).not.toBeInTheDocument()
  })

  it('clears a field error as soon as the user types in that field', async () => {
    const user = userEvent.setup()
    render(<Reservation />)

    await user.click(screen.getByRole('button', { name: 'Make a Reservation' }))
    expect(screen.getByText('Name is required')).toBeInTheDocument()

    await user.type(screen.getByRole('textbox', { name: 'Name' }), 'Jane')
    expect(screen.queryByText('Name is required')).not.toBeInTheDocument()
  })

  it('rejects an invalid email address', async () => {
    const user = userEvent.setup()
    render(<Reservation />)

    await user.type(screen.getByRole('textbox', { name: 'Name' }), 'Jane Doe')
    await user.type(screen.getByRole('textbox', { name: 'Email' }), 'not-an-email')
    await user.type(screen.getByRole('textbox', { name: 'Phone' }), '555-0100')
    await user.type(screen.getByRole('textbox', { name: 'Date' }), '2026-08-20')
    await user.type(screen.getByRole('textbox', { name: 'Time' }), '19:30')
    await user.click(screen.getByRole('button', { name: 'Make a Reservation' }))

    expect(screen.getByText('Enter a valid email')).toBeInTheDocument()
    expect(screen.queryByText(/Thank you/)).not.toBeInTheDocument()
  })

  it('shows a confirmation after a valid submission', async () => {
    const user = userEvent.setup()
    render(<Reservation />)

    await user.type(screen.getByRole('textbox', { name: 'Name' }), 'Jane Doe')
    await user.type(screen.getByRole('textbox', { name: 'Email' }), 'jane@example.com')
    await user.type(screen.getByRole('textbox', { name: 'Phone' }), '555-0100')
    await user.type(screen.getByRole('textbox', { name: 'Date' }), '2026-08-20')
    await user.type(screen.getByRole('textbox', { name: 'Time' }), '19:30')
    await user.click(screen.getByRole('button', { name: 'Make a Reservation' }))

    expect(screen.getByText(/Thank you, Jane Doe!/)).toBeInTheDocument()
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument()
  })
})
