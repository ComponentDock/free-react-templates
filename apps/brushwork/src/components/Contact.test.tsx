import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the heading, contact details and form', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: /Contact Us/i })).toBeInTheDocument()
    expect(screen.getByText('hello@brushwork.com')).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
    expect(screen.getByLabelText(/Your Name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Your Email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument()
  })

  it('validates required fields on submit', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.click(screen.getByRole('button', { name: /Send Message/i }))
    expect(screen.getByRole('alert')).toHaveTextContent(/Name is required/i)
  })

  it('validates email format', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText(/Your Name/i), 'Jane')
    await user.type(screen.getByLabelText(/Your Email/i), 'not-an-email')
    await user.type(screen.getByLabelText(/Message/i), 'Hello')
    await user.click(screen.getByRole('button', { name: /Send Message/i }))
    expect(screen.getByRole('alert')).toHaveTextContent(/valid email/i)
  })

  it('validates message is required', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText(/Your Name/i), 'Jane')
    await user.type(screen.getByLabelText(/Your Email/i), 'jane@example.com')
    await user.click(screen.getByRole('button', { name: /Send Message/i }))
    expect(screen.getByRole('alert')).toHaveTextContent(/Message is required/i)
  })

  it('submits successfully with valid data', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText(/Your Name/i), 'Jane')
    await user.type(screen.getByLabelText(/Your Email/i), 'jane@example.com')
    await user.type(screen.getByLabelText(/Message/i), 'Hello!')
    await user.click(screen.getByRole('button', { name: /Send Message/i }))
    expect(screen.getByText(/Thank you for your message/i)).toBeInTheDocument()
  })
})
