import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RegistrationCard } from './RegistrationCard'

describe('RegistrationCard', () => {
  it('renders the information heading', () => {
    render(<RegistrationCard />)
    expect(screen.getByRole('heading', { level: 2, name: /INFOMATION/i })).toBeInTheDocument()
  })

  it('renders the register form heading', () => {
    render(<RegistrationCard />)
    expect(screen.getByRole('heading', { level: 2, name: /REGISTER FORM/i })).toBeInTheDocument()
  })

  it('renders all form fields', () => {
    render(<RegistrationCard />)
    expect(screen.getByLabelText('First Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Your Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
    expect(screen.getByLabelText('Confirm Password')).toBeInTheDocument()
  })

  it('renders the Terms and Conditions checkbox', () => {
    render(<RegistrationCard />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toBeRequired()
  })

  it('renders the Register button', () => {
    render(<RegistrationCard />)
    expect(screen.getByRole('button', { name: /register/i })).toBeInTheDocument()
  })

  it('renders the Have An Account button', () => {
    render(<RegistrationCard />)
    expect(screen.getByRole('button', { name: /have an account/i })).toBeInTheDocument()
  })

  it('prevents default form submission when clicking Register', () => {
    const { container } = render(<RegistrationCard />)

    const form = container.querySelector('form')
    expect(form).toBeInTheDocument()

    const submitEvent = new Event('submit', { bubbles: true, cancelable: true })
    const preventDefault = vi.fn()
    Object.defineProperty(submitEvent, 'preventDefault', { value: preventDefault })
    form!.dispatchEvent(submitEvent)

    expect(preventDefault).toHaveBeenCalled()
  })

  it('allows typing in form fields', async () => {
    const { userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()
    render(<RegistrationCard />)

    const firstNameInput = screen.getByLabelText('First Name')
    await user.type(firstNameInput, 'John')
    expect(firstNameInput).toHaveValue('John')
  })

  it('renders password inputs as password type', () => {
    render(<RegistrationCard />)
    expect(screen.getByLabelText('Password')).toHaveAttribute('type', 'password')
    expect(screen.getByLabelText('Confirm Password')).toHaveAttribute('type', 'password')
  })

  it('renders the email input as email type', () => {
    render(<RegistrationCard />)
    expect(screen.getByLabelText('Your Email')).toHaveAttribute('type', 'email')
  })

  it('renders the information description text', () => {
    render(<RegistrationCard />)
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
    expect(screen.getByText(/Eu ultrices:/)).toBeInTheDocument()
  })
})
