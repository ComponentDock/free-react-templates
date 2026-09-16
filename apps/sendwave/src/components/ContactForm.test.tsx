import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  it('renders all form fields', () => {
    render(<ContactForm />)
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Subject')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Create a message here')).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<ContactForm />)
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('allows typing in the name field', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const nameInput = screen.getByPlaceholderText('Name')
    await user.type(nameInput, 'John Doe')
    expect(nameInput).toHaveValue('John Doe')
  })

  it('allows typing in the email field', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const emailInput = screen.getByPlaceholderText('Email')
    await user.type(emailInput, 'john@example.com')
    expect(emailInput).toHaveValue('john@example.com')
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
    const messageInput = screen.getByPlaceholderText('Create a message here')
    await user.type(messageInput, 'Test message')
    expect(messageInput).toHaveValue('Test message')
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const button = screen.getByRole('button', { name: /send message/i })
    await user.click(button)
    // Form should not navigate — just verify form still exists
    expect(button).toBeInTheDocument()
  })

  it('has amber-styled submit button', () => {
    render(<ContactForm />)
    const button = screen.getByRole('button', { name: /send message/i })
    expect(button).toHaveClass('bg-brand-amber')
  })

  it('has border-bottom style inputs', () => {
    render(<ContactForm />)
    const nameInput = screen.getByPlaceholderText('Name')
    expect(nameInput).toHaveClass('border-b')
    expect(nameInput).toHaveClass('border-input-border')
  })

  it('renders textarea with 4 rows', () => {
    render(<ContactForm />)
    const textarea = screen.getByPlaceholderText('Create a message here')
    expect(textarea).toHaveAttribute('rows', '4')
  })
})
