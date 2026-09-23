import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginForm } from './LoginForm'

describe('LoginForm', () => {
  it('renders the Sign In heading', () => {
    render(<LoginForm />)
    expect(screen.getByRole('heading', { name: /sign in/i })).toBeInTheDocument()
  })

  it('renders the subtitle text', () => {
    render(<LoginForm />)
    expect(screen.getByText(/Lorem ipsum dolor sit amet elit/)).toBeInTheDocument()
  })

  it('renders username input with placeholder', () => {
    render(<LoginForm />)
    const input = screen.getByPlaceholderText('Username')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'text')
  })

  it('renders password input with placeholder', () => {
    render(<LoginForm />)
    const input = screen.getByPlaceholderText('Password')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'password')
  })

  it('renders remember me checkbox unchecked by default', () => {
    render(<LoginForm />)
    const checkbox = screen.getByLabelText('Remember me')
    expect(checkbox).not.toBeChecked()
  })

  it('renders Forgot Password link', () => {
    render(<LoginForm />)
    const link = screen.getByText('Forgot Password')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#forgot')
  })

  it('renders Log In button', () => {
    render(<LoginForm />)
    expect(screen.getByRole('button', { name: /log in/i })).toBeInTheDocument()
  })

  it('renders the "— or —" divider text', () => {
    render(<LoginForm />)
    expect(screen.getByText('— or —')).toBeInTheDocument()
  })

  it('renders social login buttons', () => {
    render(<LoginForm />)
    expect(screen.getByRole('button', { name: /login with facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /login with twitter/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /login with google/i })).toBeInTheDocument()
  })

  it('accepts username input', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    const input = screen.getByPlaceholderText('Username')
    await user.type(input, 'testuser')
    expect(input).toHaveValue('testuser')
  })

  it('accepts password input', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    const input = screen.getByPlaceholderText('Password')
    await user.type(input, 'secret123')
    expect(input).toHaveValue('secret123')
  })

  it('password field masks input', () => {
    render(<LoginForm />)
    expect(screen.getByPlaceholderText('Password')).toHaveAttribute('type', 'password')
  })

  it('username field is required', () => {
    render(<LoginForm />)
    expect(screen.getByPlaceholderText('Username')).toBeRequired()
  })

  it('password field is required', () => {
    render(<LoginForm />)
    expect(screen.getByPlaceholderText('Password')).toBeRequired()
  })

  it('checkbox toggles on click', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    const checkbox = screen.getByLabelText('Remember me')
    expect(checkbox).not.toBeChecked()
    await user.click(checkbox)
    expect(checkbox).toBeChecked()
    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('form submits without error', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    await user.type(screen.getByPlaceholderText('Username'), 'user')
    await user.type(screen.getByPlaceholderText('Password'), 'pass')
    await user.click(screen.getByRole('button', { name: /log in/i }))
  })

  it('social buttons have correct aria labels', () => {
    render(<LoginForm />)
    expect(screen.getByRole('button', { name: /login with facebook/i })).toHaveAttribute(
      'aria-label',
      'Login with Facebook',
    )
    expect(screen.getByRole('button', { name: /login with twitter/i })).toHaveAttribute(
      'aria-label',
      'Login with Twitter',
    )
    expect(screen.getByRole('button', { name: /login with google/i })).toHaveAttribute(
      'aria-label',
      'Login with Google',
    )
  })
})
