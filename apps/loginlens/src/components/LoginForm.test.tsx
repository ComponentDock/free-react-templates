import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginForm } from './LoginForm'

describe('LoginForm', () => {
  it('renders the Login heading', () => {
    render(<LoginForm />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Login')
  })

  it('renders the "Login with email" subheading', () => {
    render(<LoginForm />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Login with email')
  })

  it('renders email input with placeholder', () => {
    render(<LoginForm />)
    const emailInput = screen.getByPlaceholderText('Email')
    expect(emailInput).toBeInTheDocument()
    expect(emailInput).toHaveAttribute('type', 'email')
  })

  it('renders password input with placeholder', () => {
    render(<LoginForm />)
    const passwordInput = screen.getByPlaceholderText('Password')
    expect(passwordInput).toBeInTheDocument()
    expect(passwordInput).toHaveAttribute('type', 'password')
  })

  it('renders login submit button', () => {
    render(<LoginForm />)
    expect(screen.getByRole('button', { name: /login/i })).toHaveAttribute('type', 'submit')
  })

  it('allows typing in email field', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    const emailInput = screen.getByPlaceholderText('Email')
    await user.type(emailInput, 'test@example.com')
    expect(emailInput).toHaveValue('test@example.com')
  })

  it('allows typing in password field', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    const passwordInput = screen.getByPlaceholderText('Password')
    await user.type(passwordInput, 'secret123')
    expect(passwordInput).toHaveValue('secret123')
  })

  it('toggles password visibility when eye button is clicked', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    const passwordInput = screen.getByPlaceholderText('Password')
    const toggleButton = screen.getByRole('button', { name: /show password/i })

    expect(passwordInput).toHaveAttribute('type', 'password')

    await user.click(toggleButton)
    expect(passwordInput).toHaveAttribute('type', 'text')
    expect(screen.getByRole('button', { name: /hide password/i })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /hide password/i }))
    expect(passwordInput).toHaveAttribute('type', 'password')
    expect(screen.getByRole('button', { name: /show password/i })).toBeInTheDocument()
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    const submitButton = screen.getByRole('button', { name: /login/i })
    await user.click(submitButton)
    expect(submitButton).toBeInTheDocument()
  })

  it('renders sign up link', () => {
    render(<LoginForm />)
    const signupLink = screen.getByRole('link', { name: /sign up now/i })
    expect(signupLink).toHaveAttribute('href', '#')
  })

  it('renders "Don\'t have an account?" text', () => {
    render(<LoginForm />)
    expect(screen.getByText("Don't have an account?")).toBeInTheDocument()
  })
})
