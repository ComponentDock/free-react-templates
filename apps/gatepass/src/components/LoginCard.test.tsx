import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginCard } from './LoginCard'

describe('LoginCard', () => {
  it('renders the welcome heading', () => {
    render(<LoginCard />)
    expect(screen.getByText('Welcome Back')).toBeInTheDocument()
    expect(screen.getByText('Sign in to continue to Gatepass')).toBeInTheDocument()
  })

  it('renders email and password fields', () => {
    render(<LoginCard />)
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
  })

  it('renders remember me checkbox unchecked by default', () => {
    render(<LoginCard />)
    const checkbox = screen.getByLabelText('Remember me')
    expect(checkbox).not.toBeChecked()
  })

  it('renders forgot password link', () => {
    render(<LoginCard />)
    const link = screen.getByText('Forgot Password?')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#forgot')
  })

  it('renders Log In button', () => {
    render(<LoginCard />)
    expect(screen.getByRole('button', { name: /log in/i })).toBeInTheDocument()
  })

  it('renders social login buttons', () => {
    render(<LoginCard />)
    expect(screen.getByRole('button', { name: /sign in with google/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /sign in with facebook/i })).toBeInTheDocument()
  })

  it('renders create account link', () => {
    render(<LoginCard />)
    const link = screen.getByText('Create an account')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#signup')
  })

  it('accepts email input', async () => {
    const user = userEvent.setup()
    render(<LoginCard />)
    const input = screen.getByLabelText('Email')
    await user.type(input, 'user@example.com')
    expect(input).toHaveValue('user@example.com')
  })

  it('accepts password input', async () => {
    const user = userEvent.setup()
    render(<LoginCard />)
    const input = screen.getByLabelText('Password')
    await user.type(input, 'secret123')
    expect(input).toHaveValue('secret123')
  })

  it('password field masks input', () => {
    render(<LoginCard />)
    expect(screen.getByLabelText('Password')).toHaveAttribute('type', 'password')
  })

  it('email field is required', () => {
    render(<LoginCard />)
    expect(screen.getByLabelText('Email')).toBeRequired()
  })

  it('password field is required', () => {
    render(<LoginCard />)
    expect(screen.getByLabelText('Password')).toBeRequired()
  })

  it('email field has correct type', () => {
    render(<LoginCard />)
    expect(screen.getByLabelText('Email')).toHaveAttribute('type', 'email')
  })

  it('checkbox toggles', async () => {
    const user = userEvent.setup()
    render(<LoginCard />)
    const checkbox = screen.getByLabelText('Remember me')
    expect(checkbox).not.toBeChecked()
    await user.click(checkbox)
    expect(checkbox).toBeChecked()
    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('form submits without error', async () => {
    const user = userEvent.setup()
    render(<LoginCard />)
    await user.type(screen.getByLabelText('Email'), 'user@example.com')
    await user.type(screen.getByLabelText('Password'), 'pass')
    await user.click(screen.getByRole('button', { name: /log in/i }))
    // Form should submit without throwing
  })

  it('social buttons have correct aria labels', () => {
    render(<LoginCard />)
    const googleBtn = screen.getByRole('button', {
      name: /sign in with google/i,
    })
    const facebookBtn = screen.getByRole('button', {
      name: /sign in with facebook/i,
    })
    expect(googleBtn).toHaveAttribute('aria-label', 'Sign in with Google')
    expect(facebookBtn).toHaveAttribute('aria-label', 'Sign in with Facebook')
  })

  it('renders the "Or sign in with" divider text', () => {
    render(<LoginCard />)
    expect(screen.getByText('Or sign in with')).toBeInTheDocument()
  })

  it('renders the "Don\'t have an account" text', () => {
    render(<LoginCard />)
    expect(screen.getByText(/Don't have an account/)).toBeInTheDocument()
  })
})
