import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SignupForm } from './SignupForm'

describe('SignupForm', () => {
  it('renders all seven input fields with correct placeholders', () => {
    render(<SignupForm />)
    expect(screen.getByPlaceholderText('e.g. John')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('e.g. Smith')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('e.g. john@your-domain.com')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('+00 0000 000 0000')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('e.g. https://google.com')).toBeInTheDocument()
    // Two password fields with same placeholder
    const passwordFields = screen.getAllByPlaceholderText('Your Password')
    expect(passwordFields).toHaveLength(2)
  })

  it('renders the Register heading', () => {
    render(<SignupForm />)
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Register')
  })

  it('renders the subtitle text', () => {
    render(<SignupForm />)
    expect(screen.getByText(/lorem ipsum dolor sit amet/i)).toBeInTheDocument()
  })

  it('renders the terms checkbox checked by default', () => {
    render(<SignupForm />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeChecked()
  })

  it('renders the Terms and Conditions link', () => {
    render(<SignupForm />)
    expect(screen.getByRole('link', { name: /terms and conditions/i })).toBeInTheDocument()
  })

  it('renders the Privacy Policy link', () => {
    render(<SignupForm />)
    expect(screen.getByRole('link', { name: /privacy policy/i })).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<SignupForm />)
    expect(screen.getByRole('button', { name: /register/i })).toHaveAttribute('type', 'submit')
  })

  it('shows errors when submitting empty form', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)

    await user.click(screen.getByRole('button', { name: /register/i }))

    expect(screen.getByText('First name is required')).toBeInTheDocument()
    expect(screen.getByText('Last name is required')).toBeInTheDocument()
    expect(screen.getByText('Email is required')).toBeInTheDocument()
    expect(screen.getByText('Password is required')).toBeInTheDocument()
    expect(screen.getByText('Please re-type your password')).toBeInTheDocument()
  })

  it('shows error for invalid email format', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)

    await user.type(screen.getByPlaceholderText('e.g. John'), 'John')
    await user.type(screen.getByPlaceholderText('e.g. Smith'), 'Doe')
    await user.type(screen.getByPlaceholderText('e.g. john@your-domain.com'), 'not-an-email')
    const pwFields = screen.getAllByPlaceholderText('Your Password')
    await user.type(pwFields[0]!, 'password123')
    await user.click(screen.getByRole('button', { name: /register/i }))

    expect(screen.getByText('Invalid email format')).toBeInTheDocument()
  })

  it('shows error when password is too short', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)

    await user.type(screen.getByPlaceholderText('e.g. John'), 'John')
    await user.type(screen.getByPlaceholderText('e.g. Smith'), 'Doe')
    await user.type(screen.getByPlaceholderText('e.g. john@your-domain.com'), 'john@example.com')
    const pwFields = screen.getAllByPlaceholderText('Your Password')
    await user.type(pwFields[0]!, 'short')
    await user.click(screen.getByRole('button', { name: /register/i }))

    expect(screen.getByText('Password must be at least 8 characters')).toBeInTheDocument()
  })

  it('shows error when passwords do not match', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)

    await user.type(screen.getByPlaceholderText('e.g. John'), 'John')
    await user.type(screen.getByPlaceholderText('e.g. Smith'), 'Doe')
    await user.type(screen.getByPlaceholderText('e.g. john@your-domain.com'), 'john@example.com')
    const pwFields = screen.getAllByPlaceholderText('Your Password')
    await user.type(pwFields[0]!, 'password123')
    await user.type(pwFields[1]!, 'different123')
    await user.click(screen.getByRole('button', { name: /register/i }))

    expect(screen.getByText('Passwords do not match')).toBeInTheDocument()
  })

  it('shows error when terms checkbox is unchecked', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)

    await user.click(screen.getByRole('checkbox')) // uncheck
    await user.click(screen.getByRole('button', { name: /register/i }))

    expect(screen.getByText('You must agree to the terms')).toBeInTheDocument()
  })

  it('clears field error when user starts typing in that field', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)

    // Submit to trigger errors
    await user.click(screen.getByRole('button', { name: /register/i }))
    expect(screen.getByText('First name is required')).toBeInTheDocument()

    // Type in first name field — error should clear
    await user.type(screen.getByPlaceholderText('e.g. John'), 'J')
    expect(screen.queryByText('First name is required')).not.toBeInTheDocument()
  })

  it('shows success state after valid submission', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)

    await user.type(screen.getByPlaceholderText('e.g. John'), 'John')
    await user.type(screen.getByPlaceholderText('e.g. Smith'), 'Doe')
    await user.type(screen.getByPlaceholderText('e.g. john@your-domain.com'), 'john@example.com')
    await user.type(screen.getByPlaceholderText('+00 0000 000 0000'), '+1 555 123 4567')
    await user.type(screen.getByPlaceholderText('e.g. https://google.com'), 'https://example.com')
    const pwFields = screen.getAllByPlaceholderText('Your Password')
    await user.type(pwFields[0]!, 'password123')
    await user.type(pwFields[1]!, 'password123')
    // Terms is checked by default
    await user.click(screen.getByRole('button', { name: /register/i }))

    expect(screen.getByText("You're all set!")).toBeInTheDocument()
    expect(screen.queryByRole('form')).not.toBeInTheDocument()
  })

  it('clears rePassword error when password mismatch is corrected', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)

    // Fill all fields with mismatched passwords and submit
    await user.type(screen.getByPlaceholderText('e.g. John'), 'John')
    await user.type(screen.getByPlaceholderText('e.g. Smith'), 'Doe')
    await user.type(screen.getByPlaceholderText('e.g. john@your-domain.com'), 'john@example.com')
    const pwFields = screen.getAllByPlaceholderText('Your Password')
    await user.type(pwFields[0]!, 'password123')
    await user.type(pwFields[1]!, 'different123')
    await user.click(screen.getByRole('button', { name: /register/i }))
    expect(screen.getByText('Passwords do not match')).toBeInTheDocument()

    // Fix the rePassword field
    await user.clear(pwFields[1]!)
    await user.type(pwFields[1]!, 'password123')
    expect(screen.queryByText('Passwords do not match')).not.toBeInTheDocument()
  })

  it('allows optional phone and website fields to be empty on submit', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)

    await user.type(screen.getByPlaceholderText('e.g. John'), 'John')
    await user.type(screen.getByPlaceholderText('e.g. Smith'), 'Doe')
    await user.type(screen.getByPlaceholderText('e.g. john@your-domain.com'), 'john@example.com')
    // Leave phone and website empty
    const pwFields = screen.getAllByPlaceholderText('Your Password')
    await user.type(pwFields[0]!, 'password123')
    await user.type(pwFields[1]!, 'password123')
    await user.click(screen.getByRole('button', { name: /register/i }))

    expect(screen.getByText("You're all set!")).toBeInTheDocument()
  })
})
