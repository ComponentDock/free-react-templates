import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { SignInDropdown } from './SignInDropdown'

describe('SignInDropdown', () => {
  it('renders the trigger button with label and caret', () => {
    render(<SignInDropdown />)
    const trigger = screen.getByRole('button', { name: /sign in/i })
    expect(trigger).toBeInTheDocument()
    expect(trigger).toHaveAttribute('aria-haspopup', 'menu')
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens the menu when the trigger is clicked', async () => {
    const user = userEvent.setup()
    render(<SignInDropdown />)
    const trigger = screen.getByRole('button', { name: /sign in/i })

    await user.click(trigger)

    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
    expect(screen.getByLabelText('Remember me')).toBeInTheDocument()
    expect(screen.getByRole('menu')).toBeInTheDocument()
  })

  it('closes the menu when the trigger is clicked again', async () => {
    const user = userEvent.setup()
    render(<SignInDropdown />)
    const trigger = screen.getByRole('button', { name: /sign in/i })

    await user.click(trigger)
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()

    await user.click(trigger)
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
  })

  it('renders form fields in correct order', async () => {
    const user = userEvent.setup()
    render(<SignInDropdown />)
    await user.click(screen.getByRole('button', { name: /sign in/i }))

    const emailInput = screen.getByPlaceholderText('email@example.com')
    const passwordInput = screen.getByPlaceholderText('Password')
    const checkbox = screen.getByLabelText('Remember me')

    // Verify all elements exist
    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
    expect(checkbox).toBeInTheDocument()

    // Verify input types
    expect(emailInput).toHaveAttribute('type', 'email')
    expect(passwordInput).toHaveAttribute('type', 'password')
    expect(checkbox).toHaveAttribute('type', 'checkbox')

    // Find submit button inside the menu
    const menu = screen.getByRole('menu')
    const submitButton = within(menu).getByRole('button')
    expect(submitButton).toHaveAttribute('type', 'submit')
  })

  it('has associated labels for inputs', async () => {
    const user = userEvent.setup()
    render(<SignInDropdown />)
    await user.click(screen.getByRole('button', { name: /sign in/i }))

    const emailInput = screen.getByLabelText('Email address')
    const passwordInput = screen.getByLabelText('Password')
    expect(emailInput).toHaveAttribute('id', 'passkey-email')
    expect(passwordInput).toHaveAttribute('id', 'passkey-password')
  })

  it('closes the menu when the submit button is clicked', async () => {
    const user = userEvent.setup()
    render(<SignInDropdown />)
    const trigger = screen.getByRole('button', { name: /sign in/i })

    await user.click(trigger)
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()

    const menu = screen.getByRole('menu')
    const submitButton = within(menu).getByRole('button')
    await user.click(submitButton)
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
  })

  it('closes the menu on Escape key', async () => {
    const user = userEvent.setup()
    render(<SignInDropdown />)
    const trigger = screen.getByRole('button', { name: /sign in/i })

    await user.click(trigger)
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()

    await user.keyboard('{Escape}')
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
  })

  it('does not close the menu on non-Escape keydown', async () => {
    const user = userEvent.setup()
    render(<SignInDropdown />)
    const trigger = screen.getByRole('button', { name: /sign in/i })

    await user.click(trigger)
    await user.keyboard('a')
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
  })

  it('closes the menu on outside click', async () => {
    const user = userEvent.setup()
    render(<SignInDropdown />)
    const trigger = screen.getByRole('button', { name: /sign in/i })

    await user.click(trigger)
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()

    await user.click(document.body)
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
  })

  it('has aria-controls linking trigger to menu', async () => {
    const user = userEvent.setup()
    render(<SignInDropdown />)
    const trigger = screen.getByRole('button', { name: /sign in/i })

    await user.click(trigger)
    const controlsId = trigger.getAttribute('aria-controls')
    expect(controlsId).toBeTruthy()
    expect(document.getElementById(controlsId!)).toBeInTheDocument()
  })

  it('has a menu element with role menu', async () => {
    const user = userEvent.setup()
    render(<SignInDropdown />)
    await user.click(screen.getByRole('button', { name: /sign in/i }))

    const menu = screen.getByRole('menu')
    expect(menu).toBeInTheDocument()
  })

  it('shows placeholder text for email and password inputs', async () => {
    const user = userEvent.setup()
    render(<SignInDropdown />)
    await user.click(screen.getByRole('button', { name: /sign in/i }))

    expect(screen.getByPlaceholderText('email@example.com')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
  })
})
