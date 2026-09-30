import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PasswordInput } from './PasswordInput'

describe('PasswordInput', () => {
  it('renders a visually-hidden label, password input, and toggle button', () => {
    render(<PasswordInput />)
    expect(screen.getByLabelText(/^password$/i)).toHaveAttribute('type', 'password')
    expect(screen.getByRole('button', { name: /show password/i })).toBeInTheDocument()
  })

  it('shows the password when the toggle is clicked', async () => {
    const user = userEvent.setup()
    render(<PasswordInput />)
    await user.click(screen.getByRole('button', { name: /show password/i }))
    expect(screen.getByLabelText(/^password$/i)).toHaveAttribute('type', 'text')
    expect(screen.getByRole('button', { name: /hide password/i })).toBeInTheDocument()
  })

  it('hides the password when the toggle is clicked twice', async () => {
    const user = userEvent.setup()
    render(<PasswordInput />)
    await user.click(screen.getByRole('button', { name: /show password/i }))
    await user.click(screen.getByRole('button', { name: /hide password/i }))
    expect(screen.getByLabelText(/^password$/i)).toHaveAttribute('type', 'password')
    expect(screen.getByRole('button', { name: /show password/i })).toBeInTheDocument()
  })

  it('associates the label with the input via htmlFor/id', () => {
    render(<PasswordInput />)
    expect(screen.getByLabelText(/^password$/i)).toHaveAttribute('id', 'password')
  })
})
