import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the Login heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument()
  })

  it('renders email/phone input with correct placeholder', () => {
    render(<App />)
    const input = screen.getByPlaceholderText('Email address or phone number')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'text')
  })

  it('renders password input with correct placeholder', () => {
    render(<App />)
    const input = screen.getByPlaceholderText('Password')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'password')
  })

  it('renders Login button as submit', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /login/i })
    expect(button).toHaveAttribute('type', 'submit')
  })

  it('renders Remember me checkbox unchecked by default', () => {
    render(<App />)
    const checkbox = screen.getByRole('checkbox', { name: /remember me/i })
    expect(checkbox).not.toBeChecked()
  })

  it('toggles Remember me checkbox on click', async () => {
    const user = userEvent.setup()
    render(<App />)
    const checkbox = screen.getByRole('checkbox', { name: /remember me/i })
    expect(checkbox).not.toBeChecked()
    await user.click(checkbox)
    expect(checkbox).toBeChecked()
    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('renders Forgot Password link', () => {
    render(<App />)
    const link = screen.getByText('Forgot Password?')
    expect(link).toHaveAttribute('href', '#forgot')
  })

  it('renders Create new account link', () => {
    render(<App />)
    const link = screen.getByText('Create new account')
    expect(link).toHaveAttribute('href', '#register')
  })

  it('allows typing in email input', async () => {
    const user = userEvent.setup()
    render(<App />)
    const input = screen.getByPlaceholderText('Email address or phone number')
    await user.type(input, 'user@example.com')
    expect(input).toHaveValue('user@example.com')
  })

  it('allows typing in password input', async () => {
    const user = userEvent.setup()
    render(<App />)
    const input = screen.getByPlaceholderText('Password')
    await user.type(input, 'secret123')
    expect(input).toHaveValue('secret123')
  })

  it('submits form without page reload', async () => {
    const user = userEvent.setup()
    render(<App />)
    const button = screen.getByRole('button', { name: /login/i })
    await user.click(button)
    expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument()
  })

  it('has background image covering viewport', () => {
    render(<App />)
    const container = document.querySelector('[style*="picsum.photos"]')
    expect(container).toBeInTheDocument()
  })

  it('has glassmorphism card with backdrop blur', () => {
    render(<App />)
    const card = document.querySelector('[style*="blur(30px)"]')
    expect(card).toBeInTheDocument()
  })

  it('renders Component Dock footer link', () => {
    render(<App />)
    const link = screen.getByText('More templates at Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })
})
