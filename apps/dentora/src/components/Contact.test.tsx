import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the heading, form fields, and contact info cards', () => {
    render(<Contact />)

    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Schedule Your Visit' }),
    ).toBeInTheDocument()

    expect(screen.getByLabelText('Full Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone Number')).toBeInTheDocument()
    expect(screen.getByLabelText('Service Needed')).toBeInTheDocument()
    expect(screen.getByLabelText('Preferred Date')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Request Appointment/ })).toBeInTheDocument()

    for (const label of ['Visit Us', 'Call Us', 'Email Us', 'Office Hours']) {
      expect(screen.getByRole('heading', { level: 3, name: label })).toBeInTheDocument()
    }
    expect(screen.getByText(/789 Dental Way/)).toBeInTheDocument()
    expect(screen.getByText('hello@dentora.com')).toBeInTheDocument()
  })

  it('shows validation errors when submitting an empty or invalid form', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.click(screen.getByRole('button', { name: /Request Appointment/ }))
    expect(screen.getAllByRole('alert').length).toBeGreaterThan(0)
    expect(screen.getByText('Please enter your full name.')).toBeInTheDocument()
    expect(screen.getByText('Please select a service.')).toBeInTheDocument()

    await user.type(screen.getByLabelText('Email Address'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: /Request Appointment/ }))
    expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument()
  })

  it('shows a success message after a valid submission', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByLabelText('Full Name'), 'Ada Lovelace')
    await user.type(screen.getByLabelText('Email Address'), 'ada@dentora.com')
    await user.type(screen.getByLabelText('Phone Number'), '(555) 000-1111')
    await user.selectOptions(screen.getByLabelText('Service Needed'), 'Teeth Cleaning')
    await user.type(screen.getByLabelText('Preferred Date'), '2026-09-01')
    await user.type(screen.getByLabelText('Message'), 'Looking to book a cleaning.')
    await user.click(screen.getByRole('button', { name: /Request Appointment/ }))

    expect(screen.getByRole('status')).toBeInTheDocument()
    expect(screen.getByText(/Appointment request received/)).toBeInTheDocument()
  })
})
