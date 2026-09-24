import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginForm } from './LoginForm'

describe('LoginForm', () => {
  it('renders the Login heading', () => {
    render(<LoginForm />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Login')
  })

  it('renders username input', () => {
    render(<LoginForm />)

    expect(screen.getByPlaceholderText('Type your username')).toBeInTheDocument()
  })

  it('renders password input', () => {
    render(<LoginForm />)

    expect(screen.getByPlaceholderText('Type your password')).toBeInTheDocument()
  })

  it('renders the Login button', () => {
    render(<LoginForm />)

    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument()
  })

  it('renders Forgot password link', () => {
    render(<LoginForm />)

    expect(screen.getByRole('link', { name: 'Forgot password?' })).toBeInTheDocument()
  })

  it('renders social buttons', () => {
    render(<LoginForm />)

    expect(screen.getByRole('link', { name: 'Sign up with Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Sign up with Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Sign up with Google' })).toBeInTheDocument()
  })

  it('renders Sign Up link', () => {
    render(<LoginForm />)

    expect(screen.getByRole('link', { name: 'Sign Up' })).toBeInTheDocument()
  })

  it('shows errors on empty submit', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)

    await user.click(screen.getByRole('button', { name: 'Login' }))

    expect(screen.getByText('Username is required')).toBeInTheDocument()
    expect(screen.getByText('Password is required')).toBeInTheDocument()
  })

  it('shows only username error when password is provided', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)

    await user.type(screen.getByPlaceholderText('Type your password'), 'secret')
    await user.click(screen.getByRole('button', { name: 'Login' }))

    expect(screen.getByText('Username is required')).toBeInTheDocument()
    expect(screen.queryByText('Password is required')).not.toBeInTheDocument()
  })

  it('shows only password error when username is provided', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)

    await user.type(screen.getByPlaceholderText('Type your username'), 'admin')
    await user.click(screen.getByRole('button', { name: 'Login' }))

    expect(screen.queryByText('Username is required')).not.toBeInTheDocument()
    expect(screen.getByText('Password is required')).toBeInTheDocument()
  })

  it('does not show errors with valid data', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)

    await user.type(screen.getByPlaceholderText('Type your username'), 'admin')
    await user.type(screen.getByPlaceholderText('Type your password'), 'secret')
    await user.click(screen.getByRole('button', { name: 'Login' }))

    expect(screen.queryByText('Username is required')).not.toBeInTheDocument()
    expect(screen.queryByText('Password is required')).not.toBeInTheDocument()
  })
})
