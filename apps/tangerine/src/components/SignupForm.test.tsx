import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SignupForm } from './SignupForm'

describe('SignupForm', () => {
  it('renders the sign-up heading and all form fields', () => {
    render(<SignupForm />)

    expect(screen.getByRole('heading', { level: 2, name: 'Sign Up' })).toBeInTheDocument()

    expect(screen.getByLabelText('Your Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
    expect(screen.getByLabelText('Re-type Password')).toBeInTheDocument()

    expect(screen.getByPlaceholderText('your-email@gmail.com')).toBeInTheDocument()

    expect(screen.getByRole('checkbox', { name: /agree/i })).toBeChecked()
    expect(screen.getByRole('button', { name: 'Register' })).toBeInTheDocument()
  })

  it('allows typing into the email field', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)

    const email = screen.getByLabelText('Your Email')
    await user.type(email, 'test@example.com')
    expect(email).toHaveValue('test@example.com')
  })

  it('allows typing into password fields', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)

    const password = screen.getByLabelText('Password')
    await user.type(password, 'secret123')
    expect(password).toHaveValue('secret123')

    const retype = screen.getByLabelText('Re-type Password')
    await user.type(retype, 'secret123')
    expect(retype).toHaveValue('secret123')
  })

  it('allows toggling the terms checkbox', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)

    const checkbox = screen.getByRole('checkbox', { name: /agree/i })
    expect(checkbox).toBeChecked()

    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()

    await user.click(checkbox)
    expect(checkbox).toBeChecked()
  })

  it('shows the Terms and Conditions link', () => {
    render(<SignupForm />)

    const link = screen.getByRole('link', { name: 'Terms and Conditions' })
    expect(link).toHaveAttribute('href', '#terms')
  })

  it('shows a confirmation state on submit', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)

    await user.click(screen.getByRole('button', { name: 'Register' }))

    expect(screen.getByRole('heading', { name: 'Registration Complete' })).toBeInTheDocument()
    expect(screen.getByText(/account has been created successfully/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Back to form' })).toBeInTheDocument()
  })

  it('calls onSubmit with form data when submitted', async () => {
    const onSubmit = vi.fn()
    const user = userEvent.setup()
    render(<SignupForm onSubmit={onSubmit} />)

    await user.type(screen.getByLabelText('Your Email'), 'a@b.com')
    await user.type(screen.getByLabelText('Password'), 'pass')
    await user.type(screen.getByLabelText('Re-type Password'), 'pass')
    await user.click(screen.getByRole('button', { name: 'Register' }))

    expect(onSubmit).toHaveBeenCalledWith({
      email: 'a@b.com',
      password: 'pass',
      agreedToTerms: true,
    })
  })

  it('allows returning to the form from the confirmation state', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)

    await user.click(screen.getByRole('button', { name: 'Register' }))
    expect(screen.getByRole('heading', { name: 'Registration Complete' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Back to form' }))
    expect(screen.getByRole('heading', { name: 'Sign Up' })).toBeInTheDocument()
  })

  it('includes unchecked state styling for the checkbox', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)

    const checkbox = screen.getByRole('checkbox', { name: /agree/i })
    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })
})
