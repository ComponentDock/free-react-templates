import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginCard } from './LoginCard'

describe('LoginCard', () => {
  const defaultProps = {
    errors: {},
    onSubmit: vi.fn((e: React.FormEvent) => e.preventDefault()),
  }

  it('renders the Sign In heading', () => {
    render(<LoginCard {...defaultProps} />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Sign In')
  })

  it('renders username input with placeholder', () => {
    render(<LoginCard {...defaultProps} />)
    const input = screen.getByPlaceholderText('username or email')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'text')
    expect(input).toHaveAttribute('autoComplete', 'username')
  })

  it('renders password input with placeholder', () => {
    render(<LoginCard {...defaultProps} />)
    const input = screen.getByPlaceholderText('password')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'password')
    expect(input).toHaveAttribute('autoComplete', 'current-password')
  })

  it('renders Sign In submit button', () => {
    render(<LoginCard {...defaultProps} />)
    expect(screen.getByRole('button', { name: 'Sign In' })).toBeInTheDocument()
  })

  it('renders "Or login with" divider', () => {
    render(<LoginCard {...defaultProps} />)
    expect(screen.getByText('Or login with')).toBeInTheDocument()
  })

  it('renders Sign Up link', () => {
    render(<LoginCard {...defaultProps} />)
    expect(screen.getByRole('link', { name: 'Sign Up' })).toHaveAttribute('href', '#')
  })

  it('shows username error when provided', () => {
    render(<LoginCard {...defaultProps} errors={{ username: 'Username is required' }} />)
    expect(screen.getByText('Username is required')).toBeInTheDocument()
  })

  it('shows password error when provided', () => {
    render(<LoginCard {...defaultProps} errors={{ password: 'Password is required' }} />)
    expect(screen.getByText('Password is required')).toBeInTheDocument()
  })

  it('shows both errors when both provided', () => {
    render(
      <LoginCard
        {...defaultProps}
        errors={{ username: 'Username is required', password: 'Password is required' }}
      />,
    )
    expect(screen.getByText('Username is required')).toBeInTheDocument()
    expect(screen.getByText('Password is required')).toBeInTheDocument()
  })

  it('calls onSubmit when form is submitted', async () => {
    const onSubmit = vi.fn((e: React.FormEvent) => e.preventDefault())
    render(<LoginCard {...defaultProps} onSubmit={onSubmit} />)

    await userEvent.click(screen.getByRole('button', { name: 'Sign In' }))

    expect(onSubmit).toHaveBeenCalledTimes(1)
  })

  it('does not show errors when errors object is empty', () => {
    render(<LoginCard {...defaultProps} errors={{}} />)
    expect(screen.queryByText('Username is required')).not.toBeInTheDocument()
    expect(screen.queryByText('Password is required')).not.toBeInTheDocument()
  })
})
