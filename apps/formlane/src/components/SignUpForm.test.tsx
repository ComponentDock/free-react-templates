import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SignUpForm } from './SignUpForm'

describe('SignUpForm', () => {
  it('renders all form fields', () => {
    render(<SignUpForm onSubmit={vi.fn()} />)
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i, { selector: '#signup-password' })).toBeInTheDocument()
    expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument()
  })

  it('renders the register button', () => {
    render(<SignUpForm onSubmit={vi.fn()} />)
    expect(screen.getByRole('button', { name: /register/i })).toBeInTheDocument()
  })

  it('calls onSubmit when form is submitted', async () => {
    const onSubmit = vi.fn()
    const user = userEvent.setup()
    render(<SignUpForm onSubmit={onSubmit} />)

    await user.click(screen.getByRole('button', { name: /register/i }))
    expect(onSubmit).toHaveBeenCalledTimes(1)
  })

  it('allows typing in the username field', async () => {
    const user = userEvent.setup()
    render(<SignUpForm onSubmit={vi.fn()} />)

    const input = screen.getByLabelText(/username/i)
    await user.type(input, 'john_doe')
    expect(input).toHaveValue('john_doe')
  })

  it('allows typing in the email field', async () => {
    const user = userEvent.setup()
    render(<SignUpForm onSubmit={vi.fn()} />)

    const input = screen.getByLabelText(/e-mail/i)
    await user.type(input, 'john@example.com')
    expect(input).toHaveValue('john@example.com')
  })

  it('allows typing in the password field', async () => {
    const user = userEvent.setup()
    render(<SignUpForm onSubmit={vi.fn()} />)

    const input = screen.getByLabelText(/password/i, { selector: '#signup-password' })
    await user.type(input, 'secret123')
    expect(input).toHaveValue('secret123')
  })

  it('allows typing in the confirm password field', async () => {
    const user = userEvent.setup()
    render(<SignUpForm onSubmit={vi.fn()} />)

    const input = screen.getByLabelText(/confirm password/i)
    await user.type(input, 'secret123')
    expect(input).toHaveValue('secret123')
  })
})
