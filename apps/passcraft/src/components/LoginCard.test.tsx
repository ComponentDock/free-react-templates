import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginCard } from './LoginCard'

describe('LoginCard', () => {
  it('renders the login heading', () => {
    render(<LoginCard />)
    expect(screen.getByText('Login to')).toBeInTheDocument()
    expect(screen.getByText('PassCraft')).toBeInTheDocument()
  })

  it('renders username and password fields', () => {
    render(<LoginCard />)
    expect(screen.getByLabelText('Username')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
  })

  it('renders remember me checkbox checked by default', () => {
    render(<LoginCard />)
    const checkbox = screen.getByLabelText('Remember me')
    expect(checkbox).toBeChecked()
  })

  it('renders forgot password link', () => {
    render(<LoginCard />)
    const link = screen.getByText('Forgot Password')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#forgot')
  })

  it('renders Log In button', () => {
    render(<LoginCard />)
    expect(screen.getByRole('button', { name: /log in/i })).toBeInTheDocument()
  })

  it('accepts username input', async () => {
    const user = userEvent.setup()
    render(<LoginCard />)
    const input = screen.getByLabelText('Username')
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

  it('username field is required', () => {
    render(<LoginCard />)
    expect(screen.getByLabelText('Username')).toBeRequired()
  })

  it('password field is required', () => {
    render(<LoginCard />)
    expect(screen.getByLabelText('Password')).toBeRequired()
  })

  it('checkbox toggles', async () => {
    const user = userEvent.setup()
    render(<LoginCard />)
    const checkbox = screen.getByLabelText('Remember me')
    expect(checkbox).toBeChecked()
    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
    await user.click(checkbox)
    expect(checkbox).toBeChecked()
  })

  it('form submits without error', async () => {
    const user = userEvent.setup()
    render(<LoginCard />)
    await user.type(screen.getByLabelText('Username'), 'user')
    await user.type(screen.getByLabelText('Password'), 'pass')
    await user.click(screen.getByRole('button', { name: /log in/i }))
    // Form should submit without throwing
  })
})
