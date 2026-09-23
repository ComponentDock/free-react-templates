import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginForm } from './LoginForm'

describe('LoginForm', () => {
  it('renders the Sign In heading', () => {
    render(<LoginForm />)
    expect(screen.getByRole('heading', { name: /sign in/i })).toBeInTheDocument()
  })

  it('renders username input', () => {
    render(<LoginForm />)
    const input = document.getElementById('username') as HTMLInputElement
    expect(input).toBeInTheDocument()
    expect(input.type).toBe('text')
    expect(input.placeholder).toBe('Username')
  })

  it('renders password input', () => {
    render(<LoginForm />)
    const input = document.getElementById('password') as HTMLInputElement
    expect(input).toBeInTheDocument()
    expect(input.type).toBe('password')
    expect(input.placeholder).toBe('Password')
  })

  it('renders Remember Me checkbox checked by default', () => {
    render(<LoginForm />)
    const checkbox = screen.getByRole('checkbox', { name: /remember me/i })
    expect(checkbox).toBeChecked()
  })

  it('renders Forgot Password link', () => {
    render(<LoginForm />)
    const link = screen.getByText('Forgot Password')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#forgot')
  })

  it('renders Sign In button', () => {
    render(<LoginForm />)
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument()
  })

  it('renders social login buttons', () => {
    render(<LoginForm />)
    expect(screen.getByRole('link', { name: /login with facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /login with twitter/i })).toBeInTheDocument()
  })

  it('renders Sign Up link', () => {
    render(<LoginForm />)
    expect(screen.getByText('Sign Up')).toHaveAttribute('href', '#signup')
  })

  it('renders Not a member text', () => {
    render(<LoginForm />)
    expect(screen.getByText('Not a member?')).toBeInTheDocument()
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
    expect(checkbox).toBeChecked()
    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
    await user.click(checkbox)
    expect(checkbox).toBeChecked()
  })

  it('form submits without error', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    await user.type(document.getElementById('username') as HTMLInputElement, 'user')
    await user.type(document.getElementById('password') as HTMLInputElement, 'pass')
    await user.click(screen.getByRole('button', { name: /sign in/i }))
  })

  it('social buttons have correct aria labels', () => {
    render(<LoginForm />)
    expect(screen.getByRole('link', { name: /login with facebook/i })).toHaveAttribute(
      'aria-label',
      'Login with Facebook',
    )
    expect(screen.getByRole('link', { name: /login with twitter/i })).toHaveAttribute(
      'aria-label',
      'Login with Twitter',
    )
  })

  it('social buttons are circular', () => {
    render(<LoginForm />)
    const fb = screen.getByRole('link', { name: /login with facebook/i })
    expect(fb.className).toContain('rounded-full')
  })

  it('Sign In button is full width and rounded pill', () => {
    render(<LoginForm />)
    const btn = screen.getByRole('button', { name: /sign in/i })
    expect(btn.className).toContain('w-full')
    expect(btn.className).toContain('rounded-[25px]')
  })

  it('Sign In button has teal primary color', () => {
    render(<LoginForm />)
    const btn = screen.getByRole('button', { name: /sign in/i })
    expect(btn.className).toContain('bg-[var(--color-primary)]')
  })

  it('password toggle shows eye icon by default', () => {
    render(<LoginForm />)
    const toggle = screen.getByRole('button', { name: /show password/i })
    expect(toggle).toBeInTheDocument()
  })

  it('password toggle switches to hide on click', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    const toggle = screen.getByRole('button', { name: /show password/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /hide password/i })).toBeInTheDocument()
    const input = document.getElementById('password') as HTMLInputElement
    expect(input.type).toBe('text')
  })

  it('password toggle switches back to show on second click', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    const toggle = screen.getByRole('button', { name: /show password/i })
    await user.click(toggle)
    const hideToggle = screen.getByRole('button', { name: /hide password/i })
    await user.click(hideToggle)
    expect(screen.getByRole('button', { name: /show password/i })).toBeInTheDocument()
    const input = document.getElementById('password') as HTMLInputElement
    expect(input.type).toBe('password')
  })
})
