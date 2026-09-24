import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginForm } from './LoginForm'

describe('LoginForm', () => {
  const defaultProps = {
    errors: {} as { email?: string; password?: string },
    onSubmit: vi.fn((e: React.FormEvent) => e.preventDefault()),
    rememberMe: false,
    onRememberMeChange: vi.fn(),
  }

  it('renders the title, inputs, button, remember me, forgot link, social buttons', () => {
    render(<LoginForm {...defaultProps} />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Login to continue')
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument()
    expect(screen.getByText('Remember me')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Forgot Password?' })).toBeInTheDocument()
    expect(screen.getByText('or sign up using')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
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

    await userEvent.click(screen.getByRole('button', { name: 'Login' }))

    expect(onSubmit).toHaveBeenCalledTimes(1)
  })

  it('calls onRememberMeChange when checkbox is toggled', async () => {
    const onRememberMeChange = vi.fn()
    render(<LoginForm {...defaultProps} onRememberMeChange={onRememberMeChange} />)

    await userEvent.click(screen.getByText('Remember me'))

    expect(onRememberMeChange).toHaveBeenCalledWith(true)
  })

  it('links to Component Dock in social section', () => {
    render(<LoginForm {...defaultProps} />)

    const fbLink = screen.getByRole('link', { name: 'Facebook' })
    expect(fbLink).toHaveAttribute('href', '#')

    const twLink = screen.getByRole('link', { name: 'Twitter' })
    expect(twLink).toHaveAttribute('href', '#')
  })
})
