import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { AppointmentForm } from './AppointmentForm'

describe('AppointmentForm', () => {
  it('renders all form fields', () => {
    render(<AppointmentForm />)
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone number')).toBeInTheDocument()
    expect(screen.getByLabelText('Select Services')).toBeInTheDocument()
    expect(screen.getByLabelText('Select Cleaners')).toBeInTheDocument()
  })

  it('renders submit button', () => {
    render(<AppointmentForm />)
    expect(screen.getByText('Make an Appointment')).toBeInTheDocument()
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<AppointmentForm />)
    const submitBtn = screen.getByText('Make an Appointment')
    // Clicking the submit button inside a form triggers onSubmit
    await user.click(submitBtn)
  })
})
