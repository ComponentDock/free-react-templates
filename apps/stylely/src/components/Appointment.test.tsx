import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Appointment } from './Appointment'

describe('Appointment', () => {
  it('renders the heading and the appointment form fields', () => {
    render(<Appointment />)

    expect(screen.getByRole('heading', { name: 'Make an Appointment' })).toBeInTheDocument()
    expect(screen.getByLabelText('Name *')).toBeInTheDocument()
    expect(screen.getByLabelText('Email address *')).toBeInTheDocument()
    expect(screen.getByLabelText('Select service *')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone number *')).toBeInTheDocument()
    expect(screen.getByLabelText('Date *')).toBeInTheDocument()
    expect(screen.getByLabelText('Select time *')).toBeInTheDocument()
    expect(screen.getByLabelText('Your Note *')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Make an Appointment' })).toBeInTheDocument()
  })

  it('shows per-field errors on an invalid submission', async () => {
    const user = userEvent.setup()
    render(<Appointment />)

    await user.click(screen.getByRole('button', { name: 'Make an Appointment' }))
    expect(screen.getByText('Name is required.')).toBeInTheDocument()
    expect(screen.getByText('A valid email address is required.')).toBeInTheDocument()
    expect(screen.getByText('Please choose a service.')).toBeInTheDocument()
    expect(screen.getByText('A phone number is required.')).toBeInTheDocument()
    expect(screen.getByText('Please choose a time slot.')).toBeInTheDocument()
    expect(screen.queryByText('Appointment requested!')).not.toBeInTheDocument()
  })

  it('submits a valid request and shows the success message', async () => {
    const user = userEvent.setup()
    render(<Appointment />)

    await user.type(screen.getByLabelText('Name *'), 'Jane Smith')
    await user.type(screen.getByLabelText('Email address *'), 'jane@example.com')
    await user.selectOptions(screen.getByLabelText('Select service *'), 'Stylish Hair Cut')
    await user.type(screen.getByLabelText('Phone number *'), '(555) 123-4567')
    await user.type(screen.getByLabelText('Date *'), '2026-08-20')
    await user.selectOptions(screen.getByLabelText('Select time *'), '10 AM TO 12PM')
    await user.type(screen.getByLabelText('Your Note *'), 'First visit')
    await user.click(screen.getByRole('button', { name: 'Make an Appointment' }))

    expect(screen.getByText('Appointment requested!')).toBeInTheDocument()
    expect(screen.getByText(/Thanks, Jane Smith!/)).toBeInTheDocument()
    expect(screen.queryByLabelText('Name *')).not.toBeInTheDocument()
  })
})
