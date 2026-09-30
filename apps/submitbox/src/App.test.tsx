import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('SubmitBox App', () => {
  it('renders the signup form heading', () => {
    render(<App />)
    expect(screen.getByText(/Hello!/)).toBeInTheDocument()
    expect(screen.getByText(/Please signup to continue/)).toBeInTheDocument()
  })

  it('renders all four input fields', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('John Doe')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('johndoe@gmail.com')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Confirm Password')).toBeInTheDocument()
  })

  it('renders input labels', () => {
    render(<App />)
    expect(screen.getByLabelText('Full Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
    expect(screen.getByLabelText('Confirm Password')).toBeInTheDocument()
  })

  it('accepts text input in Full Name field', async () => {
    const user = userEvent.setup()
    render(<App />)
    const nameInput = screen.getByPlaceholderText('John Doe')
    await user.type(nameInput, 'Alice Smith')
    expect(nameInput).toHaveValue('Alice Smith')
  })

  it('accepts email input in Email field', async () => {
    const user = userEvent.setup()
    render(<App />)
    const emailInput = screen.getByPlaceholderText('johndoe@gmail.com')
    await user.type(emailInput, 'alice@example.com')
    expect(emailInput).toHaveValue('alice@example.com')
  })

  it('masks password input', () => {
    render(<App />)
    const passwordInput = screen.getByPlaceholderText('Password')
    expect(passwordInput).toHaveAttribute('type', 'password')
  })

  it('masks confirm password input', () => {
    render(<App />)
    const confirmInput = screen.getByPlaceholderText('Confirm Password')
    expect(confirmInput).toHaveAttribute('type', 'password')
  })

  it('renders the Sign Up submit button', () => {
    render(<App />)
    const submitBtn = screen.getByRole('button', { name: /sign up/i })
    expect(submitBtn).toBeInTheDocument()
    expect(submitBtn).toHaveAttribute('type', 'submit')
  })

  it('renders social login buttons', () => {
    render(<App />)
    expect(screen.getByLabelText('Signup with Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Signup with Twitter')).toBeInTheDocument()
  })

  it('renders the "or Signup with" divider text', () => {
    render(<App />)
    expect(screen.getByText('or Signup with')).toBeInTheDocument()
  })

  it('renders the left panel heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Soccer Ball' })).toBeInTheDocument()
  })

  it('renders "Already have an account?" text', () => {
    render(<App />)
    expect(screen.getByText('Already have an account?')).toBeInTheDocument()
  })

  it('renders Sign In links (left panel and form)', () => {
    render(<App />)
    const signInLinks = screen.getAllByRole('link', { name: 'Sign In' })
    expect(signInLinks.length).toBe(2)
    signInLinks.forEach((link) => {
      expect(link).toHaveAttribute('href', '#signin')
    })
  })

  it('renders "I\'m already a member!" text', () => {
    render(<App />)
    expect(screen.getByText(/I'm already a member!/)).toBeInTheDocument()
  })

  it('renders Component Dock footer link', () => {
    render(<App />)
    const footerLink = screen.getByRole('link', { name: /More templates at Component Dock/ })
    expect(footerLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(footerLink).toHaveAttribute('target', '_blank')
  })

  it('renders the globe SVG icon in left panel', () => {
    render(<App />)
    const icon = document.querySelector('svg[aria-hidden="true"]')
    expect(icon).toBeInTheDocument()
  })

  it('submits the form without errors', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(screen.getByPlaceholderText('John Doe'), 'Test User')
    await user.type(screen.getByPlaceholderText('johndoe@gmail.com'), 'test@test.com')
    await user.type(screen.getByPlaceholderText('Password'), 'pass123')
    await user.type(screen.getByPlaceholderText('Confirm Password'), 'pass123')
    await user.click(screen.getByRole('button', { name: /sign up/i }))
    // Form should not navigate or throw
    expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument()
  })
})
