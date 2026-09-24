import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the login form with Account Login heading', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Account Login')
    expect(screen.getByRole('button', { name: 'SIGN IN' })).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: 'More templates at Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('shows validation errors on empty submit', async () => {
    render(<App />)

    await userEvent.click(screen.getByRole('button', { name: 'SIGN IN' }))

    expect(screen.getByText('Valid email is required')).toBeInTheDocument()
    expect(screen.getByText('Password is required')).toBeInTheDocument()
  })

  it('does not show errors when valid data is submitted', async () => {
    render(<App />)

    await userEvent.type(screen.getByRole('textbox', { name: /email/i }), 'test@example.com')
    await userEvent.type(screen.getByLabelText(/password/i), 'secret123')
    await userEvent.click(screen.getByRole('button', { name: 'SIGN IN' }))

    expect(screen.queryByText('Valid email is required')).not.toBeInTheDocument()
    expect(screen.queryByText('Password is required')).not.toBeInTheDocument()
  })
})
