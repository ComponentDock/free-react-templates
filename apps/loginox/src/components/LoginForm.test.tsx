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

  it('renders Sign In button', () => {
    render(<LoginForm />)
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument()
  })

  it('renders Remember Me checkbox checked by default', () => {
    render(<LoginForm />)
    const checkbox = document.getElementById('remember-me') as HTMLInputElement
    expect(checkbox).toBeInTheDocument()
    expect(checkbox.checked).toBe(true)
  })

  it('renders Forgot Password link', () => {
    render(<LoginForm />)
    const link = screen.getByText('Forgot Password')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#forgot')
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

  it('form submits without error', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    await user.type(document.getElementById('username') as HTMLInputElement, 'user')
    await user.type(document.getElementById('password') as HTMLInputElement, 'pass')
    await user.click(screen.getByRole('button', { name: /sign in/i }))
  })

  it('shows password when eye icon clicked', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    const input = document.getElementById('password') as HTMLInputElement
    expect(input.type).toBe('password')

    const eyeButton = screen.getByRole('button', { name: /show password/i })
    await user.click(eyeButton)
    expect(input.type).toBe('text')
  })

  it('hides password when eye icon clicked again', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    const input = document.getElementById('password') as HTMLInputElement
    const eyeButton = screen.getByRole('button', { name: /show password/i })
    await user.click(eyeButton)
    expect(input.type).toBe('text')

    const hideButton = screen.getByRole('button', { name: /hide password/i })
    await user.click(hideButton)
    expect(input.type).toBe('password')
  })

  it('username input is pill-shaped', () => {
    render(<LoginForm />)
    const input = document.getElementById('username') as HTMLInputElement
    expect(input.className).toContain('rounded-full')
  })

  it('password input is pill-shaped', () => {
    render(<LoginForm />)
    const input = document.getElementById('password') as HTMLInputElement
    expect(input.className).toContain('rounded-full')
  })

  it('submit button is pill-shaped with peach background', () => {
    render(<LoginForm />)
    const btn = screen.getByRole('button', { name: /sign in/i })
    expect(btn.className).toContain('rounded-full')
    expect(btn.className).toContain('bg-[var(--color-primary)]')
  })

  it('submit button text is uppercase', () => {
    render(<LoginForm />)
    const btn = screen.getByRole('button', { name: /sign in/i })
    expect(btn.className).toContain('uppercase')
  })

  it('submit button is full width', () => {
    render(<LoginForm />)
    const btn = screen.getByRole('button', { name: /sign in/i })
    expect(btn.className).toContain('w-full')
  })

  it('checkbox is accent colored', () => {
    render(<LoginForm />)
    const checkbox = document.getElementById('remember-me') as HTMLInputElement
    expect(checkbox.className).toContain('accent-[var(--color-primary)]')
  })

  it('checkbox can be toggled off', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    const checkbox = document.getElementById('remember-me') as HTMLInputElement
    expect(checkbox.checked).toBe(true)
    await user.click(checkbox)
    expect(checkbox.checked).toBe(false)
  })
})
