import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  it('renders the form title and subtitle', () => {
    render(<ContactForm />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Inquire')
    expect(screen.getByText('Contact us for a custom quote')).toBeInTheDocument()
  })

  it('renders all five form fields with correct placeholders', () => {
    render(<ContactForm />)
    expect(screen.getByPlaceholderText('Your name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Email Address')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Phone Number (optional)')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Web Site (optional)')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Type your message here....')).toBeInTheDocument()
  })

  it('renders a submit button', () => {
    render(<ContactForm />)
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument()
  })

  it('accepts input in text fields', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    const nameInput = screen.getByPlaceholderText('Your name')
    await user.type(nameInput, 'John Doe')
    expect(nameInput).toHaveValue('John Doe')

    const emailInput = screen.getByPlaceholderText('Your Email Address')
    await user.type(emailInput, 'john@example.com')
    expect(emailInput).toHaveValue('john@example.com')
  })

  it('accepts input in the message textarea', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    const message = screen.getByPlaceholderText('Type your message here....')
    await user.type(message, 'Hello there!')
    expect(message).toHaveValue('Hello there!')
  })

  it('shows success message after submission', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByPlaceholderText('Your name'), 'Jane')
    await user.type(screen.getByPlaceholderText('Your Email Address'), 'jane@test.com')
    await user.type(screen.getByPlaceholderText('Type your message here....'), 'Test message')
    await user.click(screen.getByRole('button', { name: 'Submit' }))

    expect(screen.getByText(/thank you/i)).toBeInTheDocument()
  })

  it('has accessible labels via placeholders', () => {
    render(<ContactForm />)
    const nameInput = screen.getByPlaceholderText('Your name')
    expect(nameInput).toHaveAttribute('type', 'text')
    expect(nameInput).toHaveAttribute('required')

    const emailInput = screen.getByPlaceholderText('Your Email Address')
    expect(emailInput).toHaveAttribute('type', 'email')
    expect(emailInput).toHaveAttribute('required')

    const phoneInput = screen.getByPlaceholderText('Your Phone Number (optional)')
    expect(phoneInput).not.toHaveAttribute('required')

    const websiteInput = screen.getByPlaceholderText('Your Web Site (optional)')
    expect(websiteInput).not.toHaveAttribute('required')

    const messageArea = screen.getByPlaceholderText('Type your message here....')
    expect(messageArea).toHaveAttribute('required')
  })
})
