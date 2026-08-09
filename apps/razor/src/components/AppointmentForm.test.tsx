import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AppointmentForm } from './AppointmentForm'

describe('AppointmentForm', () => {
  it('renders the required fields and a submit button', () => {
    render(<AppointmentForm />)
    expect(screen.getByRole('heading', { name: 'Make An Appointment' })).toBeInTheDocument()
    expect(screen.getByLabelText('First Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Make Appointment/ })).toBeInTheDocument()
  })

  it('shows validation errors when required fields are empty', async () => {
    const user = userEvent.setup()
    render(<AppointmentForm />)
    await user.click(screen.getByRole('button', { name: /Make Appointment/ }))
    expect(screen.getByText('Please select a service')).toBeInTheDocument()
    expect(screen.getByText('Please enter your first name')).toBeInTheDocument()
    expect(screen.getByText('Please enter your last name')).toBeInTheDocument()
    expect(screen.getByText('Please enter your phone number')).toBeInTheDocument()
  })

  it('clears a field error once the user starts typing', async () => {
    const user = userEvent.setup()
    render(<AppointmentForm />)
    await user.click(screen.getByRole('button', { name: /Make Appointment/ }))
    expect(screen.getByText('Please enter your first name')).toBeInTheDocument()
    await user.type(screen.getByLabelText('First Name'), 'Jane')
    expect(screen.queryByText('Please enter your first name')).not.toBeInTheDocument()
  })

  it('confirms the appointment on a valid submit without reloading', async () => {
    const user = userEvent.setup()
    render(<AppointmentForm />)
    await user.selectOptions(screen.getByLabelText('Select Your Services'), 'Hair Cut')
    await user.type(screen.getByLabelText('First Name'), 'Jane')
    await user.type(screen.getByLabelText('Last Name'), 'Doe')
    await user.type(screen.getByLabelText('Phone'), '+1 555 0100')
    await user.click(screen.getByRole('button', { name: /Make Appointment/ }))
    expect(
      screen.getByText(/Thanks, Jane! Your appointment has been requested\./),
    ).toBeInTheDocument()
  })
})
