import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginForm } from './LoginForm'

describe('LoginForm', () => {
  const defaultProps = {
    errors: {} as { email?: string; password?: string },
    onSubmit: vi.fn((e: React.FormEvent) => e.preventDefault()),
  }

  it('renders the title, inputs, button, forgot link, and sign-up link', () => {
    render(<LoginForm {...defaultProps} />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Account Login')
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'SIGN IN' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Username / Password?' })).toBeInTheDocument()
    expect(screen.getByText('Create an account?')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Sign up' })).toBeInTheDocument()
  })

  it('shows email error when errors.email is set', () => {
    render(<LoginForm {...defaultProps} errors={{ email: 'Valid email is required' }} />)

    expect(screen.getByText('Valid email is required')).toBeInTheDocument()
  })

  it('shows password error when errors.password is set', () => {
    render(<LoginForm {...defaultProps} errors={{ password: 'Password is required' }} />)

    expect(screen.getByText('Password is required')).toBeInTheDocument()
  })

  it('calls onSubmit when form is submitted', async () => {
    const onSubmit = vi.fn((e: React.FormEvent) => e.preventDefault())
    render(<LoginForm {...defaultProps} onSubmit={onSubmit} />)

    await userEvent.click(screen.getByRole('button', { name: 'SIGN IN' }))

    expect(onSubmit).toHaveBeenCalledTimes(1)
  })
})
