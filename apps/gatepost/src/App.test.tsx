import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { App } from './App'

describe('App', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('renders the welcome heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /welcome back/i })).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<App />)
    expect(screen.getByText('Please enter your credentials')).toBeInTheDocument()
  })

  it('renders username and password inputs', () => {
    render(<App />)
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
  })

  it('renders the sign in button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument()
  })

  it('renders the Component Dock footer link', () => {
    render(<App />)
    const link = screen.getByText('Made with Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('submits login and shows success message', async () => {
    const user = userEvent.setup()
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})

    render(<App />)

    await user.type(screen.getByLabelText(/username/i), 'testuser')
    await user.type(screen.getByLabelText(/password/i), 'testpass')
    await user.click(screen.getByRole('button', { name: /sign in/i }))

    expect(consoleSpy).toHaveBeenCalledWith('Login attempt:', {
      username: 'testuser',
      password: 'testpass',
    })
    expect(screen.getByText('Signed in successfully')).toBeInTheDocument()
  })

  it('does not submit with empty fields', async () => {
    const user = userEvent.setup()
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})

    render(<App />)
    await user.click(screen.getByRole('button', { name: /sign in/i }))

    expect(consoleSpy).not.toHaveBeenCalled()
    expect(screen.queryByText('Signed in successfully')).not.toBeInTheDocument()
  })
})
