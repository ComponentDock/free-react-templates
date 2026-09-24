import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginForm } from './LoginForm'

describe('LoginForm', () => {
  it('renders the Welcome heading', () => {
    render(<LoginForm />)
    expect(screen.getByRole('heading', { name: /welcome/i })).toBeInTheDocument()
  })

  it('renders user avatar with letter A', () => {
    render(<LoginForm />)
    const avatar = screen.getByRole('img', { name: /user avatar/i })
    expect(avatar).toBeInTheDocument()
    expect(avatar.textContent).toBe('A')
  })

  it('renders email input with label', () => {
    render(<LoginForm />)
    const input = document.getElementById('email') as HTMLInputElement
    expect(input).toBeInTheDocument()
    expect(input.type).toBe('email')
    expect(screen.getByLabelText('Email')).toBe(input)
  })

  it('renders password input with label', () => {
    render(<LoginForm />)
    const input = document.getElementById('password') as HTMLInputElement
    expect(input).toBeInTheDocument()
    expect(input.type).toBe('password')
    expect(screen.getByLabelText('Password')).toBe(input)
  })

  it('renders LOGIN button', () => {
    render(<LoginForm />)
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()
  })

  it('LOGIN button has gradient background', () => {
    render(<LoginForm />)
    const btn = screen.getByRole('button', { name: /login/i })
    expect(btn.className).toContain('bg-gradient-to-r')
  })

  it('LOGIN button is full width', () => {
    render(<LoginForm />)
    const btn = screen.getByRole('button', { name: /login/i })
    expect(btn.className).toContain('w-full')
  })

  it('LOGIN button is pill-shaped', () => {
    render(<LoginForm />)
    const btn = screen.getByRole('button', { name: /login/i })
    expect(btn.className).toContain('rounded-full')
  })

  it('accepts email input', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    const input = document.getElementById('email') as HTMLInputElement
    await user.type(input, 'test@example.com')
    expect(input.value).toBe('test@example.com')
  })

  it('accepts password input', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    const input = document.getElementById('password') as HTMLInputElement
    await user.type(input, 'secret123')
    expect(input.value).toBe('secret123')
  })

  it('password is hidden by default', () => {
    render(<LoginForm />)
    const input = document.getElementById('password') as HTMLInputElement
    expect(input.type).toBe('password')
  })

  it('shows password toggle button', () => {
    render(<LoginForm />)
    expect(screen.getByRole('button', { name: /show password/i })).toBeInTheDocument()
  })

  it('toggles password visibility on eye icon click', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    const input = document.getElementById('password') as HTMLInputElement
    const toggle = screen.getByRole('button', { name: /show password/i })
    expect(input.type).toBe('password')
    await user.click(toggle)
    expect(input.type).toBe('text')
    expect(screen.getByRole('button', { name: /hide password/i })).toBeInTheDocument()
  })

  it('toggles back to hidden on second click', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    const input = document.getElementById('password') as HTMLInputElement
    const toggle = screen.getByRole('button', { name: /show password/i })
    await user.click(toggle)
    await user.click(screen.getByRole('button', { name: /hide password/i }))
    expect(input.type).toBe('password')
  })

  it('form submits without error', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    await user.type(document.getElementById('email') as HTMLInputElement, 'user@test.com')
    await user.type(document.getElementById('password') as HTMLInputElement, 'pass')
    await user.click(screen.getByRole('button', { name: /login/i }))
  })

  it('email has gradient underline styling', () => {
    render(<LoginForm />)
    const gradient = document.querySelector('.bg-transparent + div, [style*="linear-gradient"]')
    expect(gradient).toBeInTheDocument()
  })
})
