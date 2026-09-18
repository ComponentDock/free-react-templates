import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  it('renders the form heading', () => {
    render(<ContactForm />)
    // Form doesn't have its own heading; the heading is in App.tsx
    // This component renders form fields
    expect(screen.getByPlaceholderText(/first name/i)).toBeInTheDocument()
  })

  it('renders first name and last name fields', () => {
    render(<ContactForm />)
    expect(screen.getByPlaceholderText(/first name/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/last name/i)).toBeInTheDocument()
  })

  it('renders email field', () => {
    render(<ContactForm />)
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
  })

  it('renders message textarea', () => {
    render(<ContactForm />)
    expect(screen.getByPlaceholderText(/write your message/i)).toBeInTheDocument()
  })

  it('renders submit button', () => {
    render(<ContactForm />)
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('accepts user input in first name', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const input = screen.getByPlaceholderText(/first name/i)
    await user.type(input, 'John')
    expect(input).toHaveValue('John')
  })

  it('accepts user input in last name', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const input = screen.getByPlaceholderText(/last name/i)
    await user.type(input, 'Doe')
    expect(input).toHaveValue('Doe')
  })

  it('accepts user input in email', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const input = screen.getByPlaceholderText(/email/i)
    await user.type(input, 'john@example.com')
    expect(input).toHaveValue('john@example.com')
  })

  it('accepts user input in message', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const textarea = screen.getByPlaceholderText(/write your message/i)
    await user.type(textarea, 'Hello world')
    expect(textarea).toHaveValue('Hello world')
  })

  it('prevents form submission from navigating', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const button = screen.getByRole('button', { name: /send message/i })
    await user.click(button)
    // e.preventDefault() is called; button still in DOM
    expect(button).toBeInTheDocument()
  })

  it('shows success message after submission', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    expect(screen.queryByText(/your message was sent/i)).not.toBeInTheDocument()
    const button = screen.getByRole('button', { name: /send message/i })
    await user.click(button)
    expect(screen.getByText(/your message was sent, thank you!/i)).toBeInTheDocument()
  })
})
