import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  it('renders all form fields', () => {
    render(<ContactForm />)

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument()
  })

  it('displays correct placeholders', () => {
    render(<ContactForm />)

    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email Address')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Write Us A Message')).toBeInTheDocument()
  })

  it('allows typing in the name field', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByLabelText(/name/i), 'Jane')
    expect(screen.getByLabelText(/name/i)).toHaveValue('Jane')
  })

  it('allows typing in the email field', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByLabelText(/email address/i), 'jane@example.com')
    expect(screen.getByLabelText(/email address/i)).toHaveValue('jane@example.com')
  })

  it('allows typing in the message field', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByLabelText(/message/i), 'Hello!')
    expect(screen.getByLabelText(/message/i)).toHaveValue('Hello!')
  })

  it('submits form with entered data', async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn()
    render(<ContactForm onSubmit={onSubmit} />)

    await user.type(screen.getByLabelText(/name/i), 'Jane Doe')
    await user.type(screen.getByLabelText(/email address/i), 'jane@example.com')
    await user.type(screen.getByLabelText(/message/i), 'Hello!')
    await user.click(screen.getByRole('button', { name: /send/i }))

    expect(onSubmit).toHaveBeenCalledWith({
      name: 'Jane Doe',
      email: 'jane@example.com',
      message: 'Hello!',
    })
  })

  it('shows success state after submission', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByLabelText(/name/i), 'Jane Doe')
    await user.type(screen.getByLabelText(/email address/i), 'jane@example.com')
    await user.type(screen.getByLabelText(/message/i), 'Hello!')
    await user.click(screen.getByRole('button', { name: /send/i }))

    expect(screen.getByTestId('success-state')).toBeInTheDocument()
    expect(screen.getByText(/thank you/i)).toBeInTheDocument()
    expect(screen.getByText(/your message has been sent/i)).toBeInTheDocument()
  })

  it('allows resetting form after submission', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    // Submit first
    await user.type(screen.getByLabelText(/name/i), 'Jane Doe')
    await user.type(screen.getByLabelText(/email address/i), 'jane@example.com')
    await user.type(screen.getByLabelText(/message/i), 'Hello!')
    await user.click(screen.getByRole('button', { name: /send/i }))

    // Reset
    await user.click(screen.getByRole('button', { name: /send another message/i }))
    expect(screen.getByTestId('contact-form')).toBeInTheDocument()
    expect(screen.getByLabelText(/name/i)).toHaveValue('')
  })

  it('requires name field', () => {
    render(<ContactForm />)

    const nameInput = screen.getByLabelText(/name/i)
    expect(nameInput).toBeRequired()
  })

  it('requires email field', () => {
    render(<ContactForm />)

    const emailInput = screen.getByLabelText(/email address/i)
    expect(emailInput).toBeRequired()
  })

  it('requires message field', () => {
    render(<ContactForm />)

    const messageInput = screen.getByLabelText(/message/i)
    expect(messageInput).toBeRequired()
  })

  it('submit button has correct type', () => {
    render(<ContactForm />)

    const button = screen.getByRole('button', { name: /send/i })
    expect(button).toHaveAttribute('type', 'submit')
  })

  it('textarea has multiple rows', () => {
    render(<ContactForm />)

    const textarea = screen.getByLabelText(/message/i)
    expect(textarea).toHaveAttribute('rows', '6')
  })
})
