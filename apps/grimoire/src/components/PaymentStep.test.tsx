import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PaymentStep } from './PaymentStep'

describe('PaymentStep', () => {
  it('renders payment type radios', () => {
    render(<PaymentStep />)
    expect(screen.getByLabelText('Visa')).toBeInTheDocument()
    expect(screen.getByLabelText('Mastercard')).toBeInTheDocument()
    expect(screen.getByLabelText('Paypal')).toBeInTheDocument()
  })

  it('renders credit card field', () => {
    render(<PaymentStep />)
    expect(screen.getByLabelText('Credit Card')).toBeInTheDocument()
  })

  it('renders CVC field', () => {
    render(<PaymentStep />)
    expect(screen.getByLabelText('CVC')).toBeInTheDocument()
  })

  it('renders expiry month select', () => {
    render(<PaymentStep />)
    expect(screen.getByLabelText('Expiry Date')).toBeInTheDocument()
  })

  it('renders card name field', () => {
    render(<PaymentStep />)
    expect(screen.getByLabelText('Name of card')).toBeInTheDocument()
  })
})
