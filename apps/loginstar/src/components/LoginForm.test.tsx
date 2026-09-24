import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginForm } from './LoginForm'

describe('LoginForm', () => {
  it('renders username input with placeholder', () => {
    render(<LoginForm />)
    const input = screen.getByPlaceholderText('Username')
    expect(input).toBeInTheDocument()
    expect(input).toBeInstanceOf(HTMLInputElement)
  })

  it('renders password input with placeholder', () => {
    render(<LoginForm />)
    const input = screen.getByPlaceholderText('Password')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'password')
  })

  it('renders Login button', () => {
    render(<LoginForm />)
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()
  })

  it('renders Remember me checkbox', () => {
    render(<LoginForm />)
    const checkbox = screen.getByRole('checkbox', { name: /remember me/i })
    expect(checkbox).toBeInTheDocument()
  })

  it('renders Forgot? link', () => {
    render(<LoginForm />)
    const link = screen.getByText('Forgot?')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#forgot')
  })

  it('accepts username input', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    const input = screen.getByPlaceholderText('Username')
    await user.type(input, 'admin')
    expect(input).toHaveValue('admin')
  })

  it('accepts password input', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    const input = screen.getByPlaceholderText('Password')
    await user.type(input, 'secret123')
    expect(input).toHaveValue('secret123')
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
    await user.type(screen.getByPlaceholderText('Username'), 'user')
    await user.type(screen.getByPlaceholderText('Password'), 'pass')
    await user.click(screen.getByRole('button', { name: /login/i }))
  })

  it('shows validation error when username is empty', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    await user.type(screen.getByPlaceholderText('Password'), 'pass')
    await user.click(screen.getByRole('button', { name: /login/i }))
    expect(screen.getByText('Username is required')).toBeInTheDocument()
  })

  it('shows validation error when password is empty', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    await user.type(screen.getByPlaceholderText('Username'), 'user')
    await user.click(screen.getByRole('button', { name: /login/i }))
    expect(screen.getByText('Password is required')).toBeInTheDocument()
  })

  it('shows both validation errors when both fields empty', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    await user.click(screen.getByRole('button', { name: /login/i }))
    expect(screen.getByText('Username is required')).toBeInTheDocument()
    expect(screen.getByText('Password is required')).toBeInTheDocument()
  })

  it('clears validation errors when fields are filled and submitted', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    await user.click(screen.getByRole('button', { name: /login/i }))
    expect(screen.getByText('Username is required')).toBeInTheDocument()
    await user.type(screen.getByPlaceholderText('Username'), 'user')
    await user.type(screen.getByPlaceholderText('Password'), 'pass')
    await user.click(screen.getByRole('button', { name: /login/i }))
    expect(screen.queryByText('Username is required')).not.toBeInTheDocument()
    expect(screen.queryByText('Password is required')).not.toBeInTheDocument()
  })

  it('button has purple background styling', () => {
    render(<LoginForm />)
    const btn = screen.getByRole('button', { name: /login/i })
    expect(btn.className).toContain('bg-[var(--color-brand-primary)]')
  })

  it('button text is uppercase', () => {
    render(<LoginForm />)
    const btn = screen.getByRole('button', { name: /login/i })
    expect(btn.className).toContain('uppercase')
  })

  it('button is full width', () => {
    render(<LoginForm />)
    const btn = screen.getByRole('button', { name: /login/i })
    expect(btn.className).toContain('w-full')
  })

  it('inputs have gray background', () => {
    render(<LoginForm />)
    const username = screen.getByPlaceholderText('Username')
    const password = screen.getByPlaceholderText('Password')
    expect(username.className).toContain('bg-[var(--color-brand-input-bg)]')
    expect(password.className).toContain('bg-[var(--color-brand-input-bg)]')
  })
})
