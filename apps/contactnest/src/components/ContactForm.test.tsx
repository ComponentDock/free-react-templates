import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  it('renders all form fields and submit button', () => {
    render(<ContactForm />)

    expect(screen.getByLabelText('Your Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })

  it('renders placeholders in inputs', () => {
    render(<ContactForm />)

    expect(screen.getByPlaceholderText('John Doe')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter your email address')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your message here...')).toBeInTheDocument()
  })

  it('calls onSubmit with form data when submitted', async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn()
    render(<ContactForm onSubmit={onSubmit} />)

    await user.type(screen.getByLabelText('Your Name'), 'Alice')
    await user.type(screen.getByLabelText('Email'), 'alice@test.com')
    await user.type(screen.getByLabelText('Message'), 'Hello world')
    await user.click(screen.getByRole('button', { name: /submit/i }))

    expect(onSubmit).toHaveBeenCalledWith({
      name: 'Alice',
      email: 'alice@test.com',
      message: 'Hello world',
    })
  })

  it('shows success message after submission', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByLabelText('Your Name'), 'Bob')
    await user.type(screen.getByLabelText('Email'), 'bob@test.com')
    await user.type(screen.getByLabelText('Message'), 'Test')
    await user.click(screen.getByRole('button', { name: /submit/i }))

    expect(screen.getByText('Thank you!')).toBeInTheDocument()
    expect(screen.getByText('Your message has been sent.')).toBeInTheDocument()
  })

  it('clears form fields after submission', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByLabelText('Your Name'), 'Bob')
    await user.type(screen.getByLabelText('Email'), 'bob@test.com')
    await user.type(screen.getByLabelText('Message'), 'Test')
    await user.click(screen.getByRole('button', { name: /submit/i }))

    // After success, form fields should not be visible
    expect(screen.queryByLabelText('Your Name')).not.toBeInTheDocument()
  })

  it('allows sending another message after submission', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByLabelText('Your Name'), 'Bob')
    await user.type(screen.getByLabelText('Email'), 'bob@test.com')
    await user.type(screen.getByLabelText('Message'), 'Test')
    await user.click(screen.getByRole('button', { name: /submit/i }))

    // Click "Send another message"
    await user.click(screen.getByText('Send another message'))

    // Form should reappear
    expect(screen.getByLabelText('Your Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
  })

  it('does not call onSubmit when not provided', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByLabelText('Your Name'), 'Eve')
    await user.type(screen.getByLabelText('Email'), 'eve@test.com')
    await user.type(screen.getByLabelText('Message'), 'No handler')
    await user.click(screen.getByRole('button', { name: /submit/i }))

    // Should still show success
    expect(screen.getByText('Thank you!')).toBeInTheDocument()
  })
})
