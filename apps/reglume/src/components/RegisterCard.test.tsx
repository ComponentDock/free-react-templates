import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RegisterCard } from './RegisterCard'

describe('RegisterCard', () => {
  it('renders the form heading', () => {
    render(<RegisterCard />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent(/register account form/i)
  })

  it('renders all three form fields with correct labels', () => {
    render(<RegisterCard />)
    expect(screen.getByLabelText('Full Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Your Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
  })

  it('renders the password field with password type', () => {
    render(<RegisterCard />)
    const passwordInput = screen.getByLabelText('Password')
    expect(passwordInput).toHaveAttribute('type', 'password')
  })

  it('renders the register button', () => {
    render(<RegisterCard />)
    const button = screen.getByRole('button', { name: /register/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('type', 'submit')
  })

  it('renders icons alongside field labels', () => {
    render(<RegisterCard />)
    const svgs = document.querySelectorAll('svg')
    expect(svgs.length).toBeGreaterThanOrEqual(3)
  })

  it('allows typing in form fields', async () => {
    const user = userEvent.setup()
    render(<RegisterCard />)

    const nameInput = screen.getByLabelText('Full Name')
    const emailInput = screen.getByLabelText('Your Email')
    const passwordInput = screen.getByLabelText('Password')

    await user.type(nameInput, 'John Doe')
    await user.type(emailInput, 'john@example.com')
    await user.type(passwordInput, 'secret123')

    expect(nameInput).toHaveValue('John Doe')
    expect(emailInput).toHaveValue('john@example.com')
    expect(passwordInput).toHaveValue('secret123')
  })

  it('has a form element with accessible name', () => {
    render(<RegisterCard />)
    expect(screen.getByRole('form', { name: /register account form/i })).toBeInTheDocument()
  })

  it('submits the form without navigating away', async () => {
    const user = userEvent.setup()
    render(<RegisterCard />)
    const form = screen.getByRole('form', { name: /register account form/i })
    const submitBtn = screen.getByRole('button', { name: /register/i })

    await user.type(screen.getByLabelText('Full Name'), 'Test')
    await user.click(submitBtn)

    expect(form).toBeInTheDocument()
  })
})
