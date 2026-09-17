import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  it('renders all form elements', () => {
    render(<ContactForm />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Get in Touch')
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Phone')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your message...')).toBeInTheDocument()
    expect(screen.getByRole('checkbox', { name: /send copy to my-email/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send email/i })).toBeInTheDocument()
  })

  it('submits successfully with valid data', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByPlaceholderText('Name'), 'John Doe')
    await user.type(screen.getByPlaceholderText('Email'), 'john@example.com')
    await user.type(screen.getByPlaceholderText('Phone'), '555-1234')
    await user.type(screen.getByPlaceholderText('Your message...'), 'Hello!')
    await user.click(screen.getByRole('button', { name: /send email/i }))

    expect(screen.getByRole('status')).toHaveTextContent('Thank you! Your message has been sent.')
  })

  it('shows validation errors when submitting empty form', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.click(screen.getByRole('button', { name: /send email/i }))

    expect(screen.getByText('Name is required')).toBeInTheDocument()
    expect(screen.getByText('Valid email is required: ex@abc.xyz')).toBeInTheDocument()
    expect(screen.getByText('Phone is required')).toBeInTheDocument()
    expect(screen.getByText('Message is required')).toBeInTheDocument()
  })

  it('shows email validation error for invalid email', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByPlaceholderText('Name'), 'John')
    await user.type(screen.getByPlaceholderText('Email'), 'invalid-email')
    await user.type(screen.getByPlaceholderText('Phone'), '555-1234')
    await user.type(screen.getByPlaceholderText('Your message...'), 'Hi')
    await user.click(screen.getByRole('button', { name: /send email/i }))

    expect(screen.getByText('Valid email is required: ex@abc.xyz')).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('clears field error when user types', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.click(screen.getByRole('button', { name: /send email/i }))
    expect(screen.getByText('Name is required')).toBeInTheDocument()

    await user.type(screen.getByPlaceholderText('Name'), 'John')
    expect(screen.queryByText('Name is required')).not.toBeInTheDocument()
  })

  it('toggles checkbox', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    const checkbox = screen.getByRole('checkbox', { name: /send copy to my-email/i })
    expect(checkbox).not.toBeChecked()

    await user.click(checkbox)
    expect(checkbox).toBeChecked()

    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('has accessible form label', () => {
    render(<ContactForm />)
    expect(screen.getByRole('form', { name: /contact form/i })).toBeInTheDocument()
  })

  it('sets aria-invalid on fields with errors', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.click(screen.getByRole('button', { name: /send email/i }))

    expect(screen.getByPlaceholderText('Name')).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByPlaceholderText('Email')).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByPlaceholderText('Phone')).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByPlaceholderText('Your message...')).toHaveAttribute('aria-invalid', 'true')
  })
})
