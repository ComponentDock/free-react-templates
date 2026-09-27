import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { RegistrationForm } from './RegistrationForm'

describe('RegistrationForm', () => {
  it('renders the heading', () => {
    render(<RegistrationForm />)
    expect(screen.getByRole('heading', { name: /registration form/i })).toBeInTheDocument()
  })

  it('renders all five form fields', () => {
    render(<RegistrationForm />)
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument()
  })

  it('renders First Name and Last Name side by side', () => {
    render(<RegistrationForm />)
    const firstName = screen.getByLabelText(/first name/i)
    const lastName = screen.getByLabelText(/last name/i)
    const row = firstName.parentElement?.parentElement
    expect(row).toContainElement(lastName)
  })

  it('renders a terms checkbox', () => {
    render(<RegistrationForm />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeInTheDocument()
    expect(screen.getByText(/i accept the terms/i)).toBeInTheDocument()
  })

  it('toggles checkbox state on click', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).not.toBeChecked()
    await user.click(checkbox)
    expect(checkbox).toBeChecked()
    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('renders a Register Now button', () => {
    render(<RegistrationForm />)
    expect(screen.getByRole('button', { name: /register now/i })).toBeInTheDocument()
  })

  it('shows error when passwords do not match', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)
    await user.type(screen.getByLabelText(/first name/i), 'John')
    await user.type(screen.getByLabelText(/last name/i), 'Doe')
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/^password$/i), 'pass123')
    await user.type(screen.getByLabelText(/confirm password/i), 'pass456')
    await user.click(screen.getByRole('button', { name: /register now/i }))
    expect(screen.getByRole('alert')).toHaveTextContent(/passwords do not match/i)
  })

  it('shows success message when form is valid', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)
    await user.type(screen.getByLabelText(/first name/i), 'John')
    await user.type(screen.getByLabelText(/last name/i), 'Doe')
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/^password$/i), 'pass123')
    await user.type(screen.getByLabelText(/confirm password/i), 'pass123')
    await user.click(screen.getByRole('checkbox'))
    await user.click(screen.getByRole('button', { name: /register now/i }))
    expect(screen.getByText(/thank you/i)).toBeInTheDocument()
    expect(screen.getByText(/registration was successful/i)).toBeInTheDocument()
  })

  it('does not submit when terms are not accepted', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)
    await user.type(screen.getByLabelText(/first name/i), 'John')
    await user.type(screen.getByLabelText(/last name/i), 'Doe')
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/^password$/i), 'pass123')
    await user.type(screen.getByLabelText(/confirm password/i), 'pass123')
    await user.click(screen.getByRole('button', { name: /register now/i }))
    expect(screen.queryByText(/thank you/i)).not.toBeInTheDocument()
  })
})
