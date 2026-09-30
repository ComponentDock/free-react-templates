import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SignupForm } from './SignupForm'

describe('SignupForm', () => {
  it('renders all five fields with the design placeholders', () => {
    render(<SignupForm />)
    expect(screen.getByPlaceholderText('Full Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('johndoe@email.com')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('+01')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Website')).toBeInTheDocument()
  })

  it('renders visible labels associated with each input', () => {
    render(<SignupForm />)
    expect(screen.getByLabelText(/^full name$/i)).toHaveAttribute('id', 'fullname')
    expect(screen.getByLabelText(/^email address$/i)).toHaveAttribute('id', 'email')
    expect(screen.getByLabelText(/^phone no\.$/i)).toHaveAttribute('id', 'phone')
    expect(screen.getByLabelText(/^password$/i)).toHaveAttribute('id', 'password')
    expect(screen.getByLabelText(/^website$/i)).toHaveAttribute('id', 'website')
  })

  it('renders the password field as a password input', () => {
    render(<SignupForm />)
    expect(screen.getByPlaceholderText('Password')).toHaveAttribute('type', 'password')
  })

  it('renders label-left rows with the gray-fill borderless inputs', () => {
    render(<SignupForm />)
    const label = screen.getByText('Full Name')
    expect(label.className).toContain('w-[150px]')
    expect(label.className).toContain('font-medium')

    const input = screen.getByPlaceholderText('Full Name')
    expect(input.className).toContain('h-[50px]')
    expect(input.className).toContain('calc(100%_-_150px)')
    expect(input.className).toContain('rounded-[4px]')
    expect(input.className).toContain('bg-input-fill')
    expect(input.className).toContain('border-none')
  })

  it('renders the terms checkbox checked by default with a capitalized label', () => {
    render(<SignupForm />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeChecked()
    const label = screen.getByText(/i agree all statements in terms of service/i)
    expect(label.className).toContain('capitalize')
    expect(label.className).toContain('text-black/40')
  })

  it('toggles the terms checkbox on click', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)
    const checkbox = screen.getByRole('checkbox')
    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
    await user.click(checkbox)
    expect(checkbox).toBeChecked()
  })

  it('renders the black pill submit button that is not full width', () => {
    render(<SignupForm />)
    const button = screen.getByRole('button', { name: /create an account/i })
    expect(button).toHaveAttribute('type', 'submit')
    expect(button.className).toContain('rounded-[40px]')
    expect(button.className).toContain('bg-black')
    expect(button.className).toContain('text-white')
    expect(button.className).toContain('hover:bg-transparent')
    expect(button.className).toContain('hover:text-black')
    expect(button.className).not.toContain('w-full')
    expect(button.className).toContain('inline-block')
  })

  it('prevents navigation and keeps values on submit', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)
    await user.type(screen.getByLabelText(/^full name$/i), 'Ada Lovelace')
    await user.type(screen.getByLabelText(/^email address$/i), 'ada@email.com')
    await user.click(screen.getByRole('button', { name: /create an account/i }))
    expect(screen.getByLabelText(/^full name$/i)).toHaveValue('Ada Lovelace')
    expect(screen.getByLabelText(/^email address$/i)).toHaveValue('ada@email.com')
  })
})
