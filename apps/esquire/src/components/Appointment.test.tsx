import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Appointment } from './Appointment'
import { APPOINTMENT_TITLE } from '../data'

describe('Appointment', () => {
  it('renders the heading, the five form fields and the full-width gold Submit button', () => {
    const { container } = render(<Appointment />)

    expect(screen.getByRole('heading', { name: APPOINTMENT_TITLE })).toBeInTheDocument()
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone')).toBeInTheDocument()
    expect(screen.getByLabelText('Date')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()

    const submit = screen.getByRole('button', { name: 'Submit' })
    expect(submit).toHaveAttribute('type', 'submit')
    expect(submit.className).toContain('w-full')
    expect(submit.className).toContain('bg-brand')

    expect(container.querySelector('img')).toHaveAttribute('alt', 'Consultation room')
  })

  it('shows per-field errors and does not submit for an invalid email', async () => {
    const user = userEvent.setup()
    render(<Appointment />)

    await user.type(screen.getByLabelText('Name'), 'Jane Doe')
    await user.type(screen.getByLabelText('Email'), 'not-an-email')
    await user.type(screen.getByLabelText('Phone'), '555 1234')
    await user.type(screen.getByLabelText('Date'), '2026-09-01')
    await user.type(screen.getByLabelText('Message'), 'Hello')
    await user.click(screen.getByRole('button', { name: 'Submit' }))

    // role="alert" accessible names come from author, not text content.
    const alerts = screen.getAllByRole('alert')
    expect(alerts.some((alert) => alert.textContent === 'Enter a valid email')).toBe(true)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('shows a required-field error when fields are empty', async () => {
    const user = userEvent.setup()
    render(<Appointment />)

    await user.click(screen.getByRole('button', { name: 'Submit' }))

    const alerts = screen.getAllByRole('alert')
    expect(alerts.some((alert) => alert.textContent === 'Name is required')).toBe(true)
  })

  it('clears a field error as soon as the user keeps typing in that field', async () => {
    const user = userEvent.setup()
    render(<Appointment />)

    await user.type(screen.getByLabelText('Email'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Submit' }))
    expect(screen.getByText('Enter a valid email')).toBeInTheDocument()

    await user.type(screen.getByLabelText('Email'), '@example.com')
    expect(screen.queryByText('Enter a valid email')).not.toBeInTheDocument()
  })

  it('swaps the form for a success message once all fields are valid', async () => {
    const user = userEvent.setup()
    render(<Appointment />)

    await user.type(screen.getByLabelText('Name'), 'Jane Doe')
    await user.type(screen.getByLabelText('Email'), 'jane@example.com')
    await user.type(screen.getByLabelText('Phone'), '555 1234')
    await user.type(screen.getByLabelText('Date'), '2026-09-01')
    await user.type(screen.getByLabelText('Message'), 'Hello, I need advice on a contract.')
    await user.click(screen.getByRole('button', { name: 'Submit' }))

    const status = screen.getByRole('status')
    expect(status).toHaveTextContent('Thank you, Jane Doe!')
    expect(screen.queryByLabelText('Name')).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Submit' })).not.toBeInTheDocument()
  })
})
