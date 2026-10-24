import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Appointment } from './Appointment'

describe('Appointment', () => {
  it('shows the heading and a booking form with fields and a submit button', () => {
    render(<Appointment />)

    expect(screen.getByRole('heading', { level: 2, name: 'Free Consultation' })).toBeInTheDocument()
    expect(screen.getByLabelText('Your Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument()
    expect(screen.getByLabelText('Pet Type')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Book Consultation/i })).toBeInTheDocument()
  })

  it('shows errors for an empty submission and does not book', async () => {
    const user = userEvent.setup()
    render(<Appointment />)

    await user.click(screen.getByRole('button', { name: /Book Consultation/i }))

    const alerts = screen.getAllByRole('alert')
    expect(alerts.length).toBeGreaterThanOrEqual(1)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('shows an error for an invalid email address', async () => {
    const user = userEvent.setup()
    render(<Appointment />)

    await user.type(screen.getByLabelText('Your Name'), 'Ada Lovelace')
    await user.type(screen.getByLabelText('Email Address'), 'not-an-email')
    await user.type(screen.getByLabelText('Message'), 'I would like a home visit.')
    await user.click(screen.getByRole('button', { name: /Book Consultation/i }))

    expect(screen.getByRole('alert')).toHaveTextContent(/valid email/i)
  })

  it('books a consultation with valid details and shows a success message', async () => {
    const user = userEvent.setup()
    render(<Appointment />)

    await user.type(screen.getByLabelText('Your Name'), 'Ada Lovelace')
    await user.type(screen.getByLabelText('Email Address'), 'ada@example.com')
    await user.selectOptions(screen.getByLabelText('Pet Type'), 'Dog')
    await user.type(screen.getByLabelText('Message'), 'I would like a home visit.')
    await user.click(screen.getByRole('button', { name: /Book Consultation/i }))

    expect(screen.getByRole('status')).toHaveTextContent(/request received/i)
  })
})
