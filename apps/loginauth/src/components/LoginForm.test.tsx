import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginForm } from './LoginForm'

describe('LoginForm', () => {
  it('renders username input', () => {
    render(<LoginForm />)
    const input = document.getElementById('username') as HTMLInputElement
    expect(input).toBeInTheDocument()
    expect(input.type).toBe('text')
  })

  it('renders password input', () => {
    render(<LoginForm />)
    const input = document.getElementById('password') as HTMLInputElement
    expect(input).toBeInTheDocument()
    expect(input.type).toBe('password')
  })

  it('renders Login button', () => {
    render(<LoginForm />)
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()
  })

  it('renders username label', () => {
    render(<LoginForm />)
    expect(screen.getByText('Username')).toBeInTheDocument()
  })

  it('renders password label', () => {
    render(<LoginForm />)
    expect(screen.getByText('Password')).toBeInTheDocument()
  })

  it('renders Remember me checkbox', () => {
    render(<LoginForm />)
    const checkbox = screen.getByRole('checkbox', { name: /remember me/i })
    expect(checkbox).toBeInTheDocument()
  })

  it('renders Forgot Password link', () => {
    render(<LoginForm />)
    const link = screen.getByText('Forgot Password?')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#forgot')
  })

  it('accepts username input', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    const input = document.getElementById('username') as HTMLInputElement
    await user.type(input, 'admin')
    expect(input.value).toBe('admin')
  })

  it('accepts password input', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    const input = document.getElementById('password') as HTMLInputElement
    await user.type(input, 'secret123')
    expect(input.value).toBe('secret123')
  })

  it('toggles remember me checkbox', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    const checkbox = screen.getByRole('checkbox', { name: /remember me/i })
    expect(checkbox).not.toBeChecked()
    await user.click(checkbox)
    expect(checkbox).toBeChecked()
    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('shows validation error for empty username', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    await user.click(screen.getByRole('button', { name: /login/i }))
    expect(screen.getByText('Username is required')).toBeInTheDocument()
  })

  it('shows validation error for empty password', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    await user.click(screen.getByRole('button', { name: /login/i }))
    expect(screen.getByText('Password is required')).toBeInTheDocument()
  })

  it('submits without errors when fields are filled', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    await user.type(document.getElementById('username') as HTMLInputElement, 'admin')
    await user.type(document.getElementById('password') as HTMLInputElement, 'pass')
    await user.click(screen.getByRole('button', { name: /login/i }))
    expect(screen.queryByText('Username is required')).not.toBeInTheDocument()
    expect(screen.queryByText('Password is required')).not.toBeInTheDocument()
  })

  it('username input has correct placeholder', () => {
    render(<LoginForm />)
    const input = document.getElementById('username') as HTMLInputElement
    expect(input.placeholder).toBe('Enter username')
  })

  it('password input has correct placeholder', () => {
    render(<LoginForm />)
    const input = document.getElementById('password') as HTMLInputElement
    expect(input.placeholder).toBe('Enter password')
  })

  it('login button is full width and pill-shaped', () => {
    render(<LoginForm />)
    const btn = screen.getByRole('button', { name: /login/i })
    expect(btn.className).toContain('w-full')
    expect(btn.className).toContain('rounded-[25px]')
  })

  it('login button has green background', () => {
    render(<LoginForm />)
    const btn = screen.getByRole('button', { name: /login/i })
    expect(btn.className).toContain('bg-[var(--color-accent)]')
  })

  it('clears errors when valid input is provided after submit', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    // Submit empty → errors appear
    await user.click(screen.getByRole('button', { name: /login/i }))
    expect(screen.getByText('Username is required')).toBeInTheDocument()
    // Fill fields → errors should clear on next submit
    await user.type(document.getElementById('username') as HTMLInputElement, 'admin')
    await user.type(document.getElementById('password') as HTMLInputElement, 'pass')
    await user.click(screen.getByRole('button', { name: /login/i }))
    expect(screen.queryByText('Username is required')).not.toBeInTheDocument()
    expect(screen.queryByText('Password is required')).not.toBeInTheDocument()
  })
})
