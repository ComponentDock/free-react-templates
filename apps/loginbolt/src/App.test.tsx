import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the split-screen layout with form and image panels', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Account Login')
    expect(screen.getByPlaceholderText('User name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Sign In' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Sign Up' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'User name / password?' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Made with Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('shows validation errors when submitting empty form', async () => {
    const { userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Sign In' }))

    expect(screen.getByText('Type user name')).toBeInTheDocument()
    expect(screen.getByText('Type password')).toBeInTheDocument()
  })

  it('does not show errors when both fields have values', async () => {
    const { userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByPlaceholderText('User name'), 'admin')
    await user.type(screen.getByPlaceholderText('Password'), 'secret')
    await user.click(screen.getByRole('button', { name: 'Sign In' }))

    expect(screen.queryByText('Type user name')).not.toBeInTheDocument()
    expect(screen.queryByText('Type password')).not.toBeInTheDocument()
  })
})
