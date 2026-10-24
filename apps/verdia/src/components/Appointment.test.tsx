import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Appointment } from './Appointment'

describe('Appointment', () => {
  it('renders heading', () => {
    render(<Appointment />)
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Book an Appointment')
  })

  it('renders all form fields', () => {
    render(<Appointment />)
    expect(screen.getByLabelText('Patient Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone')).toBeInTheDocument()
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument()
    expect(screen.getByLabelText('Date of Birth')).toBeInTheDocument()
    expect(screen.getByLabelText('Appointment Date')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
  })

  it('renders submit button', () => {
    render(<Appointment />)
    expect(screen.getByRole('button', { name: /CONFIRM BOOKING/i })).toBeInTheDocument()
  })

  it('allows typing in all form fields', async () => {
    const user = userEvent.setup()
    render(<Appointment />)

    await user.type(screen.getByLabelText('Patient Name'), 'John Doe')
    expect(screen.getByLabelText('Patient Name')).toHaveValue('John Doe')

    await user.type(screen.getByLabelText('Phone'), '555-1234')
    expect(screen.getByLabelText('Phone')).toHaveValue('555-1234')

    await user.type(screen.getByLabelText('Email Address'), 'john@example.com')
    expect(screen.getByLabelText('Email Address')).toHaveValue('john@example.com')

    await user.type(screen.getByLabelText('Date of Birth'), '01/01/1990')
    expect(screen.getByLabelText('Date of Birth')).toHaveValue('01/01/1990')

    await user.type(screen.getByLabelText('Appointment Date'), '12/25/2026')
    expect(screen.getByLabelText('Appointment Date')).toHaveValue('12/25/2026')

    await user.type(screen.getByLabelText('Message'), 'Checkup please')
    expect(screen.getByLabelText('Message')).toHaveValue('Checkup please')
  })

  it('submits form without navigation', async () => {
    const user = userEvent.setup()
    render(<Appointment />)

    await user.click(screen.getByRole('button', { name: /CONFIRM BOOKING/i }))
  })
})
