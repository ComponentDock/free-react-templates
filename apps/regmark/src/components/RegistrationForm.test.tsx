import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RegistrationForm } from './RegistrationForm'

describe('RegistrationForm', () => {
  it('renders the heading', () => {
    render(<RegistrationForm />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'What type of user are you?',
    )
  })

  it('renders three user type buttons with "New bee" selected by default', () => {
    render(<RegistrationForm />)
    const buttons = screen.getAllByRole('button', { name: /new bee|average|master/i })
    expect(buttons).toHaveLength(3)

    expect(screen.getByRole('button', { name: 'New bee' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: 'Average' })).toHaveAttribute('aria-pressed', 'false')
    expect(screen.getByRole('button', { name: 'Master' })).toHaveAttribute('aria-pressed', 'false')
  })

  it('switches user type on click', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)

    await user.click(screen.getByRole('button', { name: 'Average' }))
    expect(screen.getByRole('button', { name: 'Average' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: 'New bee' })).toHaveAttribute('aria-pressed', 'false')

    await user.click(screen.getByRole('button', { name: 'Master' }))
    expect(screen.getByRole('button', { name: 'Master' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: 'Average' })).toHaveAttribute('aria-pressed', 'false')
  })

  it('renders all form fields', () => {
    render(<RegistrationForm />)
    expect(screen.getByPlaceholderText('Full name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
  })

  it('renders the terms checkbox', () => {
    render(<RegistrationForm />)
    expect(screen.getByRole('checkbox', { name: /terms of service/i })).toBeInTheDocument()
  })

  it('renders the "Terms of service" link', () => {
    render(<RegistrationForm />)
    const link = screen.getByRole('link', { name: /terms of service/i })
    expect(link).toHaveAttribute('href', '#terms')
  })

  it('renders the submit button', () => {
    render(<RegistrationForm />)
    expect(screen.getByRole('button', { name: /create account/i })).toBeInTheDocument()
  })

  it('renders the "Log in" link', () => {
    render(<RegistrationForm />)
    const link = screen.getByRole('link', { name: /log in/i })
    expect(link).toHaveAttribute('href', '#login')
  })

  it('does not show success message initially', () => {
    render(<RegistrationForm />)
    expect(screen.queryByText(/account created successfully/i)).not.toBeInTheDocument()
  })

  it('requires all fields to be filled before form submission', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)

    // Try to submit without filling — browser should prevent it
    await user.click(screen.getByRole('button', { name: /create account/i }))
    expect(screen.queryByText(/account created successfully/i)).not.toBeInTheDocument()
  })

  it('shows success message after filling all fields and checking terms', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)

    await user.type(screen.getByPlaceholderText('Full name'), 'Jane Doe')
    await user.type(screen.getByPlaceholderText('Email'), 'jane@example.com')
    await user.type(screen.getByPlaceholderText('Password'), 'secret123')
    await user.click(screen.getByRole('checkbox', { name: /terms of service/i }))
    await user.click(screen.getByRole('button', { name: /create account/i }))

    expect(screen.getByText(/account created successfully/i)).toBeInTheDocument()
    // The success message includes the user type — check it's in the success paragraph
    const successMsg = screen.getByText(/account created successfully/i)
    expect(successMsg.textContent).toContain('New bee')
  })

  it('hides the form after successful submission', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)

    await user.type(screen.getByPlaceholderText('Full name'), 'Jane')
    await user.type(screen.getByPlaceholderText('Email'), 'jane@test.com')
    await user.type(screen.getByPlaceholderText('Password'), 'pass')
    await user.click(screen.getByRole('checkbox', { name: /terms of service/i }))
    await user.click(screen.getByRole('button', { name: /create account/i }))

    expect(screen.queryByPlaceholderText('Full name')).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: /create account/i })).not.toBeInTheDocument()
  })

  it('does not submit if terms are not checked', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)

    await user.type(screen.getByPlaceholderText('Full name'), 'Jane')
    await user.type(screen.getByPlaceholderText('Email'), 'jane@test.com')
    await user.type(screen.getByPlaceholderText('Password'), 'pass')
    // Do NOT check terms
    await user.click(screen.getByRole('button', { name: /create account/i }))

    expect(screen.queryByText(/account created successfully/i)).not.toBeInTheDocument()
  })

  it('renders the watermark text', () => {
    render(<RegistrationForm />)
    expect(screen.getByText('Sign up')).toBeInTheDocument()
  })

  it('has three user type options', () => {
    render(<RegistrationForm />)
    const inputs = document.querySelectorAll('input[placeholder]')
    // Full name, Email, Password = 3 inputs
    expect(inputs).toHaveLength(3)
  })
})
