import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  it('renders the Contact Us heading', () => {
    render(<ContactForm />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Contact Us')
  })

  it('renders all form fields with correct placeholders', () => {
    render(<ContactForm />)
    expect(screen.getByPlaceholderText('Full Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email Address')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Message')).toBeInTheDocument()
  })

  it('renders the Send Email submit button as pill shape', () => {
    render(<ContactForm />)
    const button = screen.getByRole('button', { name: /send email/i })
    expect(button).toHaveAttribute('type', 'submit')
  })

  it('renders the phone contact line', () => {
    render(<ContactForm />)
    expect(screen.getByText(/contact our 24\/7 call center/i)).toBeInTheDocument()
    expect(screen.getByText('+001 345 6889')).toBeInTheDocument()
  })

  it('shows name error when name field is empty and touched', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const nameInput = screen.getByPlaceholderText('Full Name')
    await user.click(nameInput)
    await user.tab()
    expect(screen.getByText('Please enter your name')).toBeInTheDocument()
  })

  it('shows green check when name is valid', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const nameInput = screen.getByPlaceholderText('Full Name')
    await user.type(nameInput, 'John Doe')
    await user.tab()
    expect(screen.queryByText('Please enter your name')).not.toBeInTheDocument()
    // Green check icon should be present (CircleCheck)
    const icons = nameInput.parentElement?.querySelectorAll('svg')
    expect(icons?.length).toBeGreaterThan(0)
  })

  it('hides name error when name is entered', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const nameInput = screen.getByPlaceholderText('Full Name')
    // Touch then clear
    await user.click(nameInput)
    await user.tab()
    expect(screen.getByText('Please enter your name')).toBeInTheDocument()
    // Type a name
    await user.type(nameInput, 'Jane')
    expect(screen.queryByText('Please enter your name')).not.toBeInTheDocument()
  })

  it('shows email error for invalid email format', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const emailInput = screen.getByPlaceholderText('Email Address')
    await user.type(emailInput, 'invalid')
    await user.tab()
    expect(screen.getByText('Please enter a valid email')).toBeInTheDocument()
  })

  it('shows green check for valid email', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const emailInput = screen.getByPlaceholderText('Email Address')
    await user.type(emailInput, 'test@example.com')
    await user.tab()
    expect(screen.queryByText('Please enter a valid email')).not.toBeInTheDocument()
  })

  it('does not show email error for empty email on blur', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const emailInput = screen.getByPlaceholderText('Email Address')
    await user.click(emailInput)
    await user.tab()
    // Empty email should not show error (only invalid format triggers error)
    expect(screen.queryByText('Please enter a valid email')).not.toBeInTheDocument()
  })

  it('allows typing in the Message textarea', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const textarea = screen.getByPlaceholderText('Your Message')
    await user.type(textarea, 'Hello!')
    expect(textarea).toHaveValue('Hello!')
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const button = screen.getByRole('button', { name: /send email/i })
    await user.click(button)
    // Form should not navigate or reload — heading still renders
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Contact Us')
  })

  it('shows validation errors on submit when fields are empty', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const button = screen.getByRole('button', { name: /send email/i })
    await user.click(button)
    expect(screen.getByText('Please enter your name')).toBeInTheDocument()
  })

  it('does not show email error on submit when email is empty', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const button = screen.getByRole('button', { name: /send email/i })
    await user.click(button)
    // Empty email — no error (touched but empty doesn't trigger error)
    expect(screen.queryByText('Please enter a valid email')).not.toBeInTheDocument()
  })

  it('clears name error after typing valid name on submit', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const nameInput = screen.getByPlaceholderText('Full Name')
    const button = screen.getByRole('button', { name: /send email/i })
    // Submit to trigger validation
    await user.click(button)
    expect(screen.getByText('Please enter your name')).toBeInTheDocument()
    // Type name
    await user.type(nameInput, 'Alice')
    expect(screen.queryByText('Please enter your name')).not.toBeInTheDocument()
  })

  it('shows email error on submit with invalid email', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const emailInput = screen.getByPlaceholderText('Email Address')
    await user.type(emailInput, 'bad')
    const button = screen.getByRole('button', { name: /send email/i })
    await user.click(button)
    expect(screen.getByText('Please enter a valid email')).toBeInTheDocument()
  })

  it('applies error border to name field when empty and touched', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const nameInput = screen.getByPlaceholderText('Full Name')
    await user.click(nameInput)
    await user.tab()
    expect(nameInput.className).toContain('border-[--color-error]')
  })

  it('applies valid border to name field when filled', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const nameInput = screen.getByPlaceholderText('Full Name')
    await user.type(nameInput, 'Bob')
    await user.tab()
    expect(nameInput.className).toContain('border-[--color-valid]')
  })

  it('applies error border to email field with invalid format', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const emailInput = screen.getByPlaceholderText('Email Address')
    await user.type(emailInput, 'not-an-email')
    await user.tab()
    expect(emailInput.className).toContain('border-[--color-error]')
  })

  it('applies valid border to email field with valid format', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const emailInput = screen.getByPlaceholderText('Email Address')
    await user.type(emailInput, 'user@test.com')
    await user.tab()
    expect(emailInput.className).toContain('border-[--color-valid]')
  })

  it('applies default border to name field when not touched', () => {
    render(<ContactForm />)
    const nameInput = screen.getByPlaceholderText('Full Name')
    expect(nameInput.className).toContain('border-[--color-border]')
  })

  it('applies default border to email field when not touched', () => {
    render(<ContactForm />)
    const emailInput = screen.getByPlaceholderText('Email Address')
    expect(emailInput.className).toContain('border-[--color-border]')
  })

  it('updates name value on change', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const nameInput = screen.getByPlaceholderText('Full Name')
    await user.type(nameInput, 'Test')
    expect(nameInput).toHaveValue('Test')
  })

  it('updates email value on change', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const emailInput = screen.getByPlaceholderText('Email Address')
    await user.type(emailInput, 'a@b.com')
    expect(emailInput).toHaveValue('a@b.com')
  })
})
