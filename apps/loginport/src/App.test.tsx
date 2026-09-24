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
    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
  })

  it('renders the Sign in button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: 'Sign in' })).toBeInTheDocument()
  })

  it('renders the forgot password link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Username / Password?' })).toBeInTheDocument()
  })

  it('renders the sign up link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Sign up now' })).toBeInTheDocument()
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

    await userEvent.click(screen.getByRole('button', { name: 'Sign in' }))

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

    await userEvent.type(screen.getByPlaceholderText('Username'), 'testuser')
    await userEvent.type(screen.getByPlaceholderText('Password'), 'testpass')
    await userEvent.click(screen.getByRole('button', { name: 'Sign in' }))

    expect(screen.queryByText('Username is required')).not.toBeInTheDocument()
    expect(screen.queryByText('Password is required')).not.toBeInTheDocument()
  })
})
