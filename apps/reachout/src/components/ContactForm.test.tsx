import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  it('renders the Send us a message heading', () => {
    render(<ContactForm />)
    expect(screen.getByRole('heading', { name: /send us a message/i })).toBeInTheDocument()
  })

  it('renders the Name field', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
  })

  it('renders the Email field', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
  })

  it('renders the Message field', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
  })

  it('renders the Send Message button', () => {
    render(<ContactForm />)
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('renders the textarea with adequate rows', () => {
    render(<ContactForm />)
    const textarea = screen.getByLabelText(/message/i)
    expect(textarea.tagName).toBe('TEXTAREA')
    expect(textarea).toHaveAttribute('rows', '7')
  })

  it('allows typing in the name field', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    await user.type(screen.getByLabelText(/name/i), 'John Doe')
    expect(screen.getByLabelText(/name/i)).toHaveValue('John Doe')
  })

  it('allows typing in the email field', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    expect(screen.getByLabelText(/email/i)).toHaveValue('john@example.com')
  })

  it('allows typing in the message field', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    await user.type(screen.getByLabelText(/message/i), 'Hello there')
    expect(screen.getByLabelText(/message/i)).toHaveValue('Hello there')
  })

  it('submits without error', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    await user.click(screen.getByRole('button', { name: /send message/i }))
  })
})
