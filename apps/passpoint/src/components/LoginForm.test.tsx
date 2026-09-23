import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginForm } from './LoginForm'

describe('LoginForm', () => {
  it('renders the Sign In to Passpoint heading', () => {
    render(<LoginForm />)
    expect(screen.getByRole('heading', { name: /sign in to passpoint/i })).toBeInTheDocument()
  })

  it('renders the subtitle text', () => {
    render(<LoginForm />)
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
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

  it('renders remember me checkbox checked by default', () => {
    render(<LoginForm />)
    const checkbox = screen.getByLabelText('Remember me')
    expect(checkbox).toBeChecked()
  })

  it('renders Forgot Password link', () => {
    render(<LoginForm />)
    const link = screen.getByText('Forgot Password')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#forgot')
  })

  it('renders Log In button', () => {
    render(<LoginForm />)
    expect(screen.getByRole('button', { name: /log in/i })).toBeInTheDocument()
  })

  it('renders the divider text', () => {
    render(<LoginForm />)
    expect(screen.getByText('or sign in with')).toBeInTheDocument()
  })

  it('renders social login buttons', () => {
    render(<LoginForm />)
    expect(screen.getByRole('link', { name: /login with facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /login with twitter/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /login with google/i })).toBeInTheDocument()
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
    const checkbox = screen.getByLabelText('Remember me')
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
    await user.click(screen.getByRole('button', { name: /log in/i }))
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
    expect(screen.getByRole('link', { name: /login with google/i })).toHaveAttribute(
      'aria-label',
      'Login with Google',
    )
  })

  it('social buttons are circular', () => {
    render(<LoginForm />)
    const fb = screen.getByRole('link', { name: /login with facebook/i })
    expect(fb.className).toContain('rounded-full')
  })

  it('Log In button has blue background color', () => {
    render(<LoginForm />)
    const btn = screen.getByRole('button', { name: /log in/i })
    expect(btn.className).toContain('bg-[var(--color-btn-primary)]')
  })

  it('Log In button is full width', () => {
    render(<LoginForm />)
    const btn = screen.getByRole('button', { name: /log in/i })
    expect(btn.className).toContain('w-full')
  })

  it('Log In button has 54px height', () => {
    render(<LoginForm />)
    const btn = screen.getByRole('button', { name: /log in/i })
    expect(btn.className).toContain('h-[54px]')
  })

  it('social buttons have 50x50 size', () => {
    render(<LoginForm />)
    const fb = screen.getByRole('link', { name: /login with facebook/i })
    expect(fb.className).toContain('h-[50px]')
    expect(fb.className).toContain('w-[50px]')
  })
})
