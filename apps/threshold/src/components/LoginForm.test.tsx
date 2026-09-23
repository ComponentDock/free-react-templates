import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginForm } from './LoginForm'

describe('LoginForm', () => {
  it('renders the Welcome Back heading', () => {
    render(<LoginForm />)
    expect(screen.getByRole('heading', { name: /welcome back/i })).toBeInTheDocument()
  })

  it('renders the subtitle text', () => {
    render(<LoginForm />)
    expect(screen.getByText(/enter your credentials/i)).toBeInTheDocument()
  })

  it('renders username input', () => {
    render(<LoginForm />)
    expect(screen.getByLabelText('Username')).toBeInTheDocument()
  })

  it('renders password input', () => {
    render(<LoginForm />)
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
  })

  it('password field is masked', () => {
    render(<LoginForm />)
    expect(screen.getByLabelText('Password')).toHaveAttribute('type', 'password')
  })

  it('renders remember me checkbox', () => {
    render(<LoginForm />)
    expect(screen.getByRole('checkbox', { name: /remember me/i })).toBeInTheDocument()
  })

  it('checkbox is unchecked by default', () => {
    render(<LoginForm />)
    expect(screen.getByRole('checkbox', { name: /remember me/i })).not.toBeChecked()
  })

  it('toggles remember me checkbox', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    const checkbox = screen.getByRole('checkbox', { name: /remember me/i })
    await user.click(checkbox)
    expect(checkbox).toBeChecked()
    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('renders forgot password link', () => {
    render(<LoginForm />)
    const link = screen.getByText('Forgot Password')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#forgot')
  })

  it('renders Log In button', () => {
    render(<LoginForm />)
    expect(screen.getByRole('button', { name: /log in/i })).toBeInTheDocument()
  })

  it('submits form without navigation', async () => {
    const user = userEvent.setup()
    const preventDefault = vi.fn()
    HTMLFormElement.prototype.preventDefault = preventDefault
    render(<LoginForm />)
    await user.type(screen.getByLabelText('Username'), 'testuser')
    await user.type(screen.getByLabelText('Password'), 'secret123')
    await user.click(screen.getByRole('button', { name: /log in/i }))
  })
})
