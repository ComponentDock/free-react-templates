import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the Sign Up heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /sign up/i })).toBeInTheDocument()
  })

  it('renders all five form fields', () => {
    render(<App />)
    expect(screen.getByLabelText('Full Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Username')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
    expect(screen.getByLabelText('Repeat Password')).toBeInTheDocument()
  })

  it('renders password fields as masked', () => {
    render(<App />)
    expect(screen.getByLabelText('Password')).toHaveAttribute('type', 'password')
    expect(screen.getByLabelText('Repeat Password')).toHaveAttribute('type', 'password')
  })

  it('renders full name and username as text inputs', () => {
    render(<App />)
    expect(screen.getByLabelText('Full Name')).toHaveAttribute('type', 'text')
    expect(screen.getByLabelText('Username')).toHaveAttribute('type', 'text')
  })

  it('renders email as email input', () => {
    render(<App />)
    expect(screen.getByLabelText('Email')).toHaveAttribute('type', 'email')
  })

  it('renders the Sign Up gradient button', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /sign up/i })
    expect(button).toHaveAttribute('type', 'submit')
  })

  it('renders Terms of User checkbox as checked by default', () => {
    render(<App />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeChecked()
  })

  it('renders Terms of User link', () => {
    render(<App />)
    expect(screen.getByText('Terms of User')).toHaveAttribute('href', '#terms')
  })

  it('renders Sign in link with arrow', () => {
    render(<App />)
    const signIn = screen.getByText('Sign in')
    expect(signIn).toHaveAttribute('href', '#signin')
    expect(screen.getByText('→')).toBeInTheDocument()
  })

  it('renders Component Dock footer link', () => {
    render(<App />)
    const link = screen.getByText('More templates at Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('shows no checkmark initially for email', () => {
    render(<App />)
    expect(screen.queryByLabelText('Email is valid')).not.toBeInTheDocument()
  })

  it('shows no checkmark initially for username', () => {
    render(<App />)
    expect(screen.queryByLabelText('Username is valid')).not.toBeInTheDocument()
  })

  it('shows checkmark on valid email', async () => {
    const user = userEvent.setup()
    render(<App />)
    const emailInput = screen.getByLabelText('Email')
    await user.type(emailInput, 'test@example.com')
    await user.tab()
    expect(screen.getByLabelText('Email is valid')).toBeInTheDocument()
  })

  it('shows checkmark on valid username', async () => {
    const user = userEvent.setup()
    render(<App />)
    const usernameInput = screen.getByLabelText('Username')
    await user.type(usernameInput, 'johndoe')
    await user.tab()
    expect(screen.getByLabelText('Username is valid')).toBeInTheDocument()
  })

  it('does not show checkmark for invalid email', async () => {
    const user = userEvent.setup()
    render(<App />)
    const emailInput = screen.getByLabelText('Email')
    await user.type(emailInput, 'notanemail')
    await user.tab()
    expect(screen.queryByLabelText('Email is valid')).not.toBeInTheDocument()
  })

  it('does not show checkmark for empty username after blur', async () => {
    const user = userEvent.setup()
    render(<App />)
    const usernameInput = screen.getByLabelText('Username')
    await user.click(usernameInput)
    await user.tab()
    expect(screen.queryByLabelText('Username is valid')).not.toBeInTheDocument()
  })

  it('allows typing in full name field', async () => {
    const user = userEvent.setup()
    render(<App />)
    const input = screen.getByLabelText('Full Name')
    await user.type(input, 'Jane Smith')
    expect(input).toHaveValue('Jane Smith')
  })

  it('allows typing in email field', async () => {
    const user = userEvent.setup()
    render(<App />)
    const input = screen.getByLabelText('Email')
    await user.type(input, 'jane@example.com')
    expect(input).toHaveValue('jane@example.com')
  })

  it('allows typing in username field', async () => {
    const user = userEvent.setup()
    render(<App />)
    const input = screen.getByLabelText('Username')
    await user.type(input, 'janesmith')
    expect(input).toHaveValue('janesmith')
  })

  it('allows typing in password field', async () => {
    const user = userEvent.setup()
    render(<App />)
    const input = screen.getByLabelText('Password')
    await user.type(input, 'secret123')
    expect(input).toHaveValue('secret123')
  })

  it('allows typing in repeat password field', async () => {
    const user = userEvent.setup()
    render(<App />)
    const input = screen.getByLabelText('Repeat Password')
    await user.type(input, 'secret123')
    expect(input).toHaveValue('secret123')
  })

  it('submits form without page reload', async () => {
    const user = userEvent.setup()
    render(<App />)
    const button = screen.getByRole('button', { name: /sign up/i })
    await user.click(button)
    expect(screen.getByRole('heading', { name: /sign up/i })).toBeInTheDocument()
  })

  it('can toggle terms checkbox off', async () => {
    const user = userEvent.setup()
    render(<App />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeChecked()
    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('has gradient overlay on left panel', () => {
    render(<App />)
    const overlays = document.querySelectorAll('[style*="linear-gradient"]')
    expect(overlays.length).toBeGreaterThanOrEqual(1)
  })

  it('has background image on left panel', () => {
    render(<App />)
    const bgImage = document.querySelector('[style*="picsum.photos"]')
    expect(bgImage).toBeInTheDocument()
  })

  it('renders heading with correct styling class', () => {
    render(<App />)
    const heading = screen.getByRole('heading', { name: /sign up/i })
    expect(heading).toHaveClass('font-bold')
  })
})
