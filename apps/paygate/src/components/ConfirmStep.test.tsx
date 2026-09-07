import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ConfirmStep } from './ConfirmStep'

const fullData = {
  fullName: 'John Doe',
  email: 'john@example.com',
  phone: '555-1234',
  cardNumber: '4111111111111111',
  expiryDate: '12/28',
  cvv: '123',
  cardholderName: 'John Doe',
}

describe('ConfirmStep', () => {
  it('renders the section heading', () => {
    render(<ConfirmStep data={fullData} />)

    expect(screen.getByRole('heading', { name: 'Confirmation' })).toBeInTheDocument()
  })

  it('displays personal information summary', () => {
    render(<ConfirmStep data={fullData} />)

    expect(screen.getByText('Full Name:')).toBeInTheDocument()
    expect(screen.getByText('Email:')).toBeInTheDocument()
    expect(screen.getByText('john@example.com')).toBeInTheDocument()
    expect(screen.getByText('Phone:')).toBeInTheDocument()
    expect(screen.getByText('555-1234')).toBeInTheDocument()
  })

  it('masks card number showing only last 4 digits', () => {
    render(<ConfirmStep data={fullData} />)

    expect(screen.getByText('Card Number:')).toBeInTheDocument()
    expect(screen.getByText('************1111')).toBeInTheDocument()
  })

  it('masks CVV with asterisks', () => {
    render(<ConfirmStep data={fullData} />)

    expect(screen.getByText('CVV:')).toBeInTheDocument()
    expect(screen.getByText('***')).toBeInTheDocument()
  })

  it('displays bank information summary', () => {
    render(<ConfirmStep data={fullData} />)

    expect(screen.getByText('Expiry Date:')).toBeInTheDocument()
    expect(screen.getByText('12/28')).toBeInTheDocument()
    expect(screen.getByText('Cardholder:')).toBeInTheDocument()
  })

  it('has accessible section landmark', () => {
    render(<ConfirmStep data={fullData} />)

    expect(screen.getByRole('region', { name: 'Confirmation' })).toBeInTheDocument()
  })

  it('masks short card number without asterisks', () => {
    render(<ConfirmStep data={{ ...fullData, cardNumber: '1111' }} />)

    expect(screen.getByText('1111')).toBeInTheDocument()
  })

  it('shows full name and cardholder values in table', () => {
    render(<ConfirmStep data={fullData} />)

    const cells = screen.getAllByText('John Doe')
    expect(cells.length).toBe(2)
  })
})
