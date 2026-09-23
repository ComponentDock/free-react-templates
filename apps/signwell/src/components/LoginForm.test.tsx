import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginForm } from './LoginForm'

describe('LoginForm', () => {
  it('renders username input', () => {
    render(<LoginForm />)
    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument()
  })

  it('renders password input', () => {
    render(<LoginForm />)
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
  })

  it('renders remember me checkbox unchecked by default', () => {
    render(<LoginForm />)
    const checkbox = screen.getByRole('checkbox', { name: /remember me/i })
    expect(checkbox).not.toBeChecked()
  })

  it('toggles remember me checkbox', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)
    const checkbox = screen.getByRole('checkbox', { name: /remember me/i })
    await user.click(checkbox)
    expect(checkbox).toBeChecked()
  })

  it('renders forgot password link', () => {
    render(<LoginForm />)
    expect(screen.getByRole('link', { name: /forgot password/i })).toHaveAttribute('href', '#')
  })

  it('renders log in button', () => {
    render(<LoginForm />)
    expect(screen.getByRole('button', { name: /log in/i })).toBeInTheDocument()
  })

  it('prevents form submission', async () => {
    const user = userEvent.setup()
    render(<LoginForm />)

    await user.type(screen.getByPlaceholderText('Username'), 'testuser')
    await user.type(screen.getByPlaceholderText('Password'), 'testpass')
    await user.click(screen.getByRole('button', { name: /log in/i }))

    // Form should not navigate (no page reload)
    expect(screen.getByPlaceholderText('Username')).toHaveValue('testuser')
  })
})
