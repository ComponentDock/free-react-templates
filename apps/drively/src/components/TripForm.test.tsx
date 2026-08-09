import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TripForm } from './TripForm'

describe('TripForm', () => {
  it('renders labeled inputs and a submit button', () => {
    render(<TripForm />)
    expect(screen.getByLabelText(/Pickup address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Drop-off address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Journey date/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Return date/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument()
  })

  it('shows validation errors for an empty submit without reloading', async () => {
    const user = userEvent.setup()
    render(<TripForm />)

    await user.click(screen.getByRole('button', { name: 'Submit' }))

    expect(screen.getByText('Please enter your pickup address')).toBeInTheDocument()
    expect(screen.getByText('Please enter your drop-off address')).toBeInTheDocument()
    expect(screen.getByText('Please choose a journey date')).toBeInTheDocument()
    expect(screen.getByText('Please choose a return date')).toBeInTheDocument()
  })

  it('clears a field error once the user types into that field', async () => {
    const user = userEvent.setup()
    render(<TripForm />)

    await user.click(screen.getByRole('button', { name: 'Submit' }))
    expect(screen.getByText('Please enter your pickup address')).toBeInTheDocument()

    await user.type(screen.getByLabelText(/Pickup address/i), 'Airport')
    expect(screen.queryByText('Please enter your pickup address')).not.toBeInTheDocument()
    expect(screen.getByText('Please enter your drop-off address')).toBeInTheDocument()
  })

  it('shows a confirmation and resets the form on a valid submit', async () => {
    const user = userEvent.setup()
    render(<TripForm />)

    await user.type(screen.getByLabelText(/Pickup address/i), 'Airport')
    await user.type(screen.getByLabelText(/Drop-off address/i), 'Downtown')
    await user.type(screen.getByLabelText(/Journey date/i), '2026-08-20')
    await user.type(screen.getByLabelText(/Return date/i), '2026-08-25')
    await user.click(screen.getByRole('button', { name: 'Submit' }))

    expect(
      screen.getByText(/Thanks! Your trip from Airport to Downtown has been requested/i),
    ).toBeInTheDocument()
    expect(screen.getByLabelText(/Pickup address/i)).toHaveValue('')
  })

  it('clears the confirmation when a later submit is invalid', async () => {
    const user = userEvent.setup()
    render(<TripForm />)

    await user.type(screen.getByLabelText(/Pickup address/i), 'Airport')
    await user.type(screen.getByLabelText(/Drop-off address/i), 'Downtown')
    await user.type(screen.getByLabelText(/Journey date/i), '2026-08-20')
    await user.type(screen.getByLabelText(/Return date/i), '2026-08-25')
    await user.click(screen.getByRole('button', { name: 'Submit' }))
    expect(screen.getByText(/Thanks! Your trip from Airport to Downtown/i)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Submit' }))
    expect(screen.queryByText(/Thanks! Your trip from/i)).not.toBeInTheDocument()
    expect(screen.getByText('Please enter your pickup address')).toBeInTheDocument()
  })
})
