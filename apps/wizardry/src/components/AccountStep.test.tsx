import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AccountStep } from './AccountStep'
import { INITIAL_DATA } from '../types'

describe('AccountStep', () => {
  const defaultProps = {
    data: INITIAL_DATA,
    errors: {},
    onChange: vi.fn(),
  }

  it('renders the step header', () => {
    render(<AccountStep {...defaultProps} />)
    expect(screen.getByText('Account Setup')).toBeInTheDocument()
  })

  it('renders all form fields', () => {
    render(<AccountStep {...defaultProps} />)
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
    expect(screen.getByLabelText('Confirm Password')).toBeInTheDocument()
  })

  it('calls onChange when email is typed', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<AccountStep {...defaultProps} onChange={onChange} />)

    await user.type(screen.getByLabelText('Email Address'), 'test@example.com')
    expect(onChange).toHaveBeenCalledWith('email', 't')
  })

  it('calls onChange when password is typed', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<AccountStep {...defaultProps} onChange={onChange} />)

    await user.type(screen.getByLabelText('Password'), 'pass')
    expect(onChange).toHaveBeenCalledWith('password', 'p')
  })

  it('displays validation errors', () => {
    render(<AccountStep {...defaultProps} errors={{ email: 'Email is required' }} />)
    expect(screen.getByText('Email is required')).toBeInTheDocument()
  })

  it('applies error border styling', () => {
    render(<AccountStep {...defaultProps} errors={{ email: 'Email is required' }} />)
    const emailInput = screen.getByLabelText('Email Address')
    expect(emailInput.className).toContain('border-red-500')
  })

  it('renders input with current value', () => {
    render(<AccountStep {...defaultProps} data={{ ...INITIAL_DATA, email: 'filled@test.com' }} />)
    expect(screen.getByLabelText('Email Address')).toHaveValue('filled@test.com')
  })
})
