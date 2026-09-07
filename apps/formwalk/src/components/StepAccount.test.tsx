import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { StepAccount } from './StepAccount'

describe('StepAccount', () => {
  it('renders Email input', () => {
    render(<StepAccount />)
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument()
  })

  it('renders Password input', () => {
    render(<StepAccount />)
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
  })

  it('email input is email type', () => {
    render(<StepAccount />)
    expect(screen.getByLabelText('Email Address')).toHaveAttribute('type', 'email')
  })

  it('password input is password type', () => {
    render(<StepAccount />)
    expect(screen.getByLabelText('Password')).toHaveAttribute('type', 'password')
  })
})
