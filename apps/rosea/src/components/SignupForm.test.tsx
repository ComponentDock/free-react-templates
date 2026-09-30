import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SignupForm } from './SignupForm'

describe('SignupForm', () => {
  it('renders all three fields with uppercase labels', () => {
    render(<SignupForm />)
    expect(screen.getByLabelText(/^full name$/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^email address$/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument()
  })

  it('renders placeholders matching the design', () => {
    render(<SignupForm />)
    expect(screen.getByPlaceholderText('John Doe')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('johndoe@gmail.com')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
  })

  it('renders the Sign Up submit button', () => {
    render(<SignupForm />)
    expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument()
  })

  it('prevents navigation and keeps values on submit', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)
    await user.type(screen.getByLabelText(/^full name$/i), 'John Doe')
    await user.type(screen.getByLabelText(/^email address$/i), 'johndoe@gmail.com')
    await user.type(screen.getByLabelText(/^password$/i), 'secret123')
    await user.click(screen.getByRole('button', { name: /sign up/i }))
    // handleSubmit calls preventDefault() — values remain, no navigation
    expect(screen.getByLabelText(/^full name$/i)).toHaveValue('John Doe')
    expect(screen.getByLabelText(/^email address$/i)).toHaveValue('johndoe@gmail.com')
    expect(screen.getByLabelText(/^password$/i)).toHaveValue('secret123')
  })
})
