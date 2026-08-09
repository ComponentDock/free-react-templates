import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the heading, form fields, submit button, and direct email', () => {
    render(<Contact />)

    expect(screen.getByText('Get in Touch')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Let’s Connect' })).toBeInTheDocument()
    for (const label of ['Name', 'Email', 'Subject', 'Message']) {
      expect(screen.getByLabelText(label)).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
    expect(screen.getByText(/hello@airwave\.fm/i)).toBeInTheDocument()
  })

  it('shows a per-field error and does not submit with an invalid email', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByLabelText('Name'), 'Jane Listener')
    await user.type(screen.getByLabelText('Email'), 'not-an-email')
    await user.type(screen.getByLabelText('Subject'), 'Guest suggestion')
    await user.type(screen.getByLabelText('Message'), 'Love the show!')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(screen.getByText(/please enter a valid email/i)).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('shows a success message after a valid submission', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByLabelText('Name'), 'Jane Listener')
    await user.type(screen.getByLabelText('Email'), 'jane@example.com')
    await user.type(screen.getByLabelText('Subject'), 'Guest suggestion')
    await user.type(screen.getByLabelText('Message'), 'Love the show!')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(screen.getByRole('status')).toHaveTextContent(/message sent/i)
  })

  it('shows required-field errors when fields are missing', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(screen.getByText(/name is required/i)).toBeInTheDocument()
    expect(screen.getByText(/email is required/i)).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })
})
