import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Contact from './Contact'

describe('Contact', () => {
  it('renders the contact heading', () => {
    render(<Contact />)
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
  })

  it('renders the contact form with fields', () => {
    render(<Contact />)

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Contact />)

    expect(screen.getByText('info@yourdomain.com')).toBeInTheDocument()
    expect(screen.getByText('+12 345 6789 012')).toBeInTheDocument()
    expect(screen.getByText(/273 South Riverview Rd/)).toBeInTheDocument()
    // Address line 2 is split by <br>, use regex
    expect(screen.getByText(/New York, NY 10011/)).toBeInTheDocument()
  })

  it('shows success message on form submit', async () => {
    const { default: userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByLabelText(/name/i), 'John Doe')
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/message/i), 'Hello!')
    await user.click(screen.getByRole('button', { name: /send message/i }))

    expect(screen.getByText('Your message was sent, thank you!')).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: /send message/i })).not.toBeInTheDocument()
  })
})
