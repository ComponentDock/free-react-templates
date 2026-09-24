import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the login form with Login heading', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Login')
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: 'More templates at Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('renders username and password inputs', () => {
    render(<App />)

    expect(screen.getByPlaceholderText('Type your username')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Type your password')).toBeInTheDocument()
  })

  it('renders the Login button', () => {
    render(<App />)

    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument()
  })

  it('renders social login buttons', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: 'Sign up with Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Sign up with Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Sign up with Google' })).toBeInTheDocument()
  })

  it('renders the forgot password link', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: 'Forgot password?' })).toBeInTheDocument()
  })

  it('renders the Sign Up link', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: 'Sign Up' })).toBeInTheDocument()
  })

  it('shows validation errors on empty submit', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Login' }))

    expect(screen.getByText('Username is required')).toBeInTheDocument()
    expect(screen.getByText('Password is required')).toBeInTheDocument()
  })

  it('shows only username error when only username is empty', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByPlaceholderText('Type your password'), 'secret123')
    await user.click(screen.getByRole('button', { name: 'Login' }))

    expect(screen.getByText('Username is required')).toBeInTheDocument()
    expect(screen.queryByText('Password is required')).not.toBeInTheDocument()
  })

  it('shows only password error when only password is empty', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByPlaceholderText('Type your username'), 'admin')
    await user.click(screen.getByRole('button', { name: 'Login' }))

    expect(screen.queryByText('Username is required')).not.toBeInTheDocument()
    expect(screen.getByText('Password is required')).toBeInTheDocument()
  })

  it('does not show errors when valid data is submitted', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByPlaceholderText('Type your username'), 'admin')
    await user.type(screen.getByPlaceholderText('Type your password'), 'secret123')
    await user.click(screen.getByRole('button', { name: 'Login' }))

    expect(screen.queryByText('Username is required')).not.toBeInTheDocument()
    expect(screen.queryByText('Password is required')).not.toBeInTheDocument()
  })

  it('renders "Or Sign Up Using" divider text', () => {
    render(<App />)

    const dividerTexts = screen.getAllByText('Or Sign Up Using')
    expect(dividerTexts.length).toBeGreaterThanOrEqual(1)
  })

  it('renders password input as password type', () => {
    render(<App />)

    const passwordInput = screen.getByPlaceholderText('Type your password')
    expect(passwordInput).toHaveAttribute('type', 'password')
  })

  it('renders username input as text type', () => {
    render(<App />)

    const usernameInput = screen.getByPlaceholderText('Type your username')
    expect(usernameInput).toHaveAttribute('type', 'text')
  })

  it('renders the gradient background on the page', () => {
    const { container } = render(<App />)

    const outerDiv = container.firstElementChild as HTMLElement
    expect(outerDiv).toHaveStyle({
      background: 'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)',
    })
  })

  it('renders labels for username and password', () => {
    render(<App />)

    expect(screen.getByLabelText('Username')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
  })
})
