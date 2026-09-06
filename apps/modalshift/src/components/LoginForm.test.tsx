import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginForm } from './LoginForm'

describe('LoginForm', () => {
  it('renders all form fields and buttons', () => {
    const onSubmit = vi.fn()
    render(<LoginForm onSubmit={onSubmit} />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Log In')
    expect(screen.getByLabelText(/username or email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()
  })

  it('renders forgot password link', () => {
    const onSubmit = vi.fn()
    render(<LoginForm onSubmit={onSubmit} />)

    expect(screen.getByRole('link', { name: /forgot password/i })).toBeInTheDocument()
  })

  it('renders sign-up note', () => {
    const onSubmit = vi.fn()
    render(<LoginForm onSubmit={onSubmit} />)

    expect(screen.getByText(/if you don't have account yet/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign up here/i })).toBeInTheDocument()
  })

  it('calls onSubmit with form data', async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn()
    render(<LoginForm onSubmit={onSubmit} />)

    await user.type(screen.getByLabelText(/username or email/i), 'test@example.com')
    await user.type(screen.getByLabelText(/password/i), 'password123')
    await user.click(screen.getByRole('button', { name: /login/i }))

    expect(onSubmit).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password123',
    })
  })

  it('does not call onSubmit when fields are empty', async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn()
    render(<LoginForm onSubmit={onSubmit} />)

    await user.click(screen.getByRole('button', { name: /login/i }))
    expect(onSubmit).not.toHaveBeenCalled()
  })

  it('does not call onSubmit when only email is provided', async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn()
    render(<LoginForm onSubmit={onSubmit} />)

    await user.type(screen.getByLabelText(/username or email/i), 'test@example.com')
    await user.click(screen.getByRole('button', { name: /login/i }))
    expect(onSubmit).not.toHaveBeenCalled()
  })

  it('does not call onSubmit when only password is provided', async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn()
    render(<LoginForm onSubmit={onSubmit} />)

    await user.type(screen.getByLabelText(/password/i), 'password123')
    await user.click(screen.getByRole('button', { name: /login/i }))
    expect(onSubmit).not.toHaveBeenCalled()
  })
})
