import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SignupForm } from './SignupForm'

describe('SignupForm', () => {
  it('renders all four fields with the design placeholders', () => {
    render(<SignupForm />)
    expect(screen.getByPlaceholderText('John Doe')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('johndoe@gmail.com')).toBeInTheDocument()
    expect(screen.getAllByPlaceholderText('Password')).toHaveLength(2)
  })

  it('renders visible uppercase labels associated with each field', () => {
    render(<SignupForm />)
    expect(screen.getByLabelText(/^full name$/i)).toHaveAttribute('id', 'fullname')
    expect(screen.getByLabelText(/^email address$/i)).toHaveAttribute('id', 'email')
    expect(screen.getByLabelText(/^password$/i)).toHaveAttribute('id', 'password')
    expect(screen.getByLabelText(/^confirm password$/i)).toHaveAttribute('id', 'password-confirm')
  })

  it('renders white left icons per field (user / send / lock / lock)', () => {
    const { container } = render(<SignupForm />)
    expect(container.querySelectorAll('svg.lucide-user')).toHaveLength(1)
    expect(container.querySelectorAll('svg.lucide-send')).toHaveLength(1)
    expect(container.querySelectorAll('svg.lucide-lock')).toHaveLength(2)
  })

  it('renders pill inputs and a pill submit button with the outline hover', () => {
    render(<SignupForm />)
    const input = screen.getByPlaceholderText('John Doe')
    expect(input.className).toContain('rounded-[40px]')
    expect(input.className).toContain('border-white/30')
    expect(input.className).toContain('pl-10')

    const button = screen.getByRole('button', { name: /^sign up$/i })
    expect(button).toHaveAttribute('type', 'submit')
    expect(button.className).toContain('rounded-[40px]')
    expect(button.className).toContain('bg-accent')
    expect(button.className).toContain('hover:bg-transparent')
    expect(button.className).toContain('hover:text-accent')
  })

  it('prevents navigation and keeps values on submit', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)
    await user.type(screen.getByLabelText(/^full name$/i), 'John Doe')
    await user.type(screen.getByLabelText(/^email address$/i), 'johndoe@gmail.com')
    await user.type(screen.getByLabelText(/^password$/i), 'secret123')
    await user.type(screen.getByLabelText(/^confirm password$/i), 'secret123')
    await user.click(screen.getByRole('button', { name: /^sign up$/i }))
    // handleSubmit calls preventDefault() — values remain, no navigation
    expect(screen.getByLabelText(/^full name$/i)).toHaveValue('John Doe')
    expect(screen.getByLabelText(/^email address$/i)).toHaveValue('johndoe@gmail.com')
    expect(screen.getByLabelText(/^password$/i)).toHaveValue('secret123')
    expect(screen.getByLabelText(/^confirm password$/i)).toHaveValue('secret123')
  })
})
