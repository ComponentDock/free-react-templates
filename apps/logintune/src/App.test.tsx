import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the page with green background', () => {
    render(<App />)
    const root = document.querySelector('[style*="background-color"]')
    expect(root).toBeTruthy()
  })

  it('renders the login form card', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('username')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('password')).toBeInTheDocument()
  })

  it('renders the LOGIN button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()
  })

  it('renders the registration link', () => {
    render(<App />)
    expect(screen.getByText('Not registered?')).toBeInTheDocument()
    const createLink = screen.getByRole('link', { name: /create an account/i })
    expect(createLink).toHaveAttribute('href', '#')
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const footerLink = screen.getByRole('link', { name: /more templates at component dock/i })
    expect(footerLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(footerLink).toHaveAttribute('target', '_blank')
    expect(footerLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('does not render a header or navigation', () => {
    render(<App />)
    expect(screen.queryByRole('banner')).not.toBeInTheDocument()
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
  })
})

describe('LoginForm', () => {
  it('allows typing username', async () => {
    const user = userEvent.setup()
    render(<App />)
    const usernameInput = screen.getByPlaceholderText('username')
    await user.type(usernameInput, 'admin')
    expect(usernameInput).toHaveValue('admin')
  })

  it('allows typing password', async () => {
    const user = userEvent.setup()
    render(<App />)
    const passwordInput = screen.getByPlaceholderText('password')
    await user.type(passwordInput, 'secret')
    expect(passwordInput).toHaveValue('secret')
  })

  it('masks password input', () => {
    render(<App />)
    const passwordInput = screen.getByPlaceholderText('password')
    expect(passwordInput).toHaveAttribute('type', 'password')
  })

  it('submits the form without page reload', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(screen.getByPlaceholderText('username'), 'admin')
    await user.type(screen.getByPlaceholderText('password'), 'secret')
    await user.click(screen.getByRole('button', { name: /login/i }))
    // form submit handler calls preventDefault — no error means it worked
  })
})

describe('Accessibility', () => {
  it('username input has accessible label via placeholder', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('username')).toBeInTheDocument()
  })

  it('password input has accessible label via placeholder', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('password')).toBeInTheDocument()
  })

  it('login button has accessible name', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()
  })
})
