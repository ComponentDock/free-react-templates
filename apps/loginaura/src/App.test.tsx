import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the heading "John Doe"', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /john doe/i })).toBeInTheDocument()
  })

  it('renders username and password fields', () => {
    render(<App />)
    expect(document.getElementById('username')).toBeInTheDocument()
    expect(document.getElementById('password')).toBeInTheDocument()
  })

  it('renders Login button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()
  })

  it('renders Component Dock footer link', () => {
    render(<App />)
    const link = screen.getByText('More templates at Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders Forgot Username / Password link', () => {
    render(<App />)
    expect(screen.getByText('Forgot Username / Password?')).toHaveAttribute('href', '#forgot')
  })

  it('renders Create new account link with arrow', () => {
    render(<App />)
    expect(screen.getByText('Create new account')).toHaveAttribute('href', '#register')
    expect(screen.getByText('→')).toBeInTheDocument()
  })

  it('has gradient background container', () => {
    render(<App />)
    const bgDiv = document.querySelector('[style*="linear-gradient"]')
    expect(bgDiv).toBeInTheDocument()
  })

  it('renders avatar image', () => {
    render(<App />)
    const img = screen.getByRole('img', { name: /john doe avatar/i })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })

  it('allows typing in username field', async () => {
    const user = userEvent.setup()
    render(<App />)
    const input = document.getElementById('username') as HTMLInputElement
    await user.type(input, 'alice')
    expect(input.value).toBe('alice')
  })

  it('allows typing in password field', async () => {
    const user = userEvent.setup()
    render(<App />)
    const input = document.getElementById('password') as HTMLInputElement
    await user.type(input, 'secret')
    expect(input.value).toBe('secret')
  })

  it('submits form without page reload', async () => {
    const user = userEvent.setup()
    render(<App />)
    const button = screen.getByRole('button', { name: /login/i })
    await user.click(button)
    // Form should not navigate — page still shows heading
    expect(screen.getByRole('heading', { name: /john doe/i })).toBeInTheDocument()
  })
})
