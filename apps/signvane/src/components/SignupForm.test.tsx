import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SignupForm } from './SignupForm'

describe('SignupForm', () => {
  it('renders all form fields with correct placeholders', () => {
    render(<SignupForm />)
    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email Address')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Confirm Password')).toBeInTheDocument()
  })

  it('renders the Sign Up submit button', () => {
    render(<SignupForm />)
    expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument()
  })

  it('updates input values on change', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)

    await user.type(screen.getByPlaceholderText('First Name'), 'Jane')
    expect(screen.getByPlaceholderText('First Name')).toHaveValue('Jane')
  })

  it('calls onSubmit with form data when submitted', async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn()
    render(<SignupForm onSubmit={onSubmit} />)

    await user.type(screen.getByPlaceholderText('First Name'), 'Jane')
    await user.type(screen.getByPlaceholderText('Last Name'), 'Smith')
    await user.type(screen.getByPlaceholderText('Email Address'), 'jane@test.com')
    await user.type(screen.getByPlaceholderText('Password'), 'pass123')
    await user.type(screen.getByPlaceholderText('Confirm Password'), 'pass123')
    await user.click(screen.getByRole('button', { name: /sign up/i }))

    expect(onSubmit).toHaveBeenCalledWith({
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane@test.com',
      password: 'pass123',
      confirmPassword: 'pass123',
    })
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)

    await user.click(screen.getByRole('button', { name: /sign up/i }))
  })

  it('has pill-shaped input styling', () => {
    render(<SignupForm />)
    const input = screen.getByPlaceholderText('First Name')
    expect(input).toHaveClass('rounded-[40px]')
  })

  it('has pill-shaped button styling', () => {
    render(<SignupForm />)
    const button = screen.getByRole('button', { name: /sign up/i })
    expect(button).toHaveClass('rounded-[40px]')
  })
})
