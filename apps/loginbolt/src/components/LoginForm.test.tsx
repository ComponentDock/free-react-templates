import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginForm } from './LoginForm'

describe('LoginForm', () => {
  const defaultProps = {
    errors: {},
    onSubmit: vi.fn((e: React.FormEvent) => e.preventDefault()),
  }

  it('renders the title, inputs, button, forgot link, and sign up link', () => {
    render(<LoginForm {...defaultProps} />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Account Login')
    expect(screen.getByPlaceholderText('User name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Sign In' })).toBeInTheDocument()
    expect(screen.getByText('Forgot')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'User name / password?' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Sign Up' })).toBeInTheDocument()
  })

  it('shows username error when errors.username is set', () => {
    render(<LoginForm {...defaultProps} errors={{ username: 'Type user name' }} />)

    expect(screen.getByText('Type user name')).toBeInTheDocument()
  })

  it('shows password error when errors.password is set', () => {
    render(<LoginForm {...defaultProps} errors={{ password: 'Type password' }} />)

    expect(screen.getByText('Type password')).toBeInTheDocument()
  })

  it('calls onSubmit when form is submitted', async () => {
    const onSubmit = vi.fn((e: React.FormEvent) => e.preventDefault())
    render(<LoginForm {...defaultProps} onSubmit={onSubmit} />)

    await userEvent.click(screen.getByRole('button', { name: 'Sign In' }))

    expect(onSubmit).toHaveBeenCalledTimes(1)
  })

  it('links to Component Dock in footer', () => {
    render(<LoginForm {...defaultProps} />)

    expect(screen.getByRole('link', { name: 'Sign Up' })).toBeInTheDocument()
  })
})
