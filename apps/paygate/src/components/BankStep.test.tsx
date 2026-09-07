import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BankStep } from './BankStep'

describe('BankStep', () => {
  const defaultProps = {
    data: { cardNumber: '', expiryDate: '', cvv: '', cardholderName: '' },
    onChange: vi.fn(),
  }

  it('renders the section heading', () => {
    render(<BankStep {...defaultProps} />)

    expect(screen.getByText('Bank Information')).toBeInTheDocument()
  })

  it('renders all four input fields', () => {
    render(<BankStep {...defaultProps} />)

    expect(screen.getByLabelText('Card Number *')).toBeInTheDocument()
    expect(screen.getByLabelText('Expiry Date *')).toBeInTheDocument()
    expect(screen.getByLabelText('CVV *')).toBeInTheDocument()
    expect(screen.getByLabelText('Cardholder Name')).toBeInTheDocument()
  })

  it('displays placeholder text', () => {
    render(<BankStep {...defaultProps} />)

    expect(screen.getByPlaceholderText('Enter card number')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('MM/YY')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('CVV')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Name on card')).toBeInTheDocument()
  })

  it('calls onChange when typing in card number', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()

    render(<BankStep data={defaultProps.data} onChange={onChange} />)

    await user.type(screen.getByLabelText('Card Number *'), '4111111111111111')
    expect(onChange).toHaveBeenCalled()
  })

  it('calls onChange when typing in expiry date', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()

    render(<BankStep data={defaultProps.data} onChange={onChange} />)

    await user.type(screen.getByLabelText('Expiry Date *'), '12/28')
    expect(onChange).toHaveBeenCalled()
  })

  it('calls onChange when typing in CVV', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()

    render(<BankStep data={defaultProps.data} onChange={onChange} />)

    await user.type(screen.getByLabelText('CVV *'), '123')
    expect(onChange).toHaveBeenCalled()
  })

  it('calls onChange when typing in cardholder name', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()

    render(<BankStep data={defaultProps.data} onChange={onChange} />)

    await user.type(screen.getByLabelText('Cardholder Name'), 'John Doe')
    expect(onChange).toHaveBeenCalled()
  })

  it('displays current values', () => {
    render(
      <BankStep
        data={{
          cardNumber: '4111111111111111',
          expiryDate: '12/28',
          cvv: '123',
          cardholderName: 'John',
        }}
        onChange={vi.fn()}
      />,
    )

    expect(screen.getByLabelText('Card Number *')).toHaveValue('4111111111111111')
    expect(screen.getByLabelText('Expiry Date *')).toHaveValue('12/28')
    expect(screen.getByLabelText('CVV *')).toHaveValue('123')
    expect(screen.getByLabelText('Cardholder Name')).toHaveValue('John')
  })

  it('required fields are required', () => {
    render(<BankStep {...defaultProps} />)

    expect(screen.getByLabelText('Card Number *')).toBeRequired()
    expect(screen.getByLabelText('Expiry Date *')).toBeRequired()
    expect(screen.getByLabelText('CVV *')).toBeRequired()
    expect(screen.getByLabelText('Cardholder Name')).not.toBeRequired()
  })

  it('has accessible section landmark', () => {
    render(<BankStep {...defaultProps} />)

    expect(screen.getByRole('region', { name: 'Bank Information' })).toBeInTheDocument()
  })
})
