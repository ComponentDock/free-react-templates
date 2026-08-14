import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the heading, form fields, submit button, and contact details', () => {
    render(<Contact />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'If Not Now, When? Let’s Work Together!' }),
    ).toBeInTheDocument()
    for (const label of ['Full Name', 'Email Address', 'Your Message']) {
      expect(screen.getByLabelText(label)).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
    expect(screen.getByText('hireme@portfolio.com')).toBeInTheDocument()
    expect(screen.getByText(/221B Baker Street/)).toBeInTheDocument()
    expect(screen.getByText(/Park Road, USA - 215431/)).toBeInTheDocument()
  })

  it('shows required-field errors when fields are missing', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(screen.getByText(/name is required/i)).toBeInTheDocument()
    expect(screen.getByText(/email is required/i)).toBeInTheDocument()
    expect(screen.getByText(/message is required/i)).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('rejects an invalid email address', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByLabelText('Full Name'), 'Harper Watson')
    await user.type(screen.getByLabelText('Email Address'), 'not-an-email')
    await user.type(screen.getByLabelText('Your Message'), 'Hello!')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(screen.getByText(/please enter a valid email/i)).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('shows a success message after a valid submission', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByLabelText('Full Name'), 'Harper Watson')
    await user.type(screen.getByLabelText('Email Address'), 'harper@example.com')
    await user.type(screen.getByLabelText('Your Message'), 'Let’s work together!')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(screen.getByRole('status')).toHaveTextContent(/thanks for your message/i)
  })
})
