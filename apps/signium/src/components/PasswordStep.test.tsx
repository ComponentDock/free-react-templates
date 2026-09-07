import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PasswordStep } from './PasswordStep'

describe('PasswordStep', () => {
  it('renders step indicator 3 / 4', () => {
    render(<PasswordStep />)
    expect(screen.getByText('Step 3 / 4')).toBeInTheDocument()
  })

  it('renders password input field', () => {
    render(<PasswordStep />)
    expect(screen.getByLabelText('Your Password')).toBeInTheDocument()
  })

  it('password input is type password initially', () => {
    render(<PasswordStep />)
    expect(screen.getByLabelText('Your Password')).toHaveAttribute('type', 'password')
  })

  it('has a toggle button for password visibility', () => {
    render(<PasswordStep />)
    expect(screen.getByRole('button', { name: /show password/i })).toBeInTheDocument()
  })

  it('toggles password to text when toggle is clicked', async () => {
    const user = userEvent.setup()
    render(<PasswordStep />)
    await user.click(screen.getByRole('button', { name: /show password/i }))
    expect(screen.getByLabelText('Your Password')).toHaveAttribute('type', 'text')
  })
})
