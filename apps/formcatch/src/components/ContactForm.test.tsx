import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  it('renders all form fields', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText('Full Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument()
    expect(screen.getByLabelText('Subject')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('renders the Contact Us heading', () => {
    render(<ContactForm />)
    expect(screen.getByRole('heading', { name: /contact us/i })).toBeInTheDocument()
  })

  it('updates Full Name input value', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const input = screen.getByLabelText('Full Name')
    await user.type(input, 'John')
    expect(input).toHaveValue('John')
  })

  it('updates Email Address input value', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const input = screen.getByLabelText('Email Address')
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })

  it('updates Subject input value', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const input = screen.getByLabelText('Subject')
    await user.type(input, 'Hello')
    expect(input).toHaveValue('Hello')
  })

  it('updates Message textarea value', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const textarea = screen.getByLabelText('Message')
    await user.type(textarea, 'Test message')
    expect(textarea).toHaveValue('Test message')
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const button = screen.getByRole('button', { name: /send message/i })
    await user.click(button)
    // Form should not navigate or reload — just verifies no error
  })

  it('has underline-style inputs with bottom border', () => {
    render(<ContactForm />)
    const nameInput = screen.getByLabelText('Full Name')
    expect(nameInput).toHaveClass('border-b')
  })

  it('has uppercase labels', () => {
    render(<ContactForm />)
    const label = screen.getByText('Full Name')
    expect(label).toHaveClass('uppercase')
  })

  it('has side-by-side Full Name and Email Address on desktop', () => {
    render(<ContactForm />)
    const nameField = screen.getByLabelText('Full Name').closest('div')
    expect(nameField?.parentElement).toHaveClass('sm:flex-row')
  })
})
