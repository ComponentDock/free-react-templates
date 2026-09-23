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

  it('renders Forgot Password link', () => {
    render(<LoginForm />)
    const link = screen.getByText('Forgot Password')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#forgot')
  })

  it('renders Get Started button', () => {
    render(<LoginForm />)
    expect(screen.getByRole('button', { name: /get started/i })).toBeInTheDocument()
  })

  it('renders Sign Up link', () => {
    render(<LoginForm />)
    const link = screen.getByText('Sign Up')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#signup')
  })

  it('renders account prompt text', () => {
    render(<LoginForm />)
    expect(screen.getByText(/don't have an account/i)).toBeInTheDocument()
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
    await user.click(screen.getByRole('button', { name: /get started/i }))
  })

  it('username has lucide User icon', () => {
    render(<LoginForm />)
    const input = document.getElementById('username') as HTMLInputElement
    expect(input.className).toContain('pl-[48px]')
  })

  it('password has lucide Lock icon', () => {
    render(<LoginForm />)
    const input = document.getElementById('password') as HTMLInputElement
    expect(input.className).toContain('pl-[48px]')
  })

  it('Get Started button has primary color', () => {
    render(<LoginForm />)
    const btn = screen.getByRole('button', { name: /get started/i })
    expect(btn.className).toContain('bg-[var(--color-primary)]')
  })

  it('Get Started button is full width', () => {
    render(<LoginForm />)
    const btn = screen.getByRole('button', { name: /get started/i })
    expect(btn.className).toContain('w-full')
  })

  it('username input is required', () => {
    render(<LoginForm />)
    const input = document.getElementById('username') as HTMLInputElement
    expect(input.required).toBe(true)
  })

  it('password input is required', () => {
    render(<LoginForm />)
    const input = document.getElementById('password') as HTMLInputElement
    expect(input.required).toBe(true)
  })
})
