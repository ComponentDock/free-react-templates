import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Reservation } from './Reservation'

describe('Reservation', () => {
  it('renders the reservation form with all fields', () => {
    render(<Reservation />)
    expect(screen.getByRole('heading', { name: /Book Your Table/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Phone/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Number of People/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Date/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Time/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Event/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Make Reservation/i })).toBeInTheDocument()
  })

  it('shows validation errors for empty submission', async () => {
    const user = userEvent.setup()
    render(<Reservation />)
    await user.click(screen.getByRole('button', { name: /Make Reservation/i }))
    expect(screen.getByText(/Name is required/i)).toBeInTheDocument()
    expect(screen.getByText(/Valid email is required/i)).toBeInTheDocument()
    expect(screen.getByText(/Phone is required/i)).toBeInTheDocument()
  })

  it('shows success message on valid submission', async () => {
    const user = userEvent.setup()
    render(<Reservation />)
    await user.type(screen.getByLabelText(/Name/i), 'John Doe')
    await user.type(screen.getByLabelText(/Email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/Phone/i), '555-0123')
    await user.type(screen.getByLabelText(/Date/i), '2026-10-15')
    await user.type(screen.getByLabelText(/Time/i), '19:00')
    await user.click(screen.getByRole('button', { name: /Make Reservation/i }))
    expect(screen.getByText(/Reservation Confirmed/i)).toBeInTheDocument()
    expect(screen.getByText(/Thank you, John Doe/i)).toBeInTheDocument()
  })

  it('allows making another reservation after confirmation', async () => {
    const user = userEvent.setup()
    render(<Reservation />)
    await user.type(screen.getByLabelText(/Name/i), 'Jane')
    await user.type(screen.getByLabelText(/Email/i), 'jane@test.com')
    await user.type(screen.getByLabelText(/Phone/i), '555-9999')
    await user.type(screen.getByLabelText(/Date/i), '2026-11-01')
    await user.type(screen.getByLabelText(/Time/i), '18:00')
    await user.click(screen.getByRole('button', { name: /Make Reservation/i }))
    expect(screen.getByText(/Reservation Confirmed/i)).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /Make Another Reservation/i }))
    expect(screen.getByRole('heading', { name: /Book Your Table/i })).toBeInTheDocument()
  })

  it('updates the people and event selects', async () => {
    const user = userEvent.setup()
    render(<Reservation />)
    const peopleSelect = screen.getByLabelText(/Number of People/i)
    await user.selectOptions(peopleSelect, '4')
    expect(peopleSelect).toHaveValue('4')

    const eventSelect = screen.getByLabelText(/Event/i)
    await user.selectOptions(eventSelect, 'anniversary')
    expect(eventSelect).toHaveValue('anniversary')
  })

  it('clears validation errors when user types', async () => {
    const user = userEvent.setup()
    render(<Reservation />)
    await user.click(screen.getByRole('button', { name: /Make Reservation/i }))
    expect(screen.getByText(/Name is required/i)).toBeInTheDocument()
    await user.type(screen.getByLabelText(/Name/i), 'Test')
    expect(screen.queryByText(/Name is required/i)).not.toBeInTheDocument()
  })
})
