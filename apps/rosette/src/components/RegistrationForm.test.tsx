import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RegistrationForm } from './RegistrationForm'

describe('RegistrationForm', () => {
  it('renders the Sign Up heading', () => {
    render(<RegistrationForm />)
    expect(screen.getByRole('heading', { name: /sign up/i })).toBeInTheDocument()
  })

  it('renders all three input fields', () => {
    render(<RegistrationForm />)
    expect(screen.getByPlaceholderText('NAME')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('E-MAIL')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('PASSWORD')).toBeInTheDocument()
  })

  it('renders the SIGN UP button', () => {
    render(<RegistrationForm />)
    expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument()
  })

  it('renders the Terms & Conditions link', () => {
    render(<RegistrationForm />)
    expect(screen.getByText(/terms & conditions/i)).toBeInTheDocument()
  })

  it('renders the Login link', () => {
    render(<RegistrationForm />)
    expect(screen.getByText('Login')).toBeInTheDocument()
  })

  it('renders the Already Have account text', () => {
    render(<RegistrationForm />)
    expect(screen.getByText(/already have account/i)).toBeInTheDocument()
  })

  it('renders three dot indicators', () => {
    const { container } = render(<RegistrationForm />)
    const dots = container.querySelectorAll('.bg-dot')
    expect(dots.length).toBe(3)
  })

  it('allows typing in the name field', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)
    await user.type(screen.getByPlaceholderText('NAME'), 'Jane')
    expect(screen.getByPlaceholderText('NAME')).toHaveValue('Jane')
  })

  it('allows typing in the email field', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)
    await user.type(screen.getByPlaceholderText('E-MAIL'), 'jane@test.com')
    expect(screen.getByPlaceholderText('E-MAIL')).toHaveValue('jane@test.com')
  })

  it('allows typing in the password field', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)
    await user.type(screen.getByPlaceholderText('PASSWORD'), 'secret')
    expect(screen.getByPlaceholderText('PASSWORD')).toHaveValue('secret')
  })

  it('allows toggling the terms checkbox', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).not.toBeChecked()
    await user.click(checkbox)
    expect(checkbox).toBeChecked()
    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('submits without error', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)
    await user.click(screen.getByRole('button', { name: /sign up/i }))
  })

  it('renders the submit button with brand styling', () => {
    render(<RegistrationForm />)
    const button = screen.getByRole('button', { name: /sign up/i })
    expect(button).toHaveClass('bg-brand')
    expect(button).toHaveClass('text-white')
  })

  it('renders the heading with the correct font', () => {
    render(<RegistrationForm />)
    const heading = screen.getByRole('heading', { name: /sign up/i })
    expect(heading).toHaveClass('text-brand')
  })

  it('renders inputs with rounded-full styling', () => {
    render(<RegistrationForm />)
    const nameInput = screen.getByPlaceholderText('NAME')
    expect(nameInput).toHaveClass('rounded-full')
  })

  it('renders the terms agreement text with plus symbol', () => {
    render(<RegistrationForm />)
    expect(screen.getByText('+')).toBeInTheDocument()
    expect(screen.getByText(/i agree all statement/i)).toBeInTheDocument()
  })
})
