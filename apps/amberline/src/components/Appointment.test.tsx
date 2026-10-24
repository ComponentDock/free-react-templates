import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Appointment } from './Appointment'

describe('Appointment', () => {
  it('shows per-field errors and no confirmation when the form is submitted empty', async () => {
    const user = userEvent.setup()
    render(<Appointment />)
    await user.click(screen.getByRole('button', { name: 'Send message' }))
    expect(screen.getByText('Please tell us your name.')).toBeInTheDocument()
    expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument()
    expect(
      screen.getByText('Please describe the work in at least 10 characters.'),
    ).toBeInTheDocument()
    expect(screen.getByLabelText('Full name')).toHaveAttribute('aria-invalid', 'true')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('rejects a malformed email and a short message', async () => {
    const user = userEvent.setup()
    render(<Appointment />)
    await user.type(screen.getByLabelText('Full name'), 'Ada Marsh')
    await user.type(screen.getByLabelText('Email address'), 'ada@nowhere')
    await user.type(screen.getByLabelText('Message'), 'too short')
    await user.click(screen.getByRole('button', { name: 'Send message' }))
    expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument()
    expect(screen.queryByText('Please tell us your name.')).not.toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('confirms a valid submission inline', async () => {
    const user = userEvent.setup()
    render(<Appointment />)
    await user.type(screen.getByLabelText('Full name'), 'Ada Marsh')
    await user.type(screen.getByLabelText('Email address'), 'ada@example.com')
    await user.selectOptions(screen.getByLabelText('Subject'), 'Renovation')
    await user.type(
      screen.getByLabelText('Message'),
      'We would like the ground floor opened up and a new stair.',
    )
    await user.click(screen.getByRole('button', { name: 'Send message' }))
    expect(screen.getByRole('status')).toHaveTextContent('your request is in')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('opens the second question, closes the first and tracks aria-expanded', async () => {
    const user = userEvent.setup()
    render(<Appointment />)
    const first = screen.getByRole('button', { name: 'How do you price a project?' })
    const second = screen.getByRole('button', { name: 'Do you handle permits?' })
    expect(first).toHaveAttribute('aria-expanded', 'true')
    expect(second).toHaveAttribute('aria-expanded', 'false')

    await user.click(second)
    expect(second).toHaveAttribute('aria-expanded', 'true')
    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getByText(/Our consulting team files the drawings/)).toBeInTheDocument()

    await user.click(second)
    expect(second).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText(/Our consulting team files the drawings/)).not.toBeInTheDocument()
  })
})
