import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RegistrationCard } from './RegistrationCard'

describe('RegistrationCard', () => {
  it('renders the heading', () => {
    render(<RegistrationCard />)
    expect(screen.getByRole('heading', { name: /create account/i })).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<RegistrationCard />)
    expect(screen.getByText(/fill in the details below/i)).toBeInTheDocument()
  })

  it('renders all form fields', () => {
    render(<RegistrationCard />)
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument()
  })

  it('renders the register button', () => {
    render(<RegistrationCard />)
    expect(screen.getByRole('button', { name: /register/i })).toBeInTheDocument()
  })

  it('renders the side image', () => {
    render(<RegistrationCard />)
    expect(screen.getByRole('img', { name: /registration illustration/i })).toBeInTheDocument()
  })

  it('allows typing in form fields', async () => {
    const user = (await import('@testing-library/user-event')).default.setup()
    render(<RegistrationCard />)
    await user.type(screen.getByLabelText(/first name/i), 'John')
    expect(screen.getByLabelText(/first name/i)).toHaveValue('John')
  })

  it('submits without error', async () => {
    const user = (await import('@testing-library/user-event')).default.setup()
    render(<RegistrationCard />)
    await user.click(screen.getByRole('button', { name: /register/i }))
  })
})
