import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SignInForm } from './SignInForm'

describe('SignInForm', () => {
  it('renders all form fields', () => {
    render(<SignInForm onSubmit={vi.fn()} />)
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i, { selector: '#signin-password' })).toBeInTheDocument()
    expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument()
  })

  it('renders the sign in button', () => {
    render(<SignInForm onSubmit={vi.fn()} />)
    expect(screen.getByRole('button', { name: /^sign in$/i })).toBeInTheDocument()
  })

  it('calls onSubmit when form is submitted', async () => {
    const onSubmit = vi.fn()
    const user = userEvent.setup()
    render(<SignInForm onSubmit={onSubmit} />)

    await user.click(screen.getByRole('button', { name: /^sign in$/i }))
    expect(onSubmit).toHaveBeenCalledTimes(1)
  })

  it('allows typing in the username field', async () => {
    const user = userEvent.setup()
    render(<SignInForm onSubmit={vi.fn()} />)

    const input = screen.getByLabelText(/username/i)
    await user.type(input, 'jane_doe')
    expect(input).toHaveValue('jane_doe')
  })

  it('allows typing in the email field', async () => {
    const user = userEvent.setup()
    render(<SignInForm onSubmit={vi.fn()} />)

    const input = screen.getByLabelText(/e-mail/i)
    await user.type(input, 'jane@example.com')
    expect(input).toHaveValue('jane@example.com')
  })

  it('allows typing in the password field', async () => {
    const user = userEvent.setup()
    render(<SignInForm onSubmit={vi.fn()} />)

    const input = screen.getByLabelText(/password/i, { selector: '#signin-password' })
    await user.type(input, 'secret456')
    expect(input).toHaveValue('secret456')
  })

  it('allows typing in the confirm password field', async () => {
    const user = userEvent.setup()
    render(<SignInForm onSubmit={vi.fn()} />)

    const input = screen.getByLabelText(/confirm password/i)
    await user.type(input, 'secret456')
    expect(input).toHaveValue('secret456')
  })
})
