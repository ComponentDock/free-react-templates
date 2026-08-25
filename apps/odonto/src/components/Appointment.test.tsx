import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Appointment } from './Appointment'

describe('Appointment', () => {
  it('renders the appointment form', () => {
    render(<Appointment />)
    expect(screen.getByText('Make An Appointment')).toBeInTheDocument()
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: 'Service' })).toBeInTheDocument()
    expect(screen.getByLabelText('Date')).toBeInTheDocument()
  })

  it('shows confirmation after submission', async () => {
    const user = userEvent.setup()
    render(<Appointment />)
    await user.type(screen.getByLabelText('Name'), 'John Doe')
    await user.type(screen.getByLabelText('Email'), 'john@example.com')
    await user.selectOptions(screen.getByRole('combobox', { name: 'Service' }), 'checkup')
    await user.type(screen.getByLabelText('Date'), '2026-09-01')
    await user.click(screen.getByRole('button', { name: 'Request Appointment' }))
    expect(screen.getByRole('status')).toBeInTheDocument()
    expect(screen.getByText('Appointment Requested!')).toBeInTheDocument()
  })
})
