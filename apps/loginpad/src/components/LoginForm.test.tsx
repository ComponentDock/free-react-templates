import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginForm } from './LoginForm'

describe('LoginForm', () => {
  it('renders the Account Login heading', () => {
    render(<LoginForm />)
    expect(screen.getByRole('heading', { name: /account login/i })).toBeInTheDocument()
  })

  it('renders username input with label', () => {
    render(<LoginForm />)
    const input = document.getElementById('username') as HTMLInputElement
    expect(input).toBeInTheDocument()
    expect(input.type).toBe('text')
    expect(screen.getByLabelText('Username')).toBe(input)
  })

  it('renders password input with label', () => {
    render(<LoginForm />)
    const input = document.getElementById('password') as HTMLInputElement
    expect(input).toBeInTheDocument()
    expect(input.type).toBe('password')
    expect(screen.getByLabelText('Password')).toBe(input)
  })

  it('renders Remember me checkbox unchecked by default', () => {
    render(<LoginForm />)
    const checkbox = screen.getByRole('checkbox', { name: /remember me/i })
    expect(checkbox).not.toBeChecked()
  })

  it('renders Forgot Password link', () => {
    render(<LoginForm />)
    const link = screen.getByText('Forgot Password?')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#forgot')
  })

  it('renders Login button', () => {
    render(<LoginForm />)
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()
  })

  it('shows password toggle button', () => {
    render(<LoginForm />)
    expect(screen.getByRole('button', { name: /show password/i })).toBeInTheDocument()
  })

  it('accepts username input', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    const input = document.getElementById('username') as HTMLInputElement
    await user.type(input, 'testuser')
    expect(input.value).toBe('testuser')
  })

  it('accepts password input', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    const input = document.getElementById('password') as HTMLInputElement
    await user.type(input, 'secret123')
    expect(input.value).toBe('secret123')
  })

  it('checkbox toggles on click', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    const checkbox = screen.getByRole('checkbox', { name: /remember me/i })
    expect(checkbox).not.toBeChecked()
    await user.click(checkbox)
    expect(checkbox).toBeChecked()
    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('password toggle shows and hides password', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    const input = document.getElementById('password') as HTMLInputElement
    const toggle = screen.getByRole('button', { name: /show password/i })

    expect(input.type).toBe('password')
    await user.click(toggle)
    expect(input.type).toBe('text')
    expect(screen.getByRole('button', { name: /hide password/i })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /hide password/i }))
    expect(input.type).toBe('password')
  })

  it('form submits without error', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    await user.type(document.getElementById('username') as HTMLInputElement, 'user')
    await user.type(document.getElementById('password') as HTMLInputElement, 'pass')
    await user.click(screen.getByRole('button', { name: /login/i }))
  })

  it('Login button is full width', () => {
    render(<LoginForm />)
    const btn = screen.getByRole('button', { name: /login/i })
    expect(btn.className).toContain('w-full')
  })

  it('Login button has pill shape', () => {
    render(<LoginForm />)
    const btn = screen.getByRole('button', { name: /login/i })
    expect(btn.className).toContain('rounded-[27px]')
  })

  it('Login button is dark by default', () => {
    render(<LoginForm />)
    const btn = screen.getByRole('button', { name: /login/i })
    expect(btn.className).toContain('bg-[var(--color-button)]')
  })

  it('password input starts as password type', () => {
    render(<LoginForm />)
    const input = document.getElementById('password') as HTMLInputElement
    expect(input.type).toBe('password')
  })
})
