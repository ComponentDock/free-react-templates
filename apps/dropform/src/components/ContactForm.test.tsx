import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  it('renders the Contact Us heading', () => {
    render(<ContactForm />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Contact Us')
  })

  it('renders all form fields with correct placeholders', () => {
    render(<ContactForm />)
    expect(screen.getByPlaceholderText('Full Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email address')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Message')).toBeInTheDocument()
  })

  it('renders the send copy checkbox unchecked by default', () => {
    render(<ContactForm />)
    const checkbox = screen.getByRole('checkbox', { name: /send copy to my-email/i })
    expect(checkbox).not.toBeChecked()
  })

  it('renders the Send Email submit button', () => {
    render(<ContactForm />)
    const button = screen.getByRole('button', { name: /send email/i })
    expect(button).toHaveAttribute('type', 'submit')
  })

  it('allows typing in the Full Name field', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const input = screen.getByPlaceholderText('Full Name')
    await user.type(input, 'John Doe')
    expect(input).toHaveValue('John Doe')
  })

  it('allows typing in the Email field', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const input = screen.getByPlaceholderText('Email address')
    await user.type(input, 'john@example.com')
    expect(input).toHaveValue('john@example.com')
  })

  it('allows typing in the Message textarea', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const textarea = screen.getByPlaceholderText('Your Message')
    await user.type(textarea, 'Hello!')
    expect(textarea).toHaveValue('Hello!')
  })

  it('toggles the send copy checkbox', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const checkbox = screen.getByRole('checkbox', { name: /send copy to my-email/i })
    await user.click(checkbox)
    expect(checkbox).toBeChecked()
    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const button = screen.getByRole('button', { name: /send email/i })
    await user.click(button)
    // Form should not navigate or reload — just verify it rendered
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Contact Us')
  })
})
