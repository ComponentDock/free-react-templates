import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ConfirmStep } from './ConfirmStep'

describe('ConfirmStep', () => {
  const mockData = {
    username: 'johndoe',
    email: 'john@example.com',
    password: 'secret',
    confirmPassword: 'secret',
    cardType: 'Business Credit Cards',
    cardNumber: '4890506250081234',
    cvc: '123',
    expiryMonth: 'January',
    expiryYear: '2026',
  }

  it('renders the confirmation heading', () => {
    render(<ConfirmStep data={mockData} />)

    expect(screen.getByRole('heading', { name: 'Confirm Details' })).toBeInTheDocument()
  })

  it('displays all form data in the summary table', () => {
    render(<ConfirmStep data={mockData} />)

    expect(screen.getByText('johndoe')).toBeInTheDocument()
    expect(screen.getByText('john@example.com')).toBeInTheDocument()
    expect(screen.getByText('Business Credit Cards')).toBeInTheDocument()
    expect(screen.getByText('4890506250081234')).toBeInTheDocument()
    expect(screen.getByText('123')).toBeInTheDocument()
    expect(screen.getByText('January')).toBeInTheDocument()
    expect(screen.getByText('2026')).toBeInTheDocument()
  })

  it('shows row labels', () => {
    render(<ConfirmStep data={mockData} />)

    expect(screen.getByText('Username:')).toBeInTheDocument()
    expect(screen.getByText('Email Address:')).toBeInTheDocument()
    expect(screen.getByText('Card Type:')).toBeInTheDocument()
    expect(screen.getByText('Card Number:')).toBeInTheDocument()
    expect(screen.getByText('CVC:')).toBeInTheDocument()
    expect(screen.getByText('Expiry Month:')).toBeInTheDocument()
    expect(screen.getByText('Expiry Year:')).toBeInTheDocument()
  })
})
