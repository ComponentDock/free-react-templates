import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginForm } from './LoginForm'

describe('LoginForm', () => {
  it('renders ACCOUNT LOGIN heading', () => {
    render(<LoginForm />)
    expect(screen.getByText('Account Login')).toBeInTheDocument()
  })

  it('renders username input', () => {
    render(<LoginForm />)
    const input = document.getElementById('username') as HTMLInputElement
    expect(input).toBeInTheDocument()
    expect(input.type).toBe('text')
    expect(input.name).toBe('username')
  })

  it('renders password input', () => {
    render(<LoginForm />)
    const input = document.getElementById('password') as HTMLInputElement
    expect(input).toBeInTheDocument()
    expect(input.type).toBe('password')
    expect(input.name).toBe('password')
  })

  it('renders Sign In button', () => {
    render(<LoginForm />)
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument()
  })

  it('Sign In button is full width', () => {
    render(<LoginForm />)
    expect(screen.getByRole('button', { name: /sign in/i })).toHaveClass('w-full')
  })

  it('Sign In button is 70px tall', () => {
    render(<LoginForm />)
    expect(screen.getByRole('button', { name: /sign in/i })).toHaveClass('h-[70px]')
  })

  it('Sign In button has bottom border radius', () => {
    render(<LoginForm />)
    const btn = screen.getByRole('button', { name: /sign in/i })
    expect(btn.style.borderBottomLeftRadius).toBe('12px')
    expect(btn.style.borderBottomRightRadius).toBe('12px')
  })

  it('username input accepts text', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    const input = document.getElementById('username') as HTMLInputElement
    await user.type(input, 'admin')
    expect(input.value).toBe('admin')
  })

  it('password input accepts text', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    const input = document.getElementById('password') as HTMLInputElement
    await user.type(input, 'secret123')
    expect(input.value).toBe('secret123')
  })

  it('shows username error when submitted empty', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    await user.click(screen.getByRole('button', { name: /sign in/i }))
    expect(screen.getByText('Username is required')).toBeInTheDocument()
  })

  it('shows password error when submitted empty', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    await user.click(screen.getByRole('button', { name: /sign in/i }))
    expect(screen.getByText('Password is required')).toBeInTheDocument()
  })

  it('shows errors on blur when fields are empty', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    const usernameInput = document.getElementById('username') as HTMLInputElement
    await user.click(usernameInput)
    await user.tab()
    expect(screen.getByText('Username is required')).toBeInTheDocument()
  })

  it('shows password error on blur when empty', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    const passwordInput = document.getElementById('password') as HTMLInputElement
    await user.click(passwordInput)
    await user.tab()
    expect(screen.getByText('Password is required')).toBeInTheDocument()
  })

  it('clears validation error when field becomes valid', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    const usernameInput = document.getElementById('username') as HTMLInputElement
    await user.click(usernameInput)
    await user.tab()
    expect(screen.getByText('Username is required')).toBeInTheDocument()
    await user.type(usernameInput, 'admin')
    expect(screen.queryByText('Username is required')).not.toBeInTheDocument()
  })

  it('does not show errors before interaction', async () => {
    render(<LoginForm />)
    expect(screen.queryByText('Username is required')).not.toBeInTheDocument()
    expect(screen.queryByText('Password is required')).not.toBeInTheDocument()
  })

  it('renders username label', () => {
    render(<LoginForm />)
    expect(screen.getByLabelText('Username')).toBeInTheDocument()
  })

  it('renders password label', () => {
    render(<LoginForm />)
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
  })

  it('blurs password field without error when password has value', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    const passwordInput = document.getElementById('password') as HTMLInputElement
    await user.type(passwordInput, 'secret123')
    await user.tab()
    expect(screen.queryByText('Password is required')).not.toBeInTheDocument()
  })
})
