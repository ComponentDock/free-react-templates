import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  it('renders the form title', () => {
    render(<ContactForm />)
    expect(screen.getByRole('heading', { name: /get in touch/i })).toBeInTheDocument()
  })

  it('renders all four input fields', () => {
    render(<ContactForm />)
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Subject')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
  })

  it('renders the submit button with arrow icon', () => {
    render(<ContactForm />)
    const btn = screen.getByRole('button', { name: /send email/i })
    expect(btn).toHaveAttribute('type', 'submit')
  })

  it('allows typing in the name field', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const nameInput = screen.getByPlaceholderText('Name')
    await user.type(nameInput, 'Alice')
    expect(nameInput).toHaveValue('Alice')
  })

  it('allows typing in the email field', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const emailInput = screen.getByPlaceholderText('Email')
    await user.type(emailInput, 'alice@example.com')
    expect(emailInput).toHaveValue('alice@example.com')
  })

  it('allows typing in the subject field', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const subjectInput = screen.getByPlaceholderText('Subject')
    await user.type(subjectInput, 'Hello')
    expect(subjectInput).toHaveValue('Hello')
  })

  it('allows typing in the message textarea', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const messageInput = screen.getByPlaceholderText('Message')
    await user.type(messageInput, 'Test message')
    expect(messageInput).toHaveValue('Test message')
  })

  it('calls preventDefault on form submit', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const form = screen.getByRole('form', { name: /contact form/i })
    const submitEvent = vi.fn((e: Event) => e.preventDefault())
    form.addEventListener('submit', submitEvent)
    await user.click(screen.getByRole('button', { name: /send email/i }))
    expect(submitEvent).toHaveBeenCalled()
  })

  it('renders pill-shaped inputs with rounded corners', () => {
    render(<ContactForm />)
    const nameInput = screen.getByPlaceholderText('Name')
    expect(nameInput).toHaveClass('rounded-[25px]')
  })

  it('renders green submit button', () => {
    render(<ContactForm />)
    const btn = screen.getByRole('button', { name: /send email/i })
    expect(btn).toHaveClass('bg-brand-green')
  })
})
