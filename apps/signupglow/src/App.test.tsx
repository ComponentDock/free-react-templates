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

  it('renders the "Hello!" heading and subtext', () => {
    render(<SignupCard />)
    expect(screen.getByRole('heading', { name: 'Hello!' })).toBeInTheDocument()
    expect(screen.getByText('Please signup to continue')).toBeInTheDocument()
  })

  it('renders a gray circular avatar with person icon and green plus badge', () => {
    render(<SignupCard />)
    const avatarContainer = document.querySelector('.rounded-full.bg-avatar-bg')
    expect(avatarContainer).toBeInTheDocument()
    const svg = avatarContainer?.querySelector('svg')
    expect(svg).toBeInTheDocument()
    const badge = avatarContainer?.querySelector('.bg-badge-green')
    expect(badge).toBeInTheDocument()
  })

  it('renders Full Name input with label', () => {
    render(<SignupCard />)
    const label = screen.getByText('Full Name')
    expect(label).toBeInTheDocument()
    expect(label.tagName).toBe('LABEL')
    expect(screen.getByPlaceholderText('John Doe')).toBeInTheDocument()
  })

  it('renders Email Address input with label', () => {
    render(<SignupCard />)
    const label = screen.getByText('Email Address')
    expect(label).toBeInTheDocument()
    expect(label.tagName).toBe('LABEL')
    expect(screen.getByPlaceholderText('johndoe@gmail.com')).toBeInTheDocument()
  })

  it('renders Password input with label', () => {
    render(<SignupCard />)
    const label = screen.getByText('Password')
    expect(label).toBeInTheDocument()
    expect(label.tagName).toBe('LABEL')
    const passwordInput = screen.getByPlaceholderText('Password')
    expect(passwordInput).toHaveAttribute('type', 'password')
  })

  it('renders Confirm Password input with label', () => {
    render(<SignupCard />)
    const label = screen.getByText('Confirm Password')
    expect(label).toBeInTheDocument()
    expect(label.tagName).toBe('LABEL')
    const confirmInput = screen.getByPlaceholderText('Confirm Password')
    expect(confirmInput).toHaveAttribute('type', 'password')
  })

  it('renders full-width Sign Up button with golden background', () => {
    render(<SignupCard />)
    const button = screen.getByRole('button', { name: 'Sign Up' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-golden-400')
    expect(button).toHaveClass('w-full')
    expect(button).toHaveClass('text-white')
  })

  it('renders "or" divider and "Signup with" text', () => {
    render(<SignupCard />)
    expect(screen.getByText('or')).toBeInTheDocument()
    expect(screen.getByText('Signup with')).toBeInTheDocument()
  })

  it('renders Facebook and Twitter social icons', () => {
    render(<SignupCard />)
    const fbLink = screen.getByRole('link', { name: 'Sign up with Facebook' })
    expect(fbLink).toBeInTheDocument()
    expect(fbLink).toHaveAttribute('href', '#')
    expect(fbLink).toHaveClass('bg-fb-blue')

    const twLink = screen.getByRole('link', { name: 'Sign up with Twitter' })
    expect(twLink).toBeInTheDocument()
    expect(twLink).toHaveAttribute('href', '#')
    expect(twLink).toHaveClass('bg-tw-blue')
  })

  it('renders "I\'m already a member!" text with Sign In link', () => {
    render(<SignupCard />)
    expect(screen.getByText("I'm already a member!")).toBeInTheDocument()
    const signInLink = screen.getByRole('link', { name: 'Sign In' })
    expect(signInLink).toBeInTheDocument()
    expect(signInLink).toHaveClass('text-golden-400')
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
    expect(screen.getByText('Confirm Password is required')).toBeInTheDocument()
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
    await user.type(screen.getByPlaceholderText('Confirm Password'), 'secret123')

    expect(screen.getByPlaceholderText('John Doe')).toHaveValue('Jane Smith')
    expect(screen.getByPlaceholderText('johndoe@gmail.com')).toHaveValue('jane@example.com')
    expect(screen.getByPlaceholderText('Password')).toHaveValue('secret123')
    expect(screen.getByPlaceholderText('Confirm Password')).toHaveValue('secret123')
  })

  it('does not show validation errors when all fields are filled', async () => {
    const user = userEvent.setup()
    render(<SignupCard />)
    await user.type(screen.getByPlaceholderText('John Doe'), 'Jane Smith')
    await user.type(screen.getByPlaceholderText('johndoe@gmail.com'), 'jane@example.com')
    await user.type(screen.getByPlaceholderText('Password'), 'secret123')
    await user.type(screen.getByPlaceholderText('Confirm Password'), 'secret123')
    await user.click(screen.getByRole('button', { name: 'Sign Up' }))

    expect(screen.queryByText('Full Name is required')).not.toBeInTheDocument()
    expect(screen.queryByText('Email Address is required')).not.toBeInTheDocument()
    expect(screen.queryByText('Password is required')).not.toBeInTheDocument()
    expect(screen.queryByText('Confirm Password is required')).not.toBeInTheDocument()
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
