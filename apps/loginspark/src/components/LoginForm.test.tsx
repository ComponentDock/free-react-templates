import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginForm } from './LoginForm'

describe('LoginForm', () => {
  it('renders email input', () => {
    render(<LoginForm />)
    const input = document.getElementById('email') as HTMLInputElement
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

  it('renders Forgot Username / Password link', () => {
    render(<LoginForm />)
    const link = screen.getByText('Username / Password?')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#forgot')
  })

  it('renders Create your Account link', () => {
    render(<LoginForm />)
    const link = screen.getByText(/create your account/i)
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#register')
  })

  it('accepts email input', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    const input = document.getElementById('email') as HTMLInputElement
    await user.type(input, 'user@example.com')
    expect(input.value).toBe('user@example.com')
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
    await user.type(document.getElementById('email') as HTMLInputElement, 'user@test.com')
    await user.type(document.getElementById('password') as HTMLInputElement, 'pass')
    await user.click(screen.getByRole('button', { name: /login/i }))
  })

  it('email input is pill-shaped', () => {
    render(<LoginForm />)
    const input = document.getElementById('email') as HTMLInputElement
    expect(input.className).toContain('rounded-full')
  })

  it('password input is pill-shaped', () => {
    render(<LoginForm />)
    const input = document.getElementById('password') as HTMLInputElement
    expect(input.className).toContain('rounded-full')
  })

  it('login button is pill-shaped with green background', () => {
    render(<LoginForm />)
    const btn = screen.getByRole('button', { name: /login/i })
    expect(btn.className).toContain('rounded-full')
    expect(btn.className).toContain('bg-[var(--color-accent)]')
  })

  it('login button text is uppercase', () => {
    render(<LoginForm />)
    const btn = screen.getByRole('button', { name: /login/i })
    expect(btn.className).toContain('uppercase')
  })

  it('login button is full width', () => {
    render(<LoginForm />)
    const btn = screen.getByRole('button', { name: /login/i })
    expect(btn.className).toContain('w-full')
  })

  it('email input has placeholder', () => {
    render(<LoginForm />)
    const input = document.getElementById('email') as HTMLInputElement
    expect(input.placeholder).toBe('Email')
  })

  it('password input has placeholder', () => {
    render(<LoginForm />)
    const input = document.getElementById('password') as HTMLInputElement
    expect(input.placeholder).toBe('Password')
  })
})
