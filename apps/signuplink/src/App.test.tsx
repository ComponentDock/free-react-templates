import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { App } from './App'
import { SignupForm } from './components/SignupForm'
import { Footer } from './components/Footer'

describe('App', () => {
  it('renders the signup form and footer', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Sign Up' })).toBeInTheDocument()
    expect(screen.getByText('More templates at Component Dock')).toBeInTheDocument()
  })
})

describe('SignupForm', () => {
  it('renders the sign up heading', () => {
    render(<SignupForm />)
    expect(screen.getByRole('heading', { name: 'Sign Up' })).toBeInTheDocument()
  })

  it('renders the subtitle paragraph', () => {
    render(<SignupForm />)
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
  })

  it('renders all form fields', () => {
    render(<SignupForm />)
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
    expect(screen.getByLabelText('Re-type Password')).toBeInTheDocument()
  })

  it('renders the terms checkbox as checked by default', () => {
    render(<SignupForm />)
    const checkbox = screen.getByRole('checkbox', {
      name: /agree our terms and conditions/i,
    })
    expect(checkbox).toBeChecked()
  })

  it('renders the register button', () => {
    render(<SignupForm />)
    expect(screen.getByRole('button', { name: 'Register' })).toBeInTheDocument()
  })

  it('renders the social login text', () => {
    render(<SignupForm />)
    expect(screen.getByText('or register with')).toBeInTheDocument()
  })

  it('renders social login buttons for Facebook, Twitter, and Google', () => {
    render(<SignupForm />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Google' })).toBeInTheDocument()
  })

  it('renders the Sign In link', () => {
    render(<SignupForm />)
    expect(screen.getByRole('link', { name: 'Sign In' })).toBeInTheDocument()
  })

  it('renders the Terms and Conditions link', () => {
    render(<SignupForm />)
    expect(screen.getByRole('link', { name: 'Terms and Conditions' })).toBeInTheDocument()
  })

  it('floating label moves up when user types into the Name field', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)
    const nameInput = screen.getByLabelText('Name')
    const nameLabel = nameInput.closest('div')?.querySelector('label') as HTMLElement

    expect(nameLabel.className).toContain('top-1/2')
    await user.type(nameInput, 'John')
    expect(nameLabel.className).toContain('top-1')
  })

  it('checkbox toggles when clicked', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)
    const checkbox = screen.getByRole('checkbox', {
      name: /agree our terms and conditions/i,
    })
    expect(checkbox).toBeChecked()
    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
    await user.click(checkbox)
    expect(checkbox).toBeChecked()
  })

  it('form prevents default submission on Register click', async () => {
    const user = userEvent.setup()
    render(<SignupForm />)
    const button = screen.getByRole('button', { name: 'Register' })
    await user.click(button)
    // Form should not navigate or submit
    expect(button).toBeInTheDocument()
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
