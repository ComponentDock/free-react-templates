import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginForm } from './LoginForm'

describe('LoginForm', () => {
  it('renders the Login heading', () => {
    render(<LoginForm />)
    expect(screen.getByText('Login', { selector: 'span' })).toBeInTheDocument()
  })

  it('renders email input', () => {
    render(<LoginForm />)
    const input = document.getElementById('email') as HTMLInputElement
    expect(input).toBeInTheDocument()
    expect(input.type).toBe('email')
  })

  it('renders password input', () => {
    render(<LoginForm />)
    const input = document.getElementById('password') as HTMLInputElement
    expect(input).toBeInTheDocument()
    expect(input.type).toBe('password')
  })

  it('renders Remember me checkbox unchecked by default', () => {
    render(<LoginForm />)
    const checkbox = screen.getByRole('checkbox', { name: /remember me/i })
    expect(checkbox).not.toBeChecked()
  })

  it('renders Login button', () => {
    render(<LoginForm />)
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()
  })

  it('renders Or login with text', () => {
    render(<LoginForm />)
    expect(screen.getByText('Or login with')).toBeInTheDocument()
  })

  it('renders social login buttons', () => {
    render(<LoginForm />)
    expect(screen.getByRole('link', { name: /login with facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /login with google/i })).toBeInTheDocument()
  })

  it('renders Sign up now link', () => {
    render(<LoginForm />)
    const link = screen.getByText('Sign up now')
    expect(link).toHaveAttribute('href', '#signup')
  })

  it('renders Not a member text', () => {
    render(<LoginForm />)
    expect(screen.getByText(/Not a member/)).toBeInTheDocument()
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

  it('form submits without error', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    await user.type(document.getElementById('email') as HTMLInputElement, 'user@test.com')
    await user.type(document.getElementById('password') as HTMLInputElement, 'pass')
    await user.click(screen.getByRole('button', { name: /login/i }))
  })

  it('social buttons have correct aria labels', () => {
    render(<LoginForm />)
    expect(screen.getByRole('link', { name: /login with facebook/i })).toHaveAttribute(
      'aria-label',
      'Login with Facebook',
    )
    expect(screen.getByRole('link', { name: /login with google/i })).toHaveAttribute(
      'aria-label',
      'Login with Google',
    )
  })

  it('Facebook button is blue', () => {
    render(<LoginForm />)
    const fb = screen.getByRole('link', { name: /login with facebook/i })
    expect(fb.className).toContain('text-[var(--color-facebook)]')
  })

  it('Google button is gray', () => {
    render(<LoginForm />)
    const google = screen.getByRole('link', { name: /login with google/i })
    expect(google.className).toContain('text-[var(--color-google)]')
  })

  it('Login button has pink primary color', () => {
    render(<LoginForm />)
    const btn = screen.getByRole('button', { name: /login/i })
    expect(btn.className).toContain('bg-[var(--color-primary)]')
  })

  it('Login button is full width', () => {
    render(<LoginForm />)
    const btn = screen.getByRole('button', { name: /login/i })
    expect(btn.className).toContain('w-full')
  })

  it('Login button is uppercase', () => {
    render(<LoginForm />)
    const btn = screen.getByRole('button', { name: /login/i })
    expect(btn.className).toContain('uppercase')
  })

  it('email input has required attribute', () => {
    render(<LoginForm />)
    const input = document.getElementById('email') as HTMLInputElement
    expect(input).toBeRequired()
  })

  it('password input has required attribute', () => {
    render(<LoginForm />)
    const input = document.getElementById('password') as HTMLInputElement
    expect(input).toBeRequired()
  })

  it('social buttons have bordered style', () => {
    render(<LoginForm />)
    const fb = screen.getByRole('link', { name: /login with facebook/i })
    expect(fb.className).toContain('border')
    const google = screen.getByRole('link', { name: /login with google/i })
    expect(google.className).toContain('border')
  })
})
