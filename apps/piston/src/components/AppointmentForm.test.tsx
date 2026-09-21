import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AppointmentForm } from './AppointmentForm'

describe('AppointmentForm', () => {
  it('renders form with all fields and submit button', () => {
    render(<AppointmentForm />)
    expect(screen.getByLabelText('First Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Date')).toBeInTheDocument()
    expect(screen.getByLabelText('Time')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /appointment/i })).toBeInTheDocument()
  })

  it('shows confirmation after submission', async () => {
    const user = userEvent.setup()
    render(<AppointmentForm />)
    await user.type(screen.getByLabelText('First Name'), 'John')
    await user.type(screen.getByLabelText('Last Name'), 'Doe')
    await user.type(screen.getByLabelText('Date'), '2025-12-25')
    await user.type(screen.getByLabelText('Time'), '10:00')
    await user.type(screen.getByLabelText('Phone'), '555-1234')
    await user.type(screen.getByLabelText('Message'), 'Test message')
    await user.click(screen.getByRole('button', { name: /appointment/i }))
    expect(screen.getByText(/Thank you/)).toBeInTheDocument()
  })
})
