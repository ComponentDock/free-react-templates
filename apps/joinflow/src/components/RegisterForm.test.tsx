import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RegisterForm } from './RegisterForm'

describe('RegisterForm', () => {
  it('renders the Register heading', () => {
    render(<RegisterForm />)
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Register')
  })

  it('renders the subtitle text', () => {
    render(<RegisterForm />)
    expect(screen.getByText(/lorem ipsum dolor sit amet/i)).toBeInTheDocument()
  })

  it('renders all four input fields', () => {
    render(<RegisterForm />)
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
    expect(screen.getByLabelText('Re-type Password')).toBeInTheDocument()
  })

  it('renders the terms checkbox checked by default', () => {
    render(<RegisterForm />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeChecked()
  })

  it('renders the Terms and Conditions link', () => {
    render(<RegisterForm />)
    expect(screen.getByRole('link', { name: /terms and conditions/i })).toBeInTheDocument()
  })

  it('renders the Sign In link', () => {
    render(<RegisterForm />)
    expect(screen.getByRole('link', { name: /sign in/i })).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<RegisterForm />)
    expect(screen.getByRole('button', { name: /register/i })).toHaveAttribute('type', 'submit')
  })

  it('shows errors when submitting empty form', async () => {
    const user = userEvent.setup()
    render(<RegisterForm />)

    await user.click(screen.getByRole('button', { name: /register/i }))

    expect(screen.getByText('Name is required')).toBeInTheDocument()
    expect(screen.getByText('Email is required')).toBeInTheDocument()
    expect(screen.getByText('Password is required')).toBeInTheDocument()
    expect(screen.getByText('Please re-type your password')).toBeInTheDocument()
  })

  it('shows error for invalid email format', async () => {
    const user = userEvent.setup()
    render(<RegisterForm />)

    await user.type(screen.getByLabelText('Name'), 'John')
    await user.type(screen.getByLabelText('Email'), 'not-an-email')
    await user.type(screen.getByLabelText('Password'), 'password123')
    await user.click(screen.getByRole('button', { name: /register/i }))

    expect(screen.getByText('Invalid email format')).toBeInTheDocument()
  })

  it('shows error when password is too short', async () => {
    const user = userEvent.setup()
    render(<RegisterForm />)

    await user.type(screen.getByLabelText('Name'), 'John')
    await user.type(screen.getByLabelText('Email'), 'john@example.com')
    await user.type(screen.getByLabelText('Password'), 'short')
    await user.click(screen.getByRole('button', { name: /register/i }))

    expect(screen.getByText('Password must be at least 8 characters')).toBeInTheDocument()
  })

  it('shows error when passwords do not match', async () => {
    const user = userEvent.setup()
    render(<RegisterForm />)

    await user.type(screen.getByLabelText('Name'), 'John')
    await user.type(screen.getByLabelText('Email'), 'john@example.com')
    await user.type(screen.getByLabelText('Password'), 'password123')
    await user.type(screen.getByLabelText('Re-type Password'), 'different123')
    await user.click(screen.getByRole('button', { name: /register/i }))

    expect(screen.getByText('Passwords do not match')).toBeInTheDocument()
  })

  it('shows error when terms checkbox is unchecked', async () => {
    const user = userEvent.setup()
    render(<RegisterForm />)

    await user.click(screen.getByRole('checkbox')) // uncheck
    await user.click(screen.getByRole('button', { name: /register/i }))

    expect(screen.getByText('You must agree to the terms')).toBeInTheDocument()
  })

  it('clears field error when user starts typing in that field', async () => {
    const user = userEvent.setup()
    render(<RegisterForm />)

    // Submit to trigger errors
    await user.click(screen.getByRole('button', { name: /register/i }))
    expect(screen.getByText('Name is required')).toBeInTheDocument()

    // Type in name field — error should clear
    await user.type(screen.getByLabelText('Name'), 'J')
    expect(screen.queryByText('Name is required')).not.toBeInTheDocument()
  })

  it('shows success state after valid submission', async () => {
    const user = userEvent.setup()
    render(<RegisterForm />)

    await user.type(screen.getByLabelText('Name'), 'John Doe')
    await user.type(screen.getByLabelText('Email'), 'john@example.com')
    await user.type(screen.getByLabelText('Password'), 'password123')
    await user.type(screen.getByLabelText('Re-type Password'), 'password123')
    // Terms is checked by default
    await user.click(screen.getByRole('button', { name: /register/i }))

    expect(screen.getByText(/you.*re all set/i)).toBeInTheDocument()
    expect(screen.queryByRole('form')).not.toBeInTheDocument()
  })

  it('clears rePassword error when password mismatch is corrected', async () => {
    const user = userEvent.setup()
    render(<RegisterForm />)

    await user.type(screen.getByLabelText('Name'), 'John')
    await user.type(screen.getByLabelText('Email'), 'john@example.com')
    await user.type(screen.getByLabelText('Password'), 'password123')
    await user.type(screen.getByLabelText('Re-type Password'), 'different123')
    await user.click(screen.getByRole('button', { name: /register/i }))
    expect(screen.getByText('Passwords do not match')).toBeInTheDocument()

    // Fix the rePassword field
    await user.clear(screen.getByLabelText('Re-type Password'))
    await user.type(screen.getByLabelText('Re-type Password'), 'password123')
    expect(screen.queryByText('Passwords do not match')).not.toBeInTheDocument()
  })
})
