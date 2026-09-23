import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginForm } from './LoginForm'

describe('LoginForm', () => {
  it('renders the Sign In heading', () => {
    render(<LoginForm />)
    expect(screen.getByText('Sign In')).toBeInTheDocument()
  })

  it('renders a username input with placeholder', () => {
    render(<LoginForm />)
    const input = screen.getByPlaceholderText('Username')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'text')
  })

  it('renders a password input with placeholder', () => {
    render(<LoginForm />)
    const input = screen.getByPlaceholderText('Password')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'password')
  })

  it('toggles password visibility on eye icon click', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)

    const passwordInput = screen.getByPlaceholderText('Password')
    expect(passwordInput).toHaveAttribute('type', 'password')

    const toggleButton = screen.getByRole('button', { name: /show password/i })
    await user.click(toggleButton)

    expect(passwordInput).toHaveAttribute('type', 'text')

    const hideButton = screen.getByRole('button', { name: /hide password/i })
    await user.click(hideButton)

    expect(passwordInput).toHaveAttribute('type', 'password')
  })

  it('allows typing in username field', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)

    const input = screen.getByPlaceholderText('Username')
    await user.type(input, 'testuser')
    expect(input).toHaveValue('testuser')
  })

  it('allows typing in password field', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)

    const input = screen.getByPlaceholderText('Password')
    await user.type(input, 'secret')
    expect(input).toHaveValue('secret')
  })
})
