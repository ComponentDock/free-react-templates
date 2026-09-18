import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { AppointmentForm } from './AppointmentForm'

describe('AppointmentForm', () => {
  it('renders the heading', () => {
    render(<AppointmentForm />)
    expect(
      screen.getByRole('heading', { name: /Online.*Appointment.*Request Form/i }),
    ).toBeInTheDocument()
  })

  it('renders all form fields', () => {
    render(<AppointmentForm />)
    expect(screen.getByLabelText('Your Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone Number')).toBeInTheDocument()
    expect(screen.getByLabelText('Date')).toBeInTheDocument()
    expect(screen.getByLabelText('Time')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<AppointmentForm />)
    expect(screen.getByRole('button', { name: /send request/i })).toBeInTheDocument()
  })

  it('allows typing in form fields', async () => {
    const user = userEvent.setup()
    render(<AppointmentForm />)
    await user.type(screen.getByLabelText('Your Name'), 'John Doe')
    expect(screen.getByLabelText('Your Name')).toHaveValue('John Doe')
  })

  it('submits the form without error', async () => {
    const user = userEvent.setup()
    render(<AppointmentForm />)
    await user.type(screen.getByLabelText('Your Name'), 'Jane')
    await user.type(screen.getByLabelText('Phone Number'), '555-0100')
    fireEvent.submit(screen.getByRole('button', { name: /send request/i }))
    expect(screen.getByLabelText('Your Name')).toHaveValue('Jane')
  })
})
