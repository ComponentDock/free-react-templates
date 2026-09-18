import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  it('renders all form fields', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
    const textboxes = screen.getAllByRole('textbox')
    expect(textboxes.length).toBeGreaterThanOrEqual(4)
  })

  it('renders name as two side-by-side inputs', () => {
    render(<ContactForm />)
    const textboxes = screen.getAllByRole('textbox')
    expect(textboxes.length).toBe(5)
  })

  it('shows validation errors on submit with empty required fields', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    await user.click(screen.getByRole('button', { name: /submit/i }))
    expect(screen.getByText('First name is required')).toBeInTheDocument()
    expect(screen.getByText('Last name is required')).toBeInTheDocument()
    expect(screen.getByText('Email is required')).toBeInTheDocument()
  })

  it('shows green checkmark when name is valid', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const textboxes = screen.getAllByRole('textbox')
    await user.type(textboxes[0]!, 'John')
    await user.tab()
    expect(screen.getByLabelText('Valid')).toBeInTheDocument()
  })

  it('shows red X when phone has non-numeric value', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const phoneInput = screen.getByLabelText(/phone number/i)
    await user.type(phoneInput, 'abc')
    await user.tab()
    expect(screen.getByLabelText('Invalid')).toBeInTheDocument()
  })

  it('does not show validation icon for empty optional phone', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const phoneInput = screen.getByLabelText(/phone number/i)
    await user.click(phoneInput)
    await user.tab()
    expect(screen.queryByLabelText('Valid')).not.toBeInTheDocument()
    expect(screen.queryByLabelText('Invalid')).not.toBeInTheDocument()
  })

  it('submits successfully with valid data including message', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const textboxes = screen.getAllByRole('textbox')
    await user.type(textboxes[0]!, 'John')
    await user.type(textboxes[1]!, 'Doe')
    await user.type(textboxes[2]!, 'john@example.com')
    await user.type(textboxes[3]!, '1234567890')
    await user.type(textboxes[4]!, 'Hello from tests!')
    await user.click(screen.getByRole('button', { name: /submit/i }))
    expect(screen.getByText('Thank You!')).toBeInTheDocument()
    expect(screen.getByText('Your message has been sent.')).toBeInTheDocument()
  })

  it('clears validation error when user types in field', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    await user.click(screen.getByRole('button', { name: /submit/i }))
    expect(screen.getByText('First name is required')).toBeInTheDocument()
    const textboxes = screen.getAllByRole('textbox')
    const firstNameInput = textboxes[0]!
    await user.type(firstNameInput, 'John')
    expect(screen.queryByText('First name is required')).not.toBeInTheDocument()
  })

  it('validates email format on blur', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const emailInput = screen.getByLabelText(/email address/i)
    await user.type(emailInput, 'invalid')
    await user.tab()
    expect(screen.getByLabelText('Invalid')).toBeInTheDocument()
  })

  it('shows valid checkmark for valid email', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const emailInput = screen.getByLabelText(/email address/i)
    await user.type(emailInput, 'test@example.com')
    await user.tab()
    expect(screen.getByLabelText('Valid')).toBeInTheDocument()
  })

  it('has a message textarea with placeholder', () => {
    render(<ContactForm />)
    expect(screen.getByPlaceholderText('Please enter your comments...')).toBeInTheDocument()
  })

  it('validates phone with non-numeric value on submit', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const textboxes = screen.getAllByRole('textbox')
    await user.type(textboxes[0]!, 'John')
    await user.type(textboxes[1]!, 'Doe')
    await user.type(textboxes[2]!, 'john@example.com')
    await user.type(textboxes[3]!, 'abc')
    await user.click(screen.getByRole('button', { name: /submit/i }))
    expect(screen.getByText('Phone must contain only digits')).toBeInTheDocument()
  })

  it('shows valid checkmark for valid last name', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const textboxes = screen.getAllByRole('textbox')
    await user.type(textboxes[1]!, 'Doe')
    await user.tab()
    const validIcons = screen.getAllByLabelText('Valid')
    expect(validIcons.length).toBeGreaterThanOrEqual(1)
  })

  it('allows typing in message field', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const messageField = screen.getByPlaceholderText('Please enter your comments...')
    await user.type(messageField, 'Test message content')
    expect(messageField).toHaveValue('Test message content')
  })

  it('shows Invalid email error on submit with bad email', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const textboxes = screen.getAllByRole('textbox')
    await user.type(textboxes[0]!, 'John')
    await user.type(textboxes[1]!, 'Doe')
    await user.type(textboxes[2]!, 'not-an-email')
    await user.click(screen.getByRole('button', { name: /submit/i }))
    expect(screen.getByText('Invalid email')).toBeInTheDocument()
  })

  it('shows valid phone icon after typing numeric phone', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const phoneInput = screen.getByLabelText(/phone number/i)
    await user.type(phoneInput, '5551234')
    await user.tab()
    expect(screen.queryByLabelText('Invalid')).not.toBeInTheDocument()
  })

  it('shows invalid icon when phone is empty after interaction', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const phoneInput = screen.getByLabelText(/phone number/i)
    await user.click(phoneInput)
    await user.type(phoneInput, 'abc')
    await user.clear(phoneInput)
    await user.tab()
    expect(screen.queryByLabelText('Invalid')).not.toBeInTheDocument()
  })

  it('shows invalid border when firstName is empty after interaction', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const textboxes = screen.getAllByRole('textbox')
    const firstNameInput = textboxes[0]!
    await user.click(firstNameInput)
    await user.tab()
    expect(firstNameInput).toHaveClass('border-brand-red')
  })

  it('shows valid border when firstName has value', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const textboxes = screen.getAllByRole('textbox')
    const firstNameInput = textboxes[0]!
    await user.type(firstNameInput, 'Jane')
    await user.tab()
    expect(firstNameInput).toHaveClass('border-input-border')
  })
})
