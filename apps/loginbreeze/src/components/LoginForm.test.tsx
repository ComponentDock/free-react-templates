import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginForm } from './LoginForm'

describe('LoginForm', () => {
  it('renders the Log In heading', () => {
    render(<LoginForm />)
    expect(screen.getByRole('heading', { name: /log in/i })).toBeInTheDocument()
  })

  it('renders username input with placeholder', () => {
    render(<LoginForm />)
    const input = document.getElementById('username') as HTMLInputElement
    expect(input).toBeInTheDocument()
    expect(input.type).toBe('text')
    expect(input.placeholder).toBe('Username')
  })

  it('renders password input with placeholder', () => {
    render(<LoginForm />)
    const input = document.getElementById('password') as HTMLInputElement
    expect(input).toBeInTheDocument()
    expect(input.type).toBe('password')
    expect(input.placeholder).toBe('Password')
  })

  it('renders remember me checkbox unchecked by default', () => {
    render(<LoginForm />)
    const checkbox = screen.getByLabelText('Remember me')
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
    expect(checkbox).not.toBeChecked()
    await user.click(checkbox)
    expect(checkbox).toBeChecked()
    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('form submits without error', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    await user.type(document.getElementById('username') as HTMLInputElement, 'user')
    await user.type(document.getElementById('password') as HTMLInputElement, 'pass')
    await user.click(screen.getByRole('button', { name: /login/i }))
  })

  it('card has gradient background', () => {
    render(<LoginForm />)
    const card = document.querySelector('.bg-gradient-to-br')
    expect(card).toBeInTheDocument()
  })

  it('Login button is white with rounded pill shape', () => {
    render(<LoginForm />)
    const btn = screen.getByRole('button', { name: /login/i })
    expect(btn.className).toContain('bg-white')
    expect(btn.className).toContain('rounded-full')
  })

  it('Login button is full width', () => {
    render(<LoginForm />)
    const btn = screen.getByRole('button', { name: /login/i })
    expect(btn.className).toContain('w-full')
  })

  it('username input has underline-style border', () => {
    render(<LoginForm />)
    const input = document.getElementById('username') as HTMLInputElement
    expect(input.closest('.border-b')).toBeInTheDocument()
  })

  it('password input has underline-style border', () => {
    render(<LoginForm />)
    const input = document.getElementById('password') as HTMLInputElement
    expect(input.closest('.border-b')).toBeInTheDocument()
  })

  it('logo icon is rendered', () => {
    render(<LoginForm />)
    const logo = document.querySelector('.bg-white\\/90')
    expect(logo).toBeInTheDocument()
  })
})
