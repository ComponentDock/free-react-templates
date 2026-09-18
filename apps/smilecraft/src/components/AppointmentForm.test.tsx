import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AppointmentForm } from './AppointmentForm'

describe('AppointmentForm', () => {
  it('renders all form fields and submit button', () => {
    render(<AppointmentForm />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Book an Appointment' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('form', { name: 'Appointment form' })).toBeInTheDocument()

    expect(screen.getByLabelText('Department')).toBeInTheDocument()
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Date')).toBeInTheDocument()
    expect(screen.getByLabelText('Time')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Make an Appointment' })).toBeInTheDocument()
  })

  it('shows confirmation on submit', async () => {
    const user = userEvent.setup()
    render(<AppointmentForm />)

    await user.type(screen.getByLabelText('Name'), 'John Doe')
    await user.type(screen.getByLabelText('Email'), 'john@example.com')
    await user.type(screen.getByLabelText('Phone'), '555-1234')
    await user.type(screen.getByLabelText('Date'), '2026-10-01')
    await user.type(screen.getByLabelText('Time'), '10:00')

    await user.click(screen.getByRole('button', { name: 'Make an Appointment' }))

    expect(screen.getByRole('status')).toBeInTheDocument()
    expect(screen.getByText(/Thank you/)).toBeInTheDocument()
  })
})
