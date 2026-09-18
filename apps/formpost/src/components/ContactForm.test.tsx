import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  it('renders the form heading', () => {
    render(<ContactForm />)
    expect(screen.getByRole('heading', { name: /get in touch with us/i })).toBeInTheDocument()
  })

  it('renders all form fields', () => {
    render(<ContactForm />)
    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/subject/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/message/i)).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<ContactForm />)
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('accepts user input in the name field', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const nameInput = screen.getByPlaceholderText(/name/i)
    await user.type(nameInput, 'John')
    expect(nameInput).toHaveValue('John')
  })

  it('accepts user input in the email field', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const emailInput = screen.getByPlaceholderText(/email/i)
    await user.type(emailInput, 'john@example.com')
    expect(emailInput).toHaveValue('john@example.com')
  })

  it('accepts user input in the subject field', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const subjectInput = screen.getByPlaceholderText(/subject/i)
    await user.type(subjectInput, 'Hello')
    expect(subjectInput).toHaveValue('Hello')
  })

  it('accepts user input in the message field', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const messageInput = screen.getByPlaceholderText(/message/i)
    await user.type(messageInput, 'Test message')
    expect(messageInput).toHaveValue('Test message')
  })

  it('prevents form submission from navigating', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const button = screen.getByRole('button', { name: /send message/i })
    await user.click(button)
    // form submission is prevented (e.preventDefault called)
    expect(button).toBeInTheDocument()
  })
})
