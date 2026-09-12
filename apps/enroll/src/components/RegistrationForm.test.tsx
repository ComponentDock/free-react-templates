import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RegistrationForm } from './RegistrationForm'

describe('RegistrationForm', () => {
  it('renders all four input fields with correct placeholders', () => {
    render(<RegistrationForm />)
    expect(screen.getByPlaceholderText('John Doe')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('your-email@gmail.com')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Re-type Your Password')).toBeInTheDocument()
  })

  it('renders the Register heading', () => {
    render(<RegistrationForm />)
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Register')
  })

  it('renders the terms checkbox checked by default', () => {
    render(<RegistrationForm />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeChecked()
  })

  it('renders the Terms and Conditions link', () => {
    render(<RegistrationForm />)
    expect(screen.getByRole('link', { name: /terms and conditions/i })).toBeInTheDocument()
  })

  it('renders the Login link', () => {
    render(<RegistrationForm />)
    expect(screen.getByRole('link', { name: /have an account\? login/i })).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<RegistrationForm />)
    expect(screen.getByRole('button', { name: /register/i })).toHaveAttribute('type', 'submit')
  })

  it('shows error when submitting with empty name', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)

    await user.click(screen.getByRole('button', { name: /register/i }))

    expect(screen.getByText('Name is required')).toBeInTheDocument()
  })

  it('shows error when email is empty', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)

    await user.type(screen.getByPlaceholderText('John Doe'), 'John')
    await user.click(screen.getByRole('button', { name: /register/i }))

    expect(screen.getByText('Email is required')).toBeInTheDocument()
  })

  it('shows error for invalid email format', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)

    await user.type(screen.getByPlaceholderText('John Doe'), 'John')
    await user.type(screen.getByPlaceholderText('your-email@gmail.com'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: /register/i }))

    expect(screen.getByText('Invalid email format')).toBeInTheDocument()
  })

  it('shows error when password is empty', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)

    await user.type(screen.getByPlaceholderText('John Doe'), 'John')
    await user.type(screen.getByPlaceholderText('your-email@gmail.com'), 'john@example.com')
    await user.click(screen.getByRole('button', { name: /register/i }))

    expect(screen.getByText('Password is required')).toBeInTheDocument()
  })

  it('shows error when password is too short', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)

    await user.type(screen.getByPlaceholderText('John Doe'), 'John')
    await user.type(screen.getByPlaceholderText('your-email@gmail.com'), 'john@example.com')
    await user.type(screen.getByPlaceholderText('Your Password'), 'short')
    await user.click(screen.getByRole('button', { name: /register/i }))

    expect(screen.getByText('Password must be at least 8 characters')).toBeInTheDocument()
  })

  it('shows error when passwords do not match', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)

    await user.type(screen.getByPlaceholderText('John Doe'), 'John')
    await user.type(screen.getByPlaceholderText('your-email@gmail.com'), 'john@example.com')
    await user.type(screen.getByPlaceholderText('Your Password'), 'password123')
    await user.type(screen.getByPlaceholderText('Re-type Your Password'), 'different123')
    await user.click(screen.getByRole('button', { name: /register/i }))

    expect(screen.getByText('Passwords do not match')).toBeInTheDocument()
  })

  it('shows error when terms checkbox is unchecked', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)

    await user.click(screen.getByRole('checkbox')) // uncheck
    await user.click(screen.getByRole('button', { name: /register/i }))

    expect(screen.getByText('You must agree to the terms')).toBeInTheDocument()
  })

  it('clears field error when user starts typing in that field', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)

    // Submit to trigger errors
    await user.click(screen.getByRole('button', { name: /register/i }))
    expect(screen.getByText('Name is required')).toBeInTheDocument()

    // Type in name field — error should clear
    await user.type(screen.getByPlaceholderText('John Doe'), 'J')
    expect(screen.queryByText('Name is required')).not.toBeInTheDocument()
  })

  it('shows success state after valid submission', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)

    await user.type(screen.getByPlaceholderText('John Doe'), 'John Doe')
    await user.type(screen.getByPlaceholderText('your-email@gmail.com'), 'john@example.com')
    await user.type(screen.getByPlaceholderText('Your Password'), 'password123')
    await user.type(screen.getByPlaceholderText('Re-type Your Password'), 'password123')
    // Terms is checked by default
    await user.click(screen.getByRole('button', { name: /register/i }))

    expect(screen.getByText("You're registered!")).toBeInTheDocument()
    expect(screen.queryByRole('form')).not.toBeInTheDocument()
  })

  it('clears rePassword error when password mismatch is corrected', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)

    // Fill all fields with mismatched passwords and submit
    await user.type(screen.getByPlaceholderText('John Doe'), 'John')
    await user.type(screen.getByPlaceholderText('your-email@gmail.com'), 'john@example.com')
    await user.type(screen.getByPlaceholderText('Your Password'), 'password123')
    await user.type(screen.getByPlaceholderText('Re-type Your Password'), 'different123')
    await user.click(screen.getByRole('button', { name: /register/i }))
    expect(screen.getByText('Passwords do not match')).toBeInTheDocument()

    // Fix the rePassword field
    await user.clear(screen.getByPlaceholderText('Re-type Your Password'))
    await user.type(screen.getByPlaceholderText('Re-type Your Password'), 'password123')
    expect(screen.queryByText('Passwords do not match')).not.toBeInTheDocument()
  })
})
