import { describe, expect, it } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SignupForm } from './SignupForm'

describe('SignupForm', () => {
  it('renders all four form fields', () => {
    render(<SignupForm />)
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/re-type password/i)).toBeInTheDocument()
  })

  it('renders the Name input with placeholder', () => {
    render(<SignupForm />)
    const input = screen.getByLabelText(/name/i)
    expect(input).toHaveAttribute('placeholder', 'e.g John Smith')
  })

  it('renders the Name input as text type', () => {
    render(<SignupForm />)
    expect(screen.getByLabelText(/name/i)).toHaveAttribute('type', 'text')
  })

  it('renders the Email input as text type with placeholder', () => {
    render(<SignupForm />)
    const input = screen.getByLabelText(/email/i)
    expect(input).toHaveAttribute('type', 'text')
    expect(input).toHaveAttribute('placeholder', 'your-email@gmail.com')
  })

  it('renders password inputs as password type', () => {
    render(<SignupForm />)
    expect(screen.getByLabelText(/^password$/i)).toHaveAttribute('type', 'password')
    expect(screen.getByLabelText(/re-type password/i)).toHaveAttribute('type', 'password')
  })

  it('renders password placeholder', () => {
    render(<SignupForm />)
    expect(screen.getByLabelText(/^password$/i)).toHaveAttribute('placeholder', 'Your Password')
  })

  it('renders re-type password placeholder', () => {
    render(<SignupForm />)
    expect(screen.getByLabelText(/re-type password/i)).toHaveAttribute(
      'placeholder',
      'Re-Type Your Password',
    )
  })

  it('renders the Register button', () => {
    render(<SignupForm />)
    expect(screen.getByRole('button', { name: /register/i })).toBeInTheDocument()
  })

  it('renders the terms checkbox checked by default', () => {
    render(<SignupForm />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toBeChecked()
  })

  it('renders Terms and Conditions and Privacy Policy links', () => {
    render(<SignupForm />)
    expect(screen.getByRole('link', { name: /terms and conditions/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /privacy policy/i })).toBeInTheDocument()
  })

  it('shows name required error when submitting empty', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)
    // Uncheck terms first (it's pre-checked)
    await user.click(screen.getByRole('checkbox'))
    await user.click(screen.getByRole('button', { name: /register/i }))
    expect(screen.getByText('Name is required')).toBeInTheDocument()
  })

  it('shows email required error when submitting empty', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)
    await user.click(screen.getByRole('checkbox'))
    await user.click(screen.getByRole('button', { name: /register/i }))
    expect(screen.getByText('Email is required')).toBeInTheDocument()
  })

  it('shows password required error when submitting empty', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)
    await user.click(screen.getByRole('checkbox'))
    await user.click(screen.getByRole('button', { name: /register/i }))
    expect(screen.getByText('Password is required')).toBeInTheDocument()
  })

  it('shows retype password required error when submitting empty', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)
    await user.click(screen.getByRole('checkbox'))
    await user.click(screen.getByRole('button', { name: /register/i }))
    expect(screen.getByText('Please re-type your password')).toBeInTheDocument()
  })

  it('shows terms required error when submitting without checkbox', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)
    await user.click(screen.getByRole('checkbox')) // uncheck (was pre-checked)
    await user.click(screen.getByRole('button', { name: /register/i }))
    expect(screen.getByText('You must agree to the terms')).toBeInTheDocument()
  })

  it('shows invalid email format error', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)
    await user.type(screen.getByLabelText(/email/i), 'invalid-email')
    await user.click(screen.getByRole('button', { name: /register/i }))
    expect(screen.getByText('Invalid email format')).toBeInTheDocument()
  })

  it('shows password mismatch error', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)
    await user.type(screen.getByLabelText(/email/i), 'test@example.com')
    await user.type(screen.getByLabelText(/^password$/i), 'Password123')
    await user.type(screen.getByLabelText(/re-type password/i), 'Password456')
    await user.click(screen.getByRole('button', { name: /register/i }))
    expect(screen.getByText('Passwords do not match')).toBeInTheDocument()
  })

  it('submits successfully with valid data', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)
    await user.type(screen.getByLabelText(/name/i), 'John Smith')
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/^password$/i), 'Password123')
    await user.type(screen.getByLabelText(/re-type password/i), 'Password123')
    await user.click(screen.getByRole('button', { name: /register/i }))
    await waitFor(() => {
      expect(screen.getByText(/registration successful/i)).toBeInTheDocument()
    })
  })

  it('allows typing in form fields', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)
    const nameInput = screen.getByLabelText(/name/i)
    await user.type(nameInput, 'Test User')
    expect(nameInput).toHaveValue('Test User')
  })

  it('can check and uncheck the terms checkbox', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeChecked()
    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
    await user.click(checkbox)
    expect(checkbox).toBeChecked()
  })

  it('clears name error when user types in the field', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)
    await user.click(screen.getByRole('checkbox'))
    await user.click(screen.getByRole('button', { name: /register/i }))
    expect(screen.getByText('Name is required')).toBeInTheDocument()
    await user.type(screen.getByLabelText(/name/i), 'John')
    expect(screen.queryByText('Name is required')).not.toBeInTheDocument()
  })

  it('clears email error when user types in the field', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)
    await user.click(screen.getByRole('checkbox'))
    await user.click(screen.getByRole('button', { name: /register/i }))
    expect(screen.getByText('Email is required')).toBeInTheDocument()
    await user.type(screen.getByLabelText(/email/i), 'a@b.com')
    expect(screen.queryByText('Email is required')).not.toBeInTheDocument()
  })

  it('clears password error when user types in the field', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)
    await user.click(screen.getByRole('checkbox'))
    await user.click(screen.getByRole('button', { name: /register/i }))
    expect(screen.getByText('Password is required')).toBeInTheDocument()
    await user.type(screen.getByLabelText(/^password$/i), 'pass')
    expect(screen.queryByText('Password is required')).not.toBeInTheDocument()
  })

  it('clears retype password error when user types in the field', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)
    await user.click(screen.getByRole('checkbox'))
    await user.click(screen.getByRole('button', { name: /register/i }))
    expect(screen.getByText('Please re-type your password')).toBeInTheDocument()
    await user.type(screen.getByLabelText(/re-type password/i), 'pass')
    expect(screen.queryByText('Please re-type your password')).not.toBeInTheDocument()
  })
})
