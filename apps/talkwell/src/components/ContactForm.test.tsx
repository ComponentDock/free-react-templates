import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  it('renders all form fields', () => {
    render(<ContactForm />)

    expect(screen.getByRole('heading', { name: /let's talk/i })).toBeInTheDocument()

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('accepts input in all fields', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByLabelText(/name/i), 'John Doe')
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/subject/i), 'Hello')
    await user.type(screen.getByLabelText(/message/i), 'Test message')

    expect(screen.getByLabelText(/name/i)).toHaveValue('John Doe')
    expect(screen.getByLabelText(/email/i)).toHaveValue('john@example.com')
    expect(screen.getByLabelText(/subject/i)).toHaveValue('Hello')
    expect(screen.getByLabelText(/message/i)).toHaveValue('Test message')
  })

  it('shows success message after submit', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByLabelText(/name/i), 'John Doe')
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/subject/i), 'Hello')
    await user.type(screen.getByLabelText(/message/i), 'Test message')
    await user.click(screen.getByRole('button', { name: /send message/i }))

    expect(screen.getByText(/your message was sent, thank you!/i)).toBeInTheDocument()
    expect(screen.queryByRole('form')).not.toBeInTheDocument()
  })
})
