import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginForm } from './LoginForm'

describe('LoginForm', () => {
  it('renders the heading "Sign In With"', () => {
    render(<LoginForm />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Sign In With')
  })

  it('renders username and password labels', () => {
    render(<LoginForm />)
    expect(screen.getByLabelText('Username')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
  })

  it('renders username input as text type', () => {
    render(<LoginForm />)
    expect(screen.getByLabelText('Username')).toHaveAttribute('type', 'text')
  })

  it('renders password input as password type', () => {
    render(<LoginForm />)
    expect(screen.getByLabelText('Password')).toHaveAttribute('type', 'password')
  })

  it('accepts text input for username', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    const input = screen.getByLabelText('Username')
    await user.type(input, 'admin')
    expect(input).toHaveValue('admin')
  })

  it('accepts text input for password', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    const input = screen.getByLabelText('Password')
    await user.type(input, 'secret123')
    expect(input).toHaveValue('secret123')
  })

  it('renders the Forgot? link', () => {
    render(<LoginForm />)
    const link = screen.getByText('Forgot?')
    expect(link).toHaveAttribute('href', '#forgot')
  })

  it('renders the Sign In button', () => {
    render(<LoginForm />)
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument()
  })

  it('renders the sign up section', () => {
    render(<LoginForm />)
    expect(screen.getByText('Not a member?')).toBeInTheDocument()
    expect(screen.getByText('Sign up now')).toBeInTheDocument()
  })

  it('renders the Sign up now link', () => {
    render(<LoginForm />)
    const link = screen.getByText('Sign up now')
    expect(link).toHaveAttribute('href', '#signup')
  })

  it('submits the form without page reload', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    await user.type(screen.getByLabelText('Username'), 'admin')
    await user.type(screen.getByLabelText('Password'), 'pass')
    await user.click(screen.getByRole('button', { name: /sign in/i }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Sign In With')
  })

  it('renders social login buttons', () => {
    render(<LoginForm />)
    expect(screen.getByText('Facebook')).toBeInTheDocument()
    expect(screen.getByText('Google')).toBeInTheDocument()
  })
})
