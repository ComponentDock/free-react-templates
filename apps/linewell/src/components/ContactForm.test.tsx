import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  it('renders all form fields', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<ContactForm />)
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })

  it('allows typing in Full Name field', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const input = screen.getByLabelText(/full name/i)
    await user.type(input, 'John Doe')
    expect(input).toHaveValue('John Doe')
  })

  it('allows typing in Email field', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const input = screen.getByLabelText(/email/i)
    await user.type(input, 'john@example.com')
    expect(input).toHaveValue('john@example.com')
  })

  it('allows typing in Phone field', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const input = screen.getByLabelText(/phone/i)
    await user.type(input, '5551234567')
    expect(input).toHaveValue('5551234567')
  })

  it('allows typing in Message field', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const textarea = screen.getByLabelText(/message/i)
    await user.type(textarea, 'Hello there!')
    expect(textarea).toHaveValue('Hello there!')
  })

  it('submits the form and shows thank you message', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    await user.type(screen.getByLabelText(/full name/i), 'Jane')
    await user.type(screen.getByLabelText(/email/i), 'jane@test.com')
    await user.type(screen.getByLabelText(/phone/i), '5551234')
    await user.type(screen.getByLabelText(/message/i), 'Test message')
    await user.click(screen.getByRole('button', { name: /submit/i }))
    expect(screen.getByText('Thank You!')).toBeInTheDocument()
    expect(screen.getByText(/your message has been sent/i)).toBeInTheDocument()
  })

  it('shows thank you without filling fields', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    await user.click(screen.getByRole('button', { name: /submit/i }))
    expect(screen.getByText('Thank You!')).toBeInTheDocument()
  })

  it('has placeholder text on inputs', () => {
    render(<ContactForm />)
    expect(screen.getByPlaceholderText('Join Doe')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter email address')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter phone number')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Comments...')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<ContactForm className="extra" />)
    expect(container.firstElementChild).toHaveClass('extra')
  })
})
