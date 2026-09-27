import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RegistrationForm } from './RegistrationForm'

describe('RegistrationForm', () => {
  it('renders the registration form heading', () => {
    render(<RegistrationForm />)
    expect(screen.getByRole('heading', { name: /registration form/i })).toBeInTheDocument()
  })

  it('renders all form fields', () => {
    render(<RegistrationForm />)
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^password:/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/repeat password/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/country/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/gender/i)).toBeInTheDocument()
  })

  it('renders the register button', () => {
    render(<RegistrationForm />)
    expect(screen.getByRole('button', { name: /register now/i })).toBeInTheDocument()
  })

  it('renders the terms checkbox with lorem ipsum text', () => {
    render(<RegistrationForm />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByText(/lorem ipsum/i)).toBeInTheDocument()
  })

  it('renders username and email side by side', () => {
    render(<RegistrationForm />)
    const usernameInput = screen.getByLabelText(/username/i)
    const emailInput = screen.getByLabelText(/email/i)
    expect(usernameInput.parentElement?.parentElement).toBe(emailInput.parentElement?.parentElement)
  })

  it('renders password and repeat password side by side', () => {
    render(<RegistrationForm />)
    const passwordInput = screen.getByLabelText(/^password:/i)
    const repeatInput = screen.getByLabelText(/repeat password/i)
    expect(passwordInput.parentElement?.parentElement).toBe(
      repeatInput.parentElement?.parentElement,
    )
  })

  it('renders country and gender as select dropdowns', () => {
    render(<RegistrationForm />)
    const countrySelect = screen.getByLabelText(/country/i)
    const genderSelect = screen.getByLabelText(/gender/i)
    expect(countrySelect.tagName).toBe('SELECT')
    expect(genderSelect.tagName).toBe('SELECT')
  })

  it('renders all labels with uppercase styling', () => {
    render(<RegistrationForm />)
    const labels = ['Username:', 'Email:', 'Password:', 'Repeat Password:', 'Country:', 'Gender:']
    for (const text of labels) {
      const label = screen.getByText(text)
      expect(label).toHaveClass('uppercase')
    }
  })

  it('renders inputs with light background', () => {
    render(<RegistrationForm />)
    const usernameInput = screen.getByLabelText(/username/i)
    expect(usernameInput).toHaveClass('bg-input-bg')
  })

  it('allows typing in username field', async () => {
    const user = (await import('@testing-library/user-event')).default.setup()
    render(<RegistrationForm />)
    await user.type(screen.getByLabelText(/username/i), 'testuser')
    expect(screen.getByLabelText(/username/i)).toHaveValue('testuser')
  })

  it('allows typing in email field', async () => {
    const user = (await import('@testing-library/user-event')).default.setup()
    render(<RegistrationForm />)
    await user.type(screen.getByLabelText(/email/i), 'test@example.com')
    expect(screen.getByLabelText(/email/i)).toHaveValue('test@example.com')
  })

  it('allows toggling the terms checkbox', async () => {
    const user = (await import('@testing-library/user-event')).default.setup()
    render(<RegistrationForm />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).not.toBeChecked()
    await user.click(checkbox)
    expect(checkbox).toBeChecked()
  })

  it('allows selecting country from dropdown', async () => {
    const user = (await import('@testing-library/user-event')).default.setup()
    render(<RegistrationForm />)
    const countrySelect = screen.getByLabelText(/country/i)
    await user.selectOptions(countrySelect, 'United Kingdom')
    expect(countrySelect).toHaveValue('United Kingdom')
  })

  it('allows selecting gender from dropdown', async () => {
    const user = (await import('@testing-library/user-event')).default.setup()
    render(<RegistrationForm />)
    const genderSelect = screen.getByLabelText(/gender/i)
    await user.selectOptions(genderSelect, 'Female')
    expect(genderSelect).toHaveValue('Female')
  })

  it('submits without error', async () => {
    const user = (await import('@testing-library/user-event')).default.setup()
    render(<RegistrationForm />)
    await user.click(screen.getByRole('button', { name: /register now/i }))
  })

  it('renders password fields with password type', () => {
    render(<RegistrationForm />)
    const passwordInput = screen.getByLabelText(/^password:/i)
    const repeatInput = screen.getByLabelText(/repeat password/i)
    expect(passwordInput).toHaveAttribute('type', 'password')
    expect(repeatInput).toHaveAttribute('type', 'password')
  })
})
