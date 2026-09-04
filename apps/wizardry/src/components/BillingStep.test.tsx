import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BillingStep } from './BillingStep'
import { INITIAL_DATA } from '../types'

describe('BillingStep', () => {
  const defaultProps = {
    data: INITIAL_DATA,
    errors: {},
    onChange: vi.fn(),
  }

  it('renders the step header', () => {
    render(<BillingStep {...defaultProps} />)
    expect(screen.getByText('Billing Setup')).toBeInTheDocument()
  })

  it('renders all form fields', () => {
    render(<BillingStep {...defaultProps} />)
    expect(screen.getByLabelText('Card Holder Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Card Number')).toBeInTheDocument()
    expect(screen.getByLabelText('CVC')).toBeInTheDocument()
    expect(screen.getByLabelText('Expiration (MM/YYYY)')).toBeInTheDocument()
  })

  it('calls onChange when card name is typed', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<BillingStep {...defaultProps} onChange={onChange} />)

    await user.type(screen.getByLabelText('Card Holder Name'), 'J')
    expect(onChange).toHaveBeenCalledWith('cardName', 'J')
  })

  it('calls onChange when card number is typed', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<BillingStep {...defaultProps} onChange={onChange} />)

    await user.type(screen.getByLabelText('Card Number'), '4')
    expect(onChange).toHaveBeenCalledWith('cardNumber', '4')
  })

  it('calls onChange when CVC is typed', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<BillingStep {...defaultProps} onChange={onChange} />)

    await user.type(screen.getByLabelText('CVC'), '1')
    expect(onChange).toHaveBeenCalledWith('cvc', '1')
  })

  it('calls onChange when expiration is typed', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<BillingStep {...defaultProps} onChange={onChange} />)

    await user.type(screen.getByLabelText('Expiration (MM/YYYY)'), '1')
    expect(onChange).toHaveBeenCalledWith('expiration', '1')
  })

  it('displays validation errors', () => {
    render(<BillingStep {...defaultProps} errors={{ cardName: 'Card holder name is required' }} />)
    expect(screen.getByText('Card holder name is required')).toBeInTheDocument()
  })

  it('applies error border styling', () => {
    render(<BillingStep {...defaultProps} errors={{ cardNumber: 'Card number is required' }} />)
    const input = screen.getByLabelText('Card Number')
    expect(input.className).toContain('border-red-500')
  })
})
