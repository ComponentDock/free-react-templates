import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the login form with Sign In heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Sign In')
  })

  it('renders username and password inputs', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('username or email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('password')).toBeInTheDocument()
  })

  it('renders the Sign In button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: 'Sign In' })).toBeInTheDocument()
  })

  it('renders the "Or login with" divider', () => {
    render(<App />)
    expect(screen.getByText('Or login with')).toBeInTheDocument()
  })

  it('renders social login buttons', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: 'Login with Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Login with Google' })).toBeInTheDocument()
  })

  it('renders the Sign Up link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Sign Up' })).toHaveAttribute('href', '#')
  })

  it('renders footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Made with Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('shows validation errors on empty submit', async () => {
    render(<App />)

    await userEvent.click(screen.getByRole('button', { name: 'Sign In' }))

    expect(screen.getByText('Username is required')).toBeInTheDocument()
    expect(screen.getByText('Password is required')).toBeInTheDocument()
  })

  it('does not show errors before submit', () => {
    render(<App />)
    expect(screen.queryByText('Username is required')).not.toBeInTheDocument()
    expect(screen.queryByText('Password is required')).not.toBeInTheDocument()
  })

  it('does not show errors when valid values are submitted', async () => {
    render(<App />)

    await userEvent.type(screen.getByPlaceholderText('username or email'), 'test@example.com')
    await userEvent.type(screen.getByPlaceholderText('password'), 'secret123')
    await userEvent.click(screen.getByRole('button', { name: 'Sign In' }))

    expect(screen.queryByText('Username is required')).not.toBeInTheDocument()
    expect(screen.queryByText('Password is required')).not.toBeInTheDocument()
  })

  it('trims whitespace from inputs before validation', async () => {
    render(<App />)

    await userEvent.type(screen.getByPlaceholderText('username or email'), '   ')
    await userEvent.type(screen.getByPlaceholderText('password'), '   ')
    await userEvent.click(screen.getByRole('button', { name: 'Sign In' }))

    expect(screen.getByText('Username is required')).toBeInTheDocument()
    expect(screen.getByText('Password is required')).toBeInTheDocument()
  })
})
