import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ConfirmStep } from './ConfirmStep'

describe('ConfirmStep', () => {
  it('renders step indicator 4 / 4', () => {
    render(<ConfirmStep />)
    expect(screen.getByText('Step 4 / 4')).toBeInTheDocument()
  })

  it('renders confirm password input field', () => {
    render(<ConfirmStep />)
    expect(screen.getByLabelText('Confirm your password')).toBeInTheDocument()
  })

  it('password input is type password initially', () => {
    render(<ConfirmStep />)
    expect(screen.getByLabelText('Confirm your password')).toHaveAttribute('type', 'password')
  })

  it('has a toggle button for password visibility', () => {
    render(<ConfirmStep />)
    expect(screen.getByRole('button', { name: /show password/i })).toBeInTheDocument()
  })

  it('toggles password to text when toggle is clicked', async () => {
    const user = userEvent.setup()
    render(<ConfirmStep />)
    await user.click(screen.getByRole('button', { name: /show password/i }))
    expect(screen.getByLabelText('Confirm your password')).toHaveAttribute('type', 'text')
  })
})
