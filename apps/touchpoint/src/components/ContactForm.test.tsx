import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  const defaultProps = {
    onSubmit: vi.fn(),
    submitted: false,
  }

  it('renders the form heading and all fields', () => {
    render(<ContactForm {...defaultProps} />)
    expect(screen.getByText('Get in touch')).toBeInTheDocument()
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Subject')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('allows typing in the name field', async () => {
    const user = userEvent.setup()
    render(<ContactForm {...defaultProps} />)
    const nameInput = screen.getByLabelText('Name')
    await user.type(nameInput, 'Alice')
    expect(nameInput).toHaveValue('Alice')
  })

  it('allows typing in the email field', async () => {
    const user = userEvent.setup()
    render(<ContactForm {...defaultProps} />)
    const emailInput = screen.getByLabelText('Email')
    await user.type(emailInput, 'alice@example.com')
    expect(emailInput).toHaveValue('alice@example.com')
  })

  it('allows typing in the subject field', async () => {
    const user = userEvent.setup()
    render(<ContactForm {...defaultProps} />)
    const subjectInput = screen.getByLabelText('Subject')
    await user.type(subjectInput, 'Hello')
    expect(subjectInput).toHaveValue('Hello')
  })

  it('allows typing in the message textarea', async () => {
    const user = userEvent.setup()
    render(<ContactForm {...defaultProps} />)
    const messageInput = screen.getByLabelText('Message')
    await user.type(messageInput, 'Test message')
    expect(messageInput).toHaveValue('Test message')
  })

  it('shows validation errors when submitting empty form', async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn()
    render(<ContactForm onSubmit={onSubmit} submitted={false} />)
    await user.click(screen.getByRole('button', { name: /send message/i }))
    expect(screen.getByText('Name is required')).toBeInTheDocument()
    expect(screen.getByText('Email is required')).toBeInTheDocument()
    expect(screen.getByText('Subject is required')).toBeInTheDocument()
    expect(screen.getByText('Message is required')).toBeInTheDocument()
    expect(onSubmit).not.toHaveBeenCalled()
  })

  it('shows email validation error for invalid email', async () => {
    const user = userEvent.setup()
    render(<ContactForm {...defaultProps} />)
    await user.type(screen.getByLabelText('Name'), 'Alice')
    await user.type(screen.getByLabelText('Email'), 'not-an-email')
    await user.type(screen.getByLabelText('Subject'), 'Hi')
    await user.type(screen.getByLabelText('Message'), 'Hello')
    await user.click(screen.getByRole('button', { name: /send message/i }))
    expect(screen.getByText('Invalid email format')).toBeInTheDocument()
  })

  it('calls onSubmit when all fields are valid', async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn()
    render(<ContactForm onSubmit={onSubmit} submitted={false} />)
    await user.type(screen.getByLabelText('Name'), 'Alice')
    await user.type(screen.getByLabelText('Email'), 'alice@example.com')
    await user.type(screen.getByLabelText('Subject'), 'Hi')
    await user.type(screen.getByLabelText('Message'), 'Hello there')
    await user.click(screen.getByRole('button', { name: /send message/i }))
    expect(onSubmit).toHaveBeenCalledTimes(1)
  })

  it('shows thank you message when submitted is true', () => {
    render(<ContactForm {...defaultProps} submitted={true} />)
    expect(screen.getByText('Thank you!')).toBeInTheDocument()
    expect(screen.getByText('Your message has been sent successfully.')).toBeInTheDocument()
  })

  it('does not show form fields when submitted', () => {
    render(<ContactForm {...defaultProps} submitted={true} />)
    expect(screen.queryByLabelText('Name')).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: /send message/i })).not.toBeInTheDocument()
  })
})
