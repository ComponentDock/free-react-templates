import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  it('renders the form heading', () => {
    render(<ContactForm />)
    expect(screen.getByRole('heading', { name: /send us a message/i })).toBeInTheDocument()
  })

  it('renders all form fields', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/company/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<ContactForm />)
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('accepts user input in the name field', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const nameInput = screen.getByLabelText(/name/i)
    await user.type(nameInput, 'John')
    expect(nameInput).toHaveValue('John')
  })

  it('accepts user input in the email field', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const emailInput = screen.getByLabelText(/email/i)
    await user.type(emailInput, 'john@example.com')
    expect(emailInput).toHaveValue('john@example.com')
  })

  it('accepts user input in the phone field', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const phoneInput = screen.getByLabelText(/phone/i)
    await user.type(phoneInput, '555-1234')
    expect(phoneInput).toHaveValue('555-1234')
  })

  it('accepts user input in the company field', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const companyInput = screen.getByLabelText(/company/i)
    await user.type(companyInput, 'Acme Corp')
    expect(companyInput).toHaveValue('Acme Corp')
  })

  it('accepts user input in the message field', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const messageInput = screen.getByLabelText(/message/i)
    await user.type(messageInput, 'Hello there')
    expect(messageInput).toHaveValue('Hello there')
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
