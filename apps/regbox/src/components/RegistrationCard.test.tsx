import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RegistrationCard } from './RegistrationCard'

describe('RegistrationCard', () => {
  it('renders the heading', () => {
    render(<RegistrationCard />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('New Account?')
  })

  it('renders all five form fields', () => {
    render(<RegistrationCard />)
    expect(screen.getByLabelText('Username')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone Number')).toBeInTheDocument()
    expect(screen.getByLabelText('Mail')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
    expect(screen.getByLabelText('Confirm Password')).toBeInTheDocument()
  })

  it('renders the Register button', () => {
    render(<RegistrationCard />)
    expect(screen.getByRole('button', { name: /register/i })).toBeInTheDocument()
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

  it('renders decorative images with aria-hidden', () => {
    render(<RegistrationCard />)
    const images = screen.getAllByRole('presentation', { hidden: true })
    expect(images.length).toBeGreaterThanOrEqual(2)
  })

  it('allows typing in form fields', async () => {
    const { userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()
    render(<RegistrationCard />)

    const usernameInput = screen.getByLabelText('Username')
    await user.type(usernameInput, 'testuser')
    expect(usernameInput).toHaveValue('testuser')
  })

  it('renders password inputs as password type', () => {
    render(<RegistrationCard />)
    expect(screen.getByLabelText('Password')).toHaveAttribute('type', 'password')
    expect(screen.getByLabelText('Confirm Password')).toHaveAttribute('type', 'password')
  })

  it('renders the email input as email type', () => {
    render(<RegistrationCard />)
    expect(screen.getByLabelText('Mail')).toHaveAttribute('type', 'email')
  })
})
