import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  it('renders all four form fields', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText(/your name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/your email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/your phone/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/your message/i)).toBeInTheDocument()
  })

  it('renders the send now button', () => {
    render(<ContactForm />)
    expect(screen.getByRole('button', { name: /send now/i })).toBeInTheDocument()
  })

  it('allows typing in the name field', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const nameInput = screen.getByLabelText(/your name/i)
    await user.type(nameInput, 'Alice')
    expect(nameInput).toHaveValue('Alice')
  })

  it('allows typing in the email field', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const emailInput = screen.getByLabelText(/your email/i)
    await user.type(emailInput, 'alice@example.com')
    expect(emailInput).toHaveValue('alice@example.com')
  })

  it('allows typing in the phone field', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const phoneInput = screen.getByLabelText(/your phone/i)
    await user.type(phoneInput, '555-1234')
    expect(phoneInput).toHaveValue('555-1234')
  })

  it('allows typing in the message field', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const messageInput = screen.getByLabelText(/your message/i)
    await user.type(messageInput, 'Hello there')
    expect(messageInput).toHaveValue('Hello there')
  })

  it('shows sent state after submission', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    await user.click(screen.getByRole('button', { name: /send now/i }))
    expect(screen.getByRole('button', { name: /sent!/i })).toBeDisabled()
  })

  it('disables the submit button after first submission', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const button = screen.getByRole('button', { name: /send now/i })
    await user.click(button)
    expect(button).toBeDisabled()
  })
})
