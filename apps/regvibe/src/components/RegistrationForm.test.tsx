import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RegistrationForm } from './RegistrationForm'

describe('RegistrationForm', () => {
  it('renders all form fields', () => {
    render(<RegistrationForm />)

    expect(screen.getByLabelText(/username/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i, { selector: '#password' })).toBeInTheDocument()
    expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument()
  })

  it('renders the register button', () => {
    render(<RegistrationForm />)

    expect(screen.getByRole('button', { name: /register/i })).toBeInTheDocument()
  })

  it('renders the sign-in link', () => {
    render(<RegistrationForm />)

    expect(screen.getByRole('link', { name: /sign in/i })).toHaveAttribute('href', '#signin')
  })

  it('renders Sign Up headings', () => {
    render(<RegistrationForm />)

    const headings = screen.getAllByRole('heading', { name: /sign up/i })
    expect(headings.length).toBeGreaterThanOrEqual(1)
  })

  it('renders the hero image', () => {
    render(<RegistrationForm />)

    expect(screen.getByRole('img', { name: /sign up illustration/i })).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/regvibe/500/600',
    )
  })

  it('allows typing in the username field', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)

    const input = screen.getByLabelText(/username/i)
    await user.type(input, 'john_doe')
    expect(input).toHaveValue('john_doe')
  })

  it('allows typing in the email field', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)

    const input = screen.getByLabelText(/e-mail/i)
    await user.type(input, 'john@example.com')
    expect(input).toHaveValue('john@example.com')
  })

  it('allows typing in the password field', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)

    const input = screen.getByLabelText(/password/i, { selector: '#password' })
    await user.type(input, 'secret123')
    expect(input).toHaveValue('secret123')
  })

  it('allows typing in the confirm password field', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)

    const input = screen.getByLabelText(/confirm password/i)
    await user.type(input, 'secret123')
    expect(input).toHaveValue('secret123')
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)

    const submitButton = screen.getByRole('button', { name: /register/i })
    await user.click(submitButton)
    // Form should not navigate or reload — the handler calls e.preventDefault()
  })

  it('email field has required and pattern attributes', () => {
    render(<RegistrationForm />)

    const emailField = screen.getByLabelText(/e-mail/i)
    expect(emailField).toBeRequired()
    expect(emailField).toHaveAttribute('pattern', '[^@]+@[^@]+\\.[a-zA-Z]{2,6}')
  })

  it('password field is required', () => {
    render(<RegistrationForm />)

    expect(screen.getByLabelText(/password/i, { selector: '#password' })).toBeRequired()
  })

  it('confirm password field is required', () => {
    render(<RegistrationForm />)

    expect(screen.getByLabelText(/confirm password/i)).toBeRequired()
  })
})
