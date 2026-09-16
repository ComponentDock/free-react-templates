import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  it('renders all form fields with labels', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<ContactForm />)
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('updates name field on input', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const input = screen.getByLabelText(/full name/i)
    await user.type(input, 'Alice')
    expect(input).toHaveValue('Alice')
  })

  it('updates email field on input', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const input = screen.getByLabelText(/email address/i)
    await user.type(input, 'alice@test.com')
    expect(input).toHaveValue('alice@test.com')
  })

  it('updates subject field on input', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const input = screen.getByLabelText(/subject/i)
    await user.type(input, 'Hello')
    expect(input).toHaveValue('Hello')
  })

  it('updates message field on input', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const textarea = screen.getByLabelText(/message/i)
    await user.type(textarea, 'Test message')
    expect(textarea).toHaveValue('Test message')
  })

  it('handles form submission without error', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    await user.type(screen.getByLabelText(/full name/i), 'Bob')
    await user.type(screen.getByLabelText(/email address/i), 'bob@test.com')
    await user.type(screen.getByLabelText(/subject/i), 'Hi')
    await user.type(screen.getByLabelText(/message/i), 'Hello')
    await user.click(screen.getByRole('button', { name: /send message/i }))
  })
})
