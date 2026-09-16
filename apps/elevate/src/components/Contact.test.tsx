import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the contact form with all fields', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: /get in touch/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/your name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('shows validation errors when submitting empty form', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.click(screen.getByRole('button', { name: /send message/i }))
    expect(screen.getByText('Name is required.')).toBeInTheDocument()
    expect(screen.getByText('A valid email is required.')).toBeInTheDocument()
    expect(screen.getByText('Message is required.')).toBeInTheDocument()
  })

  it('shows email validation error for invalid email', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText(/your name/i), 'Jane')
    await user.type(screen.getByLabelText(/email address/i), 'notanemail')
    await user.type(screen.getByLabelText(/message/i), 'Hello')
    await user.click(screen.getByRole('button', { name: /send message/i }))
    expect(screen.getByText('A valid email is required.')).toBeInTheDocument()
  })

  it('submits successfully with valid data', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText(/your name/i), 'Jane Doe')
    await user.type(screen.getByLabelText(/email address/i), 'jane@example.com')
    await user.type(screen.getByLabelText(/subject/i), 'Hello')
    await user.type(screen.getByLabelText(/message/i), 'Test message')
    await user.click(screen.getByRole('button', { name: /send message/i }))
    expect(screen.getByText(/thank you/i)).toBeInTheDocument()
    expect(screen.getByText(/your message has been sent/i)).toBeInTheDocument()
  })

  it('marks fields as aria-invalid on error', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.click(screen.getByRole('button', { name: /send message/i }))
    expect(screen.getByLabelText(/your name/i)).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByLabelText(/email address/i)).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByLabelText(/message/i)).toHaveAttribute('aria-invalid', 'true')
  })
})
