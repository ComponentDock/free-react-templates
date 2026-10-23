import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AuthModal } from './AuthModal'

describe('AuthModal', () => {
  it('renders nothing when closed', () => {
    render(<AuthModal open={false} onClose={() => {}} />)

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('shows the sign-in form with social and email options', () => {
    render(<AuthModal open onClose={() => {}} />)

    expect(screen.getByRole('dialog', { name: /Sign in or Sign up/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /Welcome Back/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Continue with Google' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Continue with GitHub' })).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
  })

  it('switches to the sign-up form and back to the sign-in form', async () => {
    const user = userEvent.setup()
    render(<AuthModal open onClose={() => {}} />)

    await user.click(screen.getByRole('button', { name: 'Sign up' }))
    expect(screen.getByRole('heading', { level: 2, name: /Create Account/ })).toBeInTheDocument()
    expect(screen.getByLabelText('Full name')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Sign in' }))
    expect(screen.getByRole('heading', { level: 2, name: /Welcome Back/ })).toBeInTheDocument()
  })

  it('submits the sign-in form without navigating', async () => {
    const user = userEvent.setup()
    render(<AuthModal open onClose={() => {}} />)

    await user.type(screen.getByLabelText('Email address'), 'ada@example.com')
    await user.type(screen.getByLabelText('Password'), 'hunter2')
    await user.click(screen.getByRole('button', { name: 'Sign In' }))
    expect(screen.getByRole('button', { name: 'Sign In' })).toBeInTheDocument()
  })

  it('calls onClose when the close button is pressed', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<AuthModal open onClose={onClose} />)

    await user.click(screen.getByRole('button', { name: 'Close sign-in modal' }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })
})
