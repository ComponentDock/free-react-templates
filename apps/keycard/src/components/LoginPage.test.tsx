import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginPage } from './LoginPage'

describe('LoginPage', () => {
  it('renders the login card', () => {
    render(<LoginPage />)
    expect(screen.getByPlaceholderText('username')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('password')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()
  })

  it('displays registration link text', () => {
    render(<LoginPage />)
    expect(screen.getByText('Not registered?')).toBeInTheDocument()
    expect(screen.getByText('Create an account')).toBeInTheDocument()
  })

  it('registration link points to #register', () => {
    render(<LoginPage />)
    const link = screen.getByText('Create an account')
    expect(link).toHaveAttribute('href', '#register')
  })

  it('accepts username input', async () => {
    const user = userEvent.setup()
    render(<LoginPage />)
    const input = screen.getByPlaceholderText('username')
    await user.type(input, 'testuser')
    expect(input).toHaveValue('testuser')
  })

  it('accepts password input', async () => {
    const user = userEvent.setup()
    render(<LoginPage />)
    const input = screen.getByPlaceholderText('password')
    await user.type(input, 'secret123')
    expect(input).toHaveValue('secret123')
  })

  it('username field is required', () => {
    render(<LoginPage />)
    expect(screen.getByPlaceholderText('username')).toBeRequired()
  })

  it('password field is required', () => {
    render(<LoginPage />)
    expect(screen.getByPlaceholderText('password')).toBeRequired()
  })

  it('password field masks input', () => {
    render(<LoginPage />)
    expect(screen.getByPlaceholderText('password')).toHaveAttribute('type', 'password')
  })

  it('form submits without error', async () => {
    const user = userEvent.setup()
    render(<LoginPage />)
    await user.type(screen.getByPlaceholderText('username'), 'user')
    await user.type(screen.getByPlaceholderText('password'), 'pass')
    await user.click(screen.getByRole('button', { name: /login/i }))
    // Form should submit without throwing
  })
})
