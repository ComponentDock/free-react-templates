import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { App } from './App'
import { SignupCard } from './components/SignupCard'
import { Footer } from './components/Footer'

describe('App', () => {
  it('renders the signup card and footer', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /sign up/i })).toBeInTheDocument()
    expect(screen.getByText('More templates at Component Dock')).toBeInTheDocument()
  })
})

describe('SignupCard', () => {
  it('renders the page title above the card', () => {
    render(<SignupCard />)
    expect(screen.getByRole('heading', { name: 'Sign Up #01' })).toBeInTheDocument()
  })

  it('renders the "Create Your Account" heading', () => {
    render(<SignupCard />)
    expect(screen.getByRole('heading', { name: 'Create Your Account' })).toBeInTheDocument()
  })

  it('renders a green circular icon with pencil symbol', () => {
    render(<SignupCard />)
    const iconContainer = document.querySelector('.rounded-full.bg-mint-400')
    expect(iconContainer).toBeInTheDocument()
    const svg = iconContainer?.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })

  it('renders Full Name input with uppercase green label', () => {
    render(<SignupCard />)
    const label = screen.getByText('Full Name')
    expect(label).toBeInTheDocument()
    expect(label.tagName).toBe('LABEL')
    expect(label.className).toContain('uppercase')
    expect(label.className).toContain('text-mint-400')
    expect(screen.getByPlaceholderText('John Doe')).toBeInTheDocument()
  })

  it('renders Email Address input with uppercase green label', () => {
    render(<SignupCard />)
    const label = screen.getByText('Email Address')
    expect(label).toBeInTheDocument()
    expect(label.tagName).toBe('LABEL')
    expect(label.className).toContain('uppercase')
    expect(label.className).toContain('text-mint-400')
    expect(screen.getByPlaceholderText('johndoe@gmail.com')).toBeInTheDocument()
  })

  it('renders Password input with uppercase green label and eye toggle', () => {
    render(<SignupCard />)
    const label = screen.getByText('Password')
    expect(label).toBeInTheDocument()
    expect(label.tagName).toBe('LABEL')
    expect(label.className).toContain('uppercase')
    expect(label.className).toContain('text-mint-400')
    const passwordInput = screen.getByPlaceholderText('Password')
    expect(passwordInput).toHaveAttribute('type', 'password')
    expect(screen.getByRole('button', { name: /show password/i })).toBeInTheDocument()
  })

  it('password visibility toggle switches input type', async () => {
    const user = userEvent.setup()
    render(<SignupCard />)
    const passwordInput = screen.getByPlaceholderText('Password')
    const toggle = screen.getByRole('button', { name: /show password/i })

    expect(passwordInput).toHaveAttribute('type', 'password')

    await user.click(toggle)
    expect(passwordInput).toHaveAttribute('type', 'text')
    expect(screen.getByRole('button', { name: /hide password/i })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /hide password/i }))
    expect(passwordInput).toHaveAttribute('type', 'password')
    expect(screen.getByRole('button', { name: /show password/i })).toBeInTheDocument()
  })

  it('renders terms checkbox unchecked by default', () => {
    render(<SignupCard />)
    const checkbox = screen.getByRole('checkbox', {
      name: /i agree all statements/i,
    })
    expect(checkbox).not.toBeChecked()
  })

  it('checkbox toggles when clicked', async () => {
    const user = userEvent.setup()
    render(<SignupCard />)
    const checkbox = screen.getByRole('checkbox', {
      name: /i agree all statements/i,
    })
    expect(checkbox).not.toBeChecked()
    await user.click(checkbox)
    expect(checkbox).toBeChecked()
    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('renders full-width Sign Up button with mint green background', () => {
    render(<SignupCard />)
    const button = screen.getByRole('button', { name: 'Sign Up' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-mint-400')
    expect(button).toHaveClass('w-full')
    expect(button).toHaveClass('text-white')
  })

  it('renders "I\'m already a member!" text with Sign In link', () => {
    render(<SignupCard />)
    expect(screen.getByText("I'm already a member!")).toBeInTheDocument()
    const signInLink = screen.getByRole('link', { name: 'Sign In' })
    expect(signInLink).toBeInTheDocument()
    expect(signInLink).toHaveClass('text-mint-400')
  })

  it('form prevents default submission on Sign Up click', async () => {
    const user = userEvent.setup()
    render(<SignupCard />)
    const button = screen.getByRole('button', { name: 'Sign Up' })
    await user.click(button)
    expect(button).toBeInTheDocument()
  })

  it('shows validation errors when submitting empty form', async () => {
    const user = userEvent.setup()
    render(<SignupCard />)
    await user.click(screen.getByRole('button', { name: 'Sign Up' }))
    expect(screen.getByText('Full Name is required')).toBeInTheDocument()
    expect(screen.getByText('Email Address is required')).toBeInTheDocument()
    expect(screen.getByText('Password is required')).toBeInTheDocument()
  })

  it('clears validation error when user types into a field', async () => {
    const user = userEvent.setup()
    render(<SignupCard />)
    await user.click(screen.getByRole('button', { name: 'Sign Up' }))
    expect(screen.getByText('Full Name is required')).toBeInTheDocument()

    await user.type(screen.getByPlaceholderText('John Doe'), 'John')
    expect(screen.queryByText('Full Name is required')).not.toBeInTheDocument()
  })

  it('accepts user input in all fields', async () => {
    const user = userEvent.setup()
    render(<SignupCard />)
    await user.type(screen.getByPlaceholderText('John Doe'), 'Jane Smith')
    await user.type(screen.getByPlaceholderText('johndoe@gmail.com'), 'jane@example.com')
    await user.type(screen.getByPlaceholderText('Password'), 'secret123')

    expect(screen.getByPlaceholderText('John Doe')).toHaveValue('Jane Smith')
    expect(screen.getByPlaceholderText('johndoe@gmail.com')).toHaveValue('jane@example.com')
    expect(screen.getByPlaceholderText('Password')).toHaveValue('secret123')
  })

  it('does not show validation errors when all fields are filled', async () => {
    const user = userEvent.setup()
    render(<SignupCard />)
    await user.type(screen.getByPlaceholderText('John Doe'), 'Jane Smith')
    await user.type(screen.getByPlaceholderText('johndoe@gmail.com'), 'jane@example.com')
    await user.type(screen.getByPlaceholderText('Password'), 'secret123')
    await user.click(screen.getByRole('button', { name: 'Sign Up' }))

    expect(screen.queryByText('Full Name is required')).not.toBeInTheDocument()
    expect(screen.queryByText('Email Address is required')).not.toBeInTheDocument()
    expect(screen.queryByText('Password is required')).not.toBeInTheDocument()
  })
})

describe('Footer', () => {
  it('renders the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', {
      name: 'More templates at Component Dock',
    })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
