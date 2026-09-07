import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PaymentStep } from './PaymentStep'

describe('PaymentStep', () => {
  const defaultProps = {
    data: { cardType: '', cardNumber: '', cvc: '', expiryMonth: '', expiryYear: '' },
    onChange: vi.fn(),
  }

  it('renders all payment form fields', () => {
    render(<PaymentStep {...defaultProps} />)

    expect(screen.getByLabelText('Card Type')).toBeInTheDocument()
    expect(screen.getByLabelText('Card Number')).toBeInTheDocument()
    expect(screen.getByLabelText('CVC')).toBeInTheDocument()
    expect(screen.getByLabelText('Expiry Month')).toBeInTheDocument()
    expect(screen.getByLabelText('Expiry Year')).toBeInTheDocument()
  })

  it('calls onChange when card type is selected', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()

    render(<PaymentStep {...defaultProps} onChange={onChange} />)

    await user.selectOptions(screen.getByLabelText('Card Type'), 'Business Credit Cards')

    expect(onChange).toHaveBeenCalledWith({
      cardType: 'Business Credit Cards',
      cardNumber: '',
      cvc: '',
      expiryMonth: '',
      expiryYear: '',
    })
  })

  it('calls onChange when card number is typed', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()

    render(<PaymentStep {...defaultProps} onChange={onChange} />)

    await user.type(screen.getByLabelText('Card Number'), '4')

    expect(onChange).toHaveBeenCalledWith({
      cardType: '',
      cardNumber: '4',
      cvc: '',
      expiryMonth: '',
      expiryYear: '',
    })
  })

  it('calls onChange when CVC is typed', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()

    render(<PaymentStep {...defaultProps} onChange={onChange} />)

    await user.type(screen.getByLabelText('CVC'), '1')

    expect(onChange).toHaveBeenCalledWith({
      cardType: '',
      cardNumber: '',
      cvc: '1',
      expiryMonth: '',
      expiryYear: '',
    })
  })

  it('calls onChange when expiry month is selected', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()

    render(<PaymentStep {...defaultProps} onChange={onChange} />)

    await user.selectOptions(screen.getByLabelText('Expiry Month'), 'January')

    expect(onChange).toHaveBeenCalledWith({
      cardType: '',
      cardNumber: '',
      cvc: '',
      expiryMonth: 'January',
      expiryYear: '',
    })
  })

  it('calls onChange when expiry year is selected', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()

    render(<PaymentStep {...defaultProps} onChange={onChange} />)

    await user.selectOptions(screen.getByLabelText('Expiry Year'), '2026')

    expect(onChange).toHaveBeenCalledWith({
      cardType: '',
      cardNumber: '',
      cvc: '',
      expiryMonth: '',
      expiryYear: '2026',
    })
  })

  it('has all card type options', () => {
    render(<PaymentStep {...defaultProps} />)

    const select = screen.getByLabelText('Card Type')
    expect(select).toHaveTextContent('Business Credit Cards')
    expect(select).toHaveTextContent('Limited Purpose Cards')
    expect(select).toHaveTextContent('Prepaid Cards')
    expect(select).toHaveTextContent('Charge Cards')
    expect(select).toHaveTextContent('Student Credit Cards')
  })

  it('has all month options', () => {
    render(<PaymentStep {...defaultProps} />)

    const select = screen.getByLabelText('Expiry Month')
    expect(select).toHaveTextContent('January')
    expect(select).toHaveTextContent('December')
  })

  it('has all year options', () => {
    render(<PaymentStep {...defaultProps} />)

    const select = screen.getByLabelText('Expiry Year')
    expect(select).toHaveTextContent('2026')
    expect(select).toHaveTextContent('2021')
  })
})
