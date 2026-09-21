import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Signup } from './Signup'

describe('Signup', () => {
  it('renders the heading and email input', () => {
    render(<Signup />)
    expect(screen.getByRole('heading', { name: /Sign Up for Our Classes/i })).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument()
  })

  it('shows error for invalid email', async () => {
    const user = userEvent.setup()
    render(<Signup />)
    await user.type(screen.getByPlaceholderText('Enter your email'), 'notanemail')
    await user.click(screen.getByRole('button', { name: /Submit/i }))
    expect(screen.getByRole('alert')).toHaveTextContent(/valid email/i)
  })

  it('shows success message for valid email', async () => {
    const user = userEvent.setup()
    render(<Signup />)
    await user.type(screen.getByPlaceholderText('Enter your email'), 'test@example.com')
    await user.click(screen.getByRole('button', { name: /Submit/i }))
    expect(screen.getByText(/Thank you for signing up/i)).toBeInTheDocument()
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })
})
