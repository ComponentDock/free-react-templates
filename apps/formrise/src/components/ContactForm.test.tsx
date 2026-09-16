import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  it('renders all form fields', () => {
    render(<ContactForm />)
    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/subject/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/message/i)).toBeInTheDocument()
  })

  it('renders the Send Message button', () => {
    render(<ContactForm />)
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('renders the Write us heading', () => {
    render(<ContactForm />)
    expect(screen.getByRole('heading', { name: /write us/i })).toBeInTheDocument()
  })

  it('renders underline-style inputs with dark background styling', () => {
    const { container } = render(<ContactForm />)
    const inputs = container.querySelectorAll('input')
    expect(inputs.length).toBe(3)
    for (const input of inputs) {
      expect(input).toHaveClass('border-b')
    }
  })

  it('renders a textarea for message', () => {
    render(<ContactForm />)
    const textarea = screen.getByPlaceholderText(/message/i)
    expect(textarea.tagName).toBe('TEXTAREA')
  })

  it('updates name field on input', async () => {
    const user = (await import('@testing-library/user-event')).default.setup()
    render(<ContactForm />)
    const input = screen.getByPlaceholderText(/name/i)
    await user.type(input, 'Alice')
    expect(input).toHaveValue('Alice')
  })

  it('updates email field on input', async () => {
    const user = (await import('@testing-library/user-event')).default.setup()
    render(<ContactForm />)
    const input = screen.getByPlaceholderText(/email/i)
    await user.type(input, 'alice@test.com')
    expect(input).toHaveValue('alice@test.com')
  })

  it('updates subject field on input', async () => {
    const user = (await import('@testing-library/user-event')).default.setup()
    render(<ContactForm />)
    const input = screen.getByPlaceholderText(/subject/i)
    await user.type(input, 'Hello')
    expect(input).toHaveValue('Hello')
  })

  it('updates message field on textarea', async () => {
    const user = (await import('@testing-library/user-event')).default.setup()
    render(<ContactForm />)
    const textarea = screen.getByPlaceholderText(/message/i)
    await user.type(textarea, 'Test message')
    expect(textarea).toHaveValue('Test message')
  })

  it('handles form submission without error', async () => {
    const user = (await import('@testing-library/user-event')).default.setup()
    render(<ContactForm />)
    await user.type(screen.getByPlaceholderText(/name/i), 'Bob')
    await user.type(screen.getByPlaceholderText(/email/i), 'bob@test.com')
    await user.type(screen.getByPlaceholderText(/subject/i), 'Hi')
    await user.type(screen.getByPlaceholderText(/message/i), 'Hello')
    await user.click(screen.getByRole('button', { name: /send message/i }))
  })

  it('button has orange background styling', () => {
    render(<ContactForm />)
    const button = screen.getByRole('button', { name: /send message/i })
    expect(button).toHaveClass('bg-brand-orange')
  })
})
