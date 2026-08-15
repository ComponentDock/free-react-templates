import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders contact details with icons and labels', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { level: 2, name: 'Get In Touch' })).toBeInTheDocument()
    expect(screen.getByText('Email Us')).toBeInTheDocument()
    expect(screen.getByText('hello@slate.example')).toBeInTheDocument()
    expect(screen.getByText('Call Us')).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
    expect(screen.getByText('Visit Us')).toBeInTheDocument()
    expect(screen.getByText('410 Market Street, Portland, OR')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'hello@slate.example' })).toHaveAttribute(
      'href',
      'mailto:hello@slate.example',
    )
  })

  it('shows per-field errors when submitting an empty form', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.click(screen.getByRole('button', { name: /send message/i }))
    expect(screen.getByText('Please enter your name')).toBeInTheDocument()
    expect(screen.getByText('Please enter a valid email')).toBeInTheDocument()
    expect(screen.getByText('Please write a message of at least 10 characters')).toBeInTheDocument()
  })

  it('validates the email format', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText(/^Email/), 'not-an-email')
    await user.type(screen.getByLabelText(/^Name/), 'Ada Lovelace')
    await user.type(
      screen.getByLabelText(/^Message/),
      'A valid message that is long enough to pass.',
    )
    await user.click(screen.getByRole('button', { name: /send message/i }))
    expect(screen.getByText('Please enter a valid email')).toBeInTheDocument()
    // Typing into a field with an error clears that field's error.
    await user.clear(screen.getByLabelText(/^Email/))
    await user.type(screen.getByLabelText(/^Email/), 'ada@example.com')
    expect(screen.queryByText('Please enter a valid email')).not.toBeInTheDocument()
  })

  it('shows a confirmation and clears the form on valid submit', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText(/^Name/), 'Ada Lovelace')
    await user.type(screen.getByLabelText(/^Email/), 'ada@example.com')
    await user.type(
      screen.getByLabelText(/^Message/),
      'A valid message that is long enough to pass.',
    )
    await user.click(screen.getByRole('button', { name: /send message/i }))
    expect(screen.getByRole('heading', { name: 'Message Sent' })).toBeInTheDocument()
    expect(screen.getByText(/Thanks, Ada Lovelace!/)).toBeInTheDocument()
    expect(screen.queryByLabelText(/^Name/)).not.toBeInTheDocument()
  })
})
