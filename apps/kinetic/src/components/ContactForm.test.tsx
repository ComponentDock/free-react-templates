import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactForm } from './ContactForm'
import { describe, expect, it } from 'vitest'

describe('ContactForm', () => {
  it('renders contact form heading', () => {
    render(<ContactForm />)
    expect(screen.getByText('Keep in Touch')).toBeInTheDocument()
  })

  it('renders name, email, and message inputs', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText(/your name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/your email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/your message/i)).toBeInTheDocument()
  })

  it('renders Send Message button', () => {
    render(<ContactForm />)
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('allows typing in all fields', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    await user.type(screen.getByLabelText(/your name/i), 'John')
    await user.type(screen.getByLabelText(/your email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/your message/i), 'Hello')
    expect(screen.getByLabelText(/your name/i)).toHaveValue('John')
    expect(screen.getByLabelText(/your email/i)).toHaveValue('john@example.com')
    expect(screen.getByLabelText(/your message/i)).toHaveValue('Hello')
  })

  it('submits form without page reload', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    await user.type(screen.getByLabelText(/your name/i), 'John')
    await user.click(screen.getByRole('button', { name: /send message/i }))
    // Form should still be present (no navigation)
    expect(screen.getByLabelText(/your name/i)).toBeInTheDocument()
  })
})
